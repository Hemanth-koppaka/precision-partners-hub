import { motion } from "framer-motion";
import { 
  Target, 
  Zap, 
  ShieldCheck, 
  Truck, 
  Settings, 
  Users 
} from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "High Precision",
    description: "Tight tolerance machining with accuracy up to ±0.01mm for critical applications.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient production processes ensuring quick delivery without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous inspection at every stage with ISO-grade quality management systems.",
  },
  {
    icon: Settings,
    title: "Custom OEM Solutions",
    description: "Tailored manufacturing solutions to meet your specific design requirements.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "99% on-time delivery rate with efficient logistics and supply chain management.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled engineers and technicians with decades of manufacturing expertise.",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-secondary/50 precision-dots">
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
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Manufacturing Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Advanced manufacturing capabilities backed by years of experience 
            and commitment to excellence.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-cta/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
