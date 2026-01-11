import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Shield, label: "ISO-Grade Quality" },
  { icon: Clock, label: "Fast Delivery" },
  { icon: Award, label: "20+ Years Experience" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-cta/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              Trusted Manufacturer Since 2002
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient-hero">Precision-Engineered</span>
              <br />
              <span className="text-white">Press Components</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Delivering high-quality industrial components with unmatched precision, 
              reliability, and on-time delivery to power your manufacturing success.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Request a Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Products
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-cta" />
                  </div>
                  <span className="text-sm text-white/90">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                >
                  <div className="text-4xl font-heading font-bold text-cta mb-2">20+</div>
                  <div className="text-white/80 text-sm">Years in Business</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                >
                  <div className="text-4xl font-heading font-bold text-cta mb-2">500+</div>
                  <div className="text-white/80 text-sm">Products Delivered</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                >
                  <div className="text-4xl font-heading font-bold text-cta mb-2">50+</div>
                  <div className="text-white/80 text-sm">Trusted Clients</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                >
                  <div className="text-4xl font-heading font-bold text-cta mb-2">99%</div>
                  <div className="text-white/80 text-sm">On-Time Delivery</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
