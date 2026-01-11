import { motion } from "framer-motion";

const clients = [
  { name: "Veeline Industries", url: "veeline.com" },
  { name: "Axiom Power Products", url: "axiompowerproducts.com" },
  { name: "Accord Power Conversion", url: "accordpower.co.in" },
  { name: "Toshiba T&D Systems", url: "toshiba-india.com" },
  { name: "Mikroflo Filters", url: "mikroflo.com" },
  { name: "Usha International", url: "usha.com" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 lg:py-28 bg-primary">
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
            Trusted By Industry Leaders
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Valued Clients
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            We are proud to partner with leading companies across diverse industries, 
            delivering precision components that power their products.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-300"
            >
              {/* Placeholder for logo - using initials */}
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-heading font-bold text-white">
                  {client.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-white text-sm leading-tight">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <svg className="w-12 h-12 text-cta mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              "CS Industries has been our trusted supplier for over 10 years. Their precision 
              components and reliable delivery have been instrumental in maintaining our 
              production efficiency."
            </p>
            <div className="text-white/70">
              <span className="font-semibold text-white">Operations Manager</span>
              <span className="mx-2">•</span>
              <span>Leading Refrigeration Company</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
