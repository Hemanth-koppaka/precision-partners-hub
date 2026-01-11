import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ownerImage from "@/assets/owner.png";

const highlights = [
  "20+ years of manufacturing excellence",
  "MSME Certified organization",
  "Advanced CNC & press machinery",
  "Skilled engineering team",
  "Pan-India delivery network",
  "Customized OEM solutions",
];

const About = () => {
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
                alt="Founder"
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
              <div className="text-4xl font-heading font-bold text-cta">20+</div>
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
              Your Trusted Manufacturing Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Since 2002, we have been a customer-preferred manufacturing partner, 
              consistently delivering reliable, high-quality industrial components 
              that add value to our customers' products and businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to understand our customers' needs and deliver 
              precision-engineered components that ensure performance, durability, 
              and reliability. We combine advanced manufacturing capabilities with 
              skilled professionals to offer customized and cost-effective solutions.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
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
