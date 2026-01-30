import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919848020840";
const PREFILLED_MESSAGE = "Request Quote";

const Contact = () => {
  const openDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Vinayaka+Complex,+10-6/1/B,+Vinayak+Nagar,+Balanagar,+Hyderabad,+Telangana+500042,+India",
      "_blank"
    );
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;
    window.open(url, "_blank");
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
            Have a project in mind? Contact us directly via phone, email, or WhatsApp.
            We're here to help with your manufacturing needs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          >
            {/* Office Address */}
            <div className="bg-card rounded-xl p-5 border border-border lg:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Office Address</div>
                  <div className="font-semibold text-foreground text-sm">
                    Vinayaka Complex, 10-6/1/B,<br />
                    Vinayak Nagar, Balanagar,<br />
                    Hyderabad, Telangana – 500042, India
                  </div>
                </div>
              </div>
            </div>

            {/* Proprietor */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">Proprietor</div>
              <div className="font-semibold text-foreground">K. Nagabhushanam</div>
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

          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
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
              className="flex-1 group"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-border shadow-md h-[300px]"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
