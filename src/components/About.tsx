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

        {/* Owner Card - Large Photo, Executive Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-hero rounded-2xl p-8 md:p-12 mb-10 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Large Owner Photo - Dominant Visual */}
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-4 border-cta/30 shadow-2xl">
                <img
                  src={ownerImage}
                  alt="K. Nagabhushanam - Proprietor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-cta text-cta-foreground text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
                30+ Years
              </div>
            </div>

            {/* Owner Details - Compact, Executive Style */}
            <div className="text-center lg:text-left text-white flex-1">
              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                K. Nagabhushanam
              </h3>
              <p className="text-cta font-semibold text-xl md:text-2xl mb-4">Proprietor</p>
              <p className="text-white/90 leading-relaxed text-lg max-w-lg">
                Leading Sri Chaitanya Industries since 1992 with a commitment to 
                precision engineering and customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                <span className="px-4 py-2 bg-white/15 rounded-full text-sm font-medium text-white">Est. 1992</span>
                <span className="px-4 py-2 bg-white/15 rounded-full text-sm font-medium text-white">Hyderabad</span>
                <span className="px-4 py-2 bg-white/15 rounded-full text-sm font-medium text-white">MSME Certified</span>
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
