import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Validation constants
const MAX_NAME_LENGTH = 100;
const MAX_COMPANY_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_PHONE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_MESSAGE_LENGTH = 10;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_HOURS = 1;

// Validation patterns
const NAME_PATTERN = /^[a-zA-Z\s\-.'']+$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9\s\-()]{8,20}$/;

interface ContactSubmission {
  name: string;
  company?: string;
  email: string;
  phone: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateInput(data: ContactSubmission): ValidationError[] {
  const errors: ValidationError[] = [];
  
  // Name validation
  if (!data.name || typeof data.name !== "string") {
    errors.push({ field: "name", message: "Name is required" });
  } else {
    const name = data.name.trim();
    if (name.length === 0) {
      errors.push({ field: "name", message: "Name is required" });
    } else if (name.length > MAX_NAME_LENGTH) {
      errors.push({ field: "name", message: `Name must be less than ${MAX_NAME_LENGTH} characters` });
    } else if (!NAME_PATTERN.test(name)) {
      errors.push({ field: "name", message: "Name contains invalid characters" });
    }
  }
  
  // Company validation (optional)
  if (data.company && typeof data.company === "string") {
    const company = data.company.trim();
    if (company.length > MAX_COMPANY_LENGTH) {
      errors.push({ field: "company", message: `Company name must be less than ${MAX_COMPANY_LENGTH} characters` });
    }
  }
  
  // Email validation
  if (!data.email || typeof data.email !== "string") {
    errors.push({ field: "email", message: "Email is required" });
  } else {
    const email = data.email.trim();
    if (email.length === 0) {
      errors.push({ field: "email", message: "Email is required" });
    } else if (email.length > MAX_EMAIL_LENGTH) {
      errors.push({ field: "email", message: `Email must be less than ${MAX_EMAIL_LENGTH} characters` });
    } else if (!EMAIL_PATTERN.test(email)) {
      errors.push({ field: "email", message: "Please enter a valid email address" });
    }
  }
  
  // Phone validation
  if (!data.phone || typeof data.phone !== "string") {
    errors.push({ field: "phone", message: "Phone number is required" });
  } else {
    const phone = data.phone.trim();
    if (phone.length === 0) {
      errors.push({ field: "phone", message: "Phone number is required" });
    } else if (!PHONE_PATTERN.test(phone)) {
      errors.push({ field: "phone", message: "Please enter a valid phone number" });
    }
  }
  
  // Message validation
  if (!data.message || typeof data.message !== "string") {
    errors.push({ field: "message", message: "Message is required" });
  } else {
    const message = data.message.trim();
    if (message.length < MIN_MESSAGE_LENGTH) {
      errors.push({ field: "message", message: `Message must be at least ${MIN_MESSAGE_LENGTH} characters` });
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      errors.push({ field: "message", message: `Message must be less than ${MAX_MESSAGE_LENGTH} characters` });
    }
  }
  
  return errors;
}

async function hashIP(ip: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(ip + Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"));
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    const ipHash = await hashIP(clientIP);

    // Create Supabase client with service role for server-side operations
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Clean up old rate events first
    await supabase.rpc("cleanup_old_rate_events");

    // Check rate limit
    const windowStart = new Date();
    windowStart.setHours(windowStart.getHours() - RATE_LIMIT_WINDOW_HOURS);
    
    const { count, error: rateError } = await supabase
      .from("contact_rate_events")
      .select("*", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", windowStart.toISOString());

    if (rateError) {
      console.error("Rate limit check error:", rateError);
    }

    if (count !== null && count >= RATE_LIMIT_MAX) {
      console.log(`Rate limit exceeded for IP hash: ${ipHash.substring(0, 8)}...`);
      return new Response(
        JSON.stringify({ 
          error: "Too many requests", 
          message: "You have exceeded the maximum number of submissions. Please try again later." 
        }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Parse and validate request body
    let body: ContactSubmission;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Server-side validation
    const validationErrors = validateInput(body);
    if (validationErrors.length > 0) {
      console.log("Validation errors:", validationErrors);
      return new Response(
        JSON.stringify({ 
          error: "Validation failed", 
          errors: validationErrors 
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: body.name.trim(),
      company: body.company?.trim() || null,
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      message: body.message.trim(),
      ip_hash: ipHash,
    };

    // Insert submission
    const { data: submission, error: insertError } = await supabase
      .from("contact_submissions")
      .insert(sanitizedData)
      .select()
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Record rate limit event
    await supabase.from("contact_rate_events").insert({ ip_hash: ipHash });

    console.log(`Contact submission saved: ${submission.id}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your quote request has been submitted successfully. We'll get back to you within 24 hours.",
        id: submission.id 
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
