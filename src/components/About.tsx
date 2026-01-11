import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Eye, Target } from "lucide-react";
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
  "Understand customer needs and deliver precision-engineered components that ensure performance, durability, and reliability",
  "Provide consistent quality, timely delivery, and responsive service that builds long-term relationships",
  "Combine advanced manufacturing capabilities with skilled professionals for customized, cost-effective solutions",
  "Maintain transparent and ethical business practices that earn customer trust",
  "Continuously improve processes, products, and service to exceed expectations",
];

const About = () => {
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Shape */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-cta/10 rounded-2xl" />
            <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-cta/30 rounded-2xl" />
            
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ownerImage}
                alt="K. Nagabhushanam - Proprietor"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl"
            >
              <div className="text-4xl font-heading font-bold text-cta">30+</div>
              <div className="text-sm">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-cta font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Sri Chaitanya Industries
            </h2>
            
            {/* Key Facts */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <span className="px-3 py-1 bg-secondary rounded-full text-foreground">Est. 1992</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-foreground">Balanagar, Hyderabad</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-foreground">K. Nagabhushanam, Proprietor</span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Since 1992, we have been a customer-preferred manufacturing partner, 
              consistently delivering reliable, high-quality industrial components 
              that add value to our customers' products and businesses.
            </p>

            {/* Vision - Always Visible */}
            <div className="bg-gradient-hero text-white rounded-xl p-6 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-cta" />
                <h3 className="font-heading font-bold text-lg">Our Vision</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To become a customer-preferred manufacturing partner by consistently delivering 
                reliable, high-quality industrial components that add value to our customers' 
                products and businesses.
              </p>
            </div>

            {/* Mission - Expandable */}
            <div className="border border-border rounded-xl overflow-hidden mb-6">
              <button
                onClick={() => setIsMissionOpen(!isMissionOpen)}
                className="w-full flex items-center justify-between p-4 bg-card hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-cta" />
                  <span className="font-heading font-semibold text-foreground">Our Mission</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isMissionOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isMissionOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 space-y-3">
                      {missionPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Read More - Company History */}
            <div className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                className="w-full flex items-center justify-between p-4 bg-card hover:bg-secondary/50 transition-colors"
              >
                <span className="font-heading font-semibold text-foreground">Read More About Us</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isHistoryOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isHistoryOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-sm text-muted-foreground space-y-3">
                      <p>
                        Founded in 1992 by K. Nagabhushanam, Sri Chaitanya Industries has grown from 
                        a small workshop in Balanagar, Hyderabad to become a trusted name in precision 
                        industrial component manufacturing.
                      </p>
                      <p>
                        Over three decades, we have built lasting partnerships with leading OEMs and 
                        industrial clients across India, serving diverse sectors including power equipment, 
                        refrigeration, filtration, and consumer durables.
                      </p>
                      <p>
                        Our commitment to ethical practices, continuous improvement, and customer 
                        satisfaction remains the cornerstone of our operations.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
