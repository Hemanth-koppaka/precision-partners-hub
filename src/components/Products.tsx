import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
    useCases: ["Material handling equipment", "Industrial trolleys", "Storage systems"],
    specifications: "Load capacity: 200kg, Wheel diameter: 100mm, Swivel lock available",
  },
  {
    id: 2,
    name: "Custom L-Bracket",
    category: "Brackets",
    image: lBracket,
    description: "Galvanized steel L-bracket with mounting holes",
    useCases: ["Structural support", "Cabinet mounting", "Equipment installation"],
    specifications: "Material: Galvanized steel, Thickness: 2-4mm, Custom sizes available",
  },
  {
    id: 3,
    name: "Mounting Plate",
    category: "Plates",
    image: mountingPlate,
    description: "Precision-cut galvanized mounting plate",
    useCases: ["Motor mounting", "Panel installation", "Equipment bases"],
    specifications: "Material: Cold-rolled steel, Surface: Galvanized/Powder coated",
  },
  {
    id: 4,
    name: "Vented Panel",
    category: "Panels",
    image: ventedPlate,
    description: "Matte black vented mounting panel",
    useCases: ["Electronics enclosures", "Ventilation systems", "Heat dissipation"],
    specifications: "Open area: 40-60%, Material: Steel/Aluminum, Custom patterns available",
  },
  {
    id: 5,
    name: "Multi-Tool Component",
    category: "Tools",
    image: wrenchTool,
    description: "Stainless steel multi-functional component",
    useCases: ["Maintenance tools", "Assembly equipment", "Custom tooling"],
    specifications: "Material: Stainless steel 304/316, Precision machined",
  },
  {
    id: 6,
    name: "Box Bracket",
    category: "Brackets",
    image: blackBracket,
    description: "Powder-coated steel box bracket",
    useCases: ["Heavy load bearing", "Furniture hardware", "Industrial fixtures"],
    specifications: "Material: MS Steel, Finish: Powder coated, Weld quality: Grade A",
  },
  {
    id: 7,
    name: "Precision Tool Blank",
    category: "Tools",
    image: whiteTool,
    description: "Coated precision tool component",
    useCases: ["Tool manufacturing", "Jig components", "Custom machinery"],
    specifications: "Material: Tool steel, Coating: Zinc/Nickel, Tolerance: ±0.05mm",
  },
  {
    id: 8,
    name: "Folded Steel Bracket",
    category: "Brackets",
    image: steelBracket,
    description: "Heavy-gauge folded steel bracket",
    useCases: ["Structural applications", "Heavy machinery", "Construction hardware"],
    specifications: "Material: HR Steel, Thickness: 3-8mm, Bend radius: Customizable",
  },
  // Additional placeholder products for 21 total
  {
    id: 9,
    name: "Deep Drawn Cup",
    category: "Deep Drawn",
    image: mountingPlate,
    description: "Precision deep drawn steel cup component",
    useCases: ["Filter housings", "Cap components", "Container parts"],
    specifications: "Material: CRCA Steel, Depth ratio: Up to 2:1, Surface: Bright finish",
  },
  {
    id: 10,
    name: "Sheet Metal Enclosure",
    category: "Enclosures",
    image: ventedPlate,
    description: "Custom sheet metal enclosure box",
    useCases: ["Electronics housing", "Control panels", "Junction boxes"],
    specifications: "Material: Steel/Aluminum, Finish: Powder coated, IP rating available",
  },
  {
    id: 11,
    name: "Stamped Terminal",
    category: "Electrical",
    image: lBracket,
    description: "Precision stamped electrical terminal",
    useCases: ["Electrical connections", "Power equipment", "Switchgear"],
    specifications: "Material: Copper/Brass, Plating: Tin/Silver, Contact resistance: Low",
  },
  {
    id: 12,
    name: "Custom Washer Set",
    category: "Fasteners",
    image: casterWheel,
    description: "Precision cut custom washers",
    useCases: ["Assembly hardware", "Load distribution", "Spacing applications"],
    specifications: "Material: Various, Thickness: 0.5-5mm, ID/OD: Custom sizes",
  },
  {
    id: 13,
    name: "Fabricated Frame",
    category: "Frames",
    image: steelBracket,
    description: "Welded fabricated frame assembly",
    useCases: ["Equipment frames", "Support structures", "Machine bases"],
    specifications: "Material: MS Steel, Weld: MIG/TIG, Finish: Painted/Galvanized",
  },
  {
    id: 14,
    name: "Perforated Sheet",
    category: "Panels",
    image: ventedPlate,
    description: "Custom perforated metal sheet",
    useCases: ["Acoustic panels", "Filtration screens", "Decorative panels"],
    specifications: "Pattern: Round/Square/Slot, Open area: 20-70%, Custom sizes",
  },
  {
    id: 15,
    name: "Drawn Shell",
    category: "Deep Drawn",
    image: mountingPlate,
    description: "Deep drawn cylindrical shell",
    useCases: ["Motor housings", "Filter bodies", "Cylindrical containers"],
    specifications: "Material: Steel/SS, Wall thickness: 0.5-2mm, Seamless construction",
  },
  {
    id: 16,
    name: "Clamp Bracket",
    category: "Brackets",
    image: blackBracket,
    description: "Industrial clamp mounting bracket",
    useCases: ["Pipe mounting", "Cable management", "Equipment securing"],
    specifications: "Material: Steel, Finish: Zinc plated, Load capacity: Various",
  },
  {
    id: 17,
    name: "Cover Plate",
    category: "Plates",
    image: mountingPlate,
    description: "Precision cover plate with cutouts",
    useCases: ["Electrical covers", "Access panels", "Protection plates"],
    specifications: "Material: Steel/Aluminum, Cutouts: Laser/Punch, Finish: Various",
  },
  {
    id: 18,
    name: "Spring Clip",
    category: "Fasteners",
    image: wrenchTool,
    description: "Stainless steel spring clip component",
    useCases: ["Quick release", "Panel retention", "Assembly clips"],
    specifications: "Material: Spring steel/SS, Tension: Customizable, Heat treated",
  },
  {
    id: 19,
    name: "Heat Sink Plate",
    category: "Thermal",
    image: lBracket,
    description: "Aluminum heat dissipation plate",
    useCases: ["Electronics cooling", "LED fixtures", "Power electronics"],
    specifications: "Material: Aluminum, Surface: Anodized, Thermal conductivity: High",
  },
  {
    id: 20,
    name: "Bus Bar",
    category: "Electrical",
    image: steelBracket,
    description: "Copper bus bar for power distribution",
    useCases: ["Power panels", "Switchgear", "Distribution boards"],
    specifications: "Material: ETP Copper, Plating: Tin/Silver, Current rating: Custom",
  },
  {
    id: 21,
    name: "Filter Base",
    category: "Deep Drawn",
    image: casterWheel,
    description: "Deep drawn filter base component",
    useCases: ["Oil filters", "Air filters", "Industrial filtration"],
    specifications: "Material: CRCA/SS, Seam: Welded, Pressure rating: Custom",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  useCases: string[];
  specifications: string;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation((prev) => prev + 90);
  };

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
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onClick={() => setSelectedProduct(product)}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border cursor-pointer hover:border-cta/30"
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
                <h3 className="font-heading font-semibold text-foreground mt-1 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
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

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl text-primary">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                {/* Product Image with 360 simulation */}
                <div className="relative bg-gradient-steel rounded-xl p-6 flex items-center justify-center">
                  <motion.img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full max-h-64 object-contain"
                    style={{ rotate: rotation }}
                    animate={{ rotate: rotation }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4"
                    onClick={handleRotate}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Rotate
                  </Button>
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-cta uppercase tracking-wide">
                      {selectedProduct.category}
                    </span>
                    <p className="text-muted-foreground mt-2">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      Use Cases
                    </h4>
                    <ul className="space-y-1">
                      {selectedProduct.useCases.map((useCase, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cta" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      Specifications
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProduct.specifications}
                    </p>
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full mt-4"
                    onClick={() => {
                      setSelectedProduct(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
