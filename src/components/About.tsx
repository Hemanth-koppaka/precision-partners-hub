import { motion } from "framer-motion";
import { CheckCircle2, Eye, Target, Building2 } from "lucide-react";
import ownerImage from "@/assets/owner.png";

const highlights = [
  "30+ years of manufacturing excellence",
  "MSME Certified organization",
  "Advanced CNC & press machinery",
  "Skilled engineering team",
  "Pan-India delivery network",
  "Customized OEM solutions",
];

const missionPoints = [
  "Deliver precision-engineered components with performance and reliability",
  "Provide consistent quality and timely delivery",
  "Combine advanced manufacturing with skilled professionals",
  "Maintain transparent and ethical business practices",
  "Continuously improve to exceed expectations",
];

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-cta font-semibold text-sm uppercase tracking-wider mb-3">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Sri Chaitanya Industries
          </h2>
        </motion.div>

        {/* Owner Card - Compact Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-hero rounded-2xl p-6 md:p-8 mb-10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Owner Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cta/30 shadow-lg">
                <img
                  src={ownerImage}
                  alt="K. Nagabhushanam - Proprietor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-cta text-cta-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                30+ Years
              </div>
            </div>

            {/* Owner Details */}
            <div className="text-center md:text-left text-white flex-1">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-1">
                K. Nagabhushanam
              </h3>
              <p className="text-cta font-semibold text-lg mb-3">Proprietor</p>
              <p className="text-white/85 leading-relaxed max-w-xl">
                Since 1992, leading Sri Chaitanya Industries as a customer-preferred 
                manufacturing partner, consistently delivering reliable, high-quality 
                industrial components from Balanagar, Hyderabad.
              </p>
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90">Est. 1992</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90">Balanagar, Hyderabad</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90">MSME Certified</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-cta" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become a customer-preferred manufacturing partner by consistently delivering 
              reliable, high-quality industrial components that add value to our customers' 
              products and businesses.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-cta" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Our Mission</h3>
            </div>
            <ul className="space-y-2">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-secondary/50 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-cta" />
            <h3 className="font-heading font-bold text-lg text-foreground">Why Choose Us</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-3 bg-background rounded-lg p-3"
              >
                <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
