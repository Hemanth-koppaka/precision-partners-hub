import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User, Send, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Vinayaka+Complex,+10-6/1/B,+Vinayak+Nagar,+Balanagar,+Hyderabad,+Telangana+500042,+India",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cta font-semibold text-sm uppercase tracking-wider mb-4">
            Reach Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? Get in touch for a customized quote.
            Our team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-card rounded-xl p-5 border border-border col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Address</div>
                    <div className="font-semibold text-foreground">
                      Vinayaka Complex, 10-6/1/B,<br />
                      Vinayak Nagar, Balanagar,<br />
                      Hyderabad, Telangana – 500042, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                <a 
                  href="tel:+919848020840" 
                  className="font-semibold text-foreground hover:text-cta transition-colors block"
                >
                  +91 98480 20840
                </a>
                <a 
                  href="tel:+919490461989" 
                  className="font-semibold text-foreground hover:text-cta transition-colors block"
                >
                  +91 94904 61989
                </a>
              </div>

              {/* Email */}
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <a 
                  href="mailto:srichaitanya.industries@gmail.com" 
                  className="font-semibold text-foreground hover:text-cta transition-colors text-sm break-all"
                >
                  srichaitanya.industries@gmail.com
                </a>
              </div>

              {/* Proprietor */}
              <div className="bg-card rounded-xl p-5 border border-border col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Proprietor</div>
                <div className="font-semibold text-foreground">K. Nagabhushanam</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="flex-1 group"
                onClick={openDirections}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
              <Button 
                variant="hero" 
                size="lg" 
                className="flex-1"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request a Quote
              </Button>
            </div>

            {/* Google Map - Correct Location */}
            <div className="rounded-xl overflow-hidden border border-border shadow-md h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.4475!3d17.4670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e25e22c335%3A0x8c3e7b6c3e7b6c3e!2sVinayaka%20Complex%2C%20Vinayak%20Nagar%2C%20Balanagar%2C%20Hyderabad%2C%20Telangana%20500042!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Chaitanya Industries - Vinayaka Complex, Balanagar"
              />
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            id="quote-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Send us a message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98480 20840"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Requirements *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project requirements, quantity, specifications, etc."
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Quote Request
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                We'll respond within 24 hours with a customized quote.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
