import { motion } from "framer-motion";
import { Building, MapPin } from "lucide-react";

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

        {/* Registered Office Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">
                Regd. Office
              </h3>
            </div>

            {/* Address Content */}
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div className="text-foreground leading-relaxed">
                <p className="font-semibold mb-1">K. Nagabhushanam</p>
                <p className="text-muted-foreground">
                  19 & 21, 10-6/1/B, Vinayaka Complex<br />
                  Vinayak Nagar, Balanagar<br />
                  Hyderabad, Telangana – 500042<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
