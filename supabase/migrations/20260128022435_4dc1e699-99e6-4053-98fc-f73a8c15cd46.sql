-- Create table for storing contact form submissions
CREATE TABLE public.contact_submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    ip_hash TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- No public SELECT policy - submissions are private and only accessible server-side
-- Admin access would be added separately if needed

-- Create table for rate limiting (stores hashed IPs)
CREATE TABLE public.contact_rate_events (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    ip_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security  
ALTER TABLE public.contact_rate_events ENABLE ROW LEVEL SECURITY;

-- No public policies - rate limiting table is server-side only

-- Create index for efficient rate limit queries
CREATE INDEX idx_contact_rate_events_ip_hash_created ON public.contact_rate_events (ip_hash, created_at DESC);

-- Create function to clean up old rate events (older than 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_events()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    DELETE FROM public.contact_rate_events
    WHERE created_at < NOW() - INTERVAL '24 hours';
END;
$$;