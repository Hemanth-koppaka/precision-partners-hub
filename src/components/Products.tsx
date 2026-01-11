import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import casterWheel from "@/assets/products/caster-wheel.png";
import lBracket from "@/assets/products/l-bracket.png";
import mountingPlate from "@/assets/products/mounting-plate.png";
import ventedPlate from "@/assets/products/vented-plate.png";
import wrenchTool from "@/assets/products/wrench-tool.png";
import blackBracket from "@/assets/products/black-bracket.png";
import whiteTool from "@/assets/products/white-tool.png";
import steelBracket from "@/assets/products/steel-bracket.png";

const products = [
  {
    id: 1,
    name: "Caster Wheel Assembly",
    category: "Wheel Components",
    image: casterWheel,
    description: "Heavy-duty swivel caster with precision bearings",
  },
  {
    id: 2,
    name: "Custom L-Bracket",
    category: "Brackets",
    image: lBracket,
    description: "Galvanized steel L-bracket with mounting holes",
  },
  {
    id: 3,
    name: "Mounting Plate",
    category: "Plates",
    image: mountingPlate,
    description: "Precision-cut galvanized mounting plate",
  },
  {
    id: 4,
    name: "Vented Panel",
    category: "Panels",
    image: ventedPlate,
    description: "Matte black vented mounting panel",
  },
  {
    id: 5,
    name: "Multi-Tool Component",
    category: "Tools",
    image: wrenchTool,
    description: "Stainless steel multi-functional component",
  },
  {
    id: 6,
    name: "Box Bracket",
    category: "Brackets",
    image: blackBracket,
    description: "Powder-coated steel box bracket",
  },
  {
    id: 7,
    name: "Precision Tool Blank",
    category: "Tools",
    image: whiteTool,
    description: "Coated precision tool component",
  },
  {
    id: 8,
    name: "Folded Steel Bracket",
    category: "Brackets",
    image: steelBracket,
    description: "Heavy-gauge folded steel bracket",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Products = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-background">
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
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Precision Press Components
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            High-quality industrial components engineered for durability, precision, 
            and reliable performance across diverse applications.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-steel p-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="heroOutline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <span className="text-xs font-medium text-cta uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="font-heading font-semibold text-foreground mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="cta" size="lg" className="group">
            View Full Catalogue
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
