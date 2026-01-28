import { motion } from "framer-motion";
import pressToolImage from "@/assets/press-tool.png";

const AdditionalInfo = () => {
  return (
    <section className="py-12 lg:py-16 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block text-cta font-semibold text-sm uppercase tracking-wider mb-3">
            Additional Information
          </span>
        </motion.div>

        {/* Tool Image Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={pressToolImage}
                alt="Precision Press Tool - Industrial Manufacturing Equipment"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">
              Precision Press Tool Manufacturing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
