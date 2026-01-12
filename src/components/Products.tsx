import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, X, RotateCcw, Eye } from "lucide-react";
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
import basePlate from "@/assets/products/base-plate.png";
import threadedPlate from "@/assets/products/threaded-plate.png";
import uBracket from "@/assets/products/u-bracket.png";
import whiteWrench from "@/assets/products/white-wrench.png";
import foldedBracket from "@/assets/products/folded-bracket.png";
import zBracket from "@/assets/products/z-bracket.png";
import fanPanel from "@/assets/products/fan-panel.png";
import gussetPlate from "@/assets/products/gusset-plate.png";
import motorBracket from "@/assets/products/motor-bracket.png";
import hingeBracket from "@/assets/products/hinge-bracket.png";

// Category definitions with products
const categories = [
  {
    id: 1,
    name: "Freezer Hinges",
    products: [
      {
        id: 1,
        name: "Hinge Support Bracket",
        image: hingeBracket,
        description: "Slotted hinge support bracket with pin",
        useCases: ["Freezer door assemblies", "Cold storage", "Refrigeration units"],
        specifications: "Material: Galvanized steel, Pin: Hardened steel, Temperature rating: -40°C to +60°C",
      },
      {
        id: 2,
        name: "Heavy Duty Freezer Hinge",
        image: zBracket,
        description: "Industrial grade freezer door hinge assembly",
        useCases: ["Walk-in freezers", "Industrial cold rooms", "Commercial refrigerators"],
        specifications: "Material: Stainless Steel 304, Load capacity: 50kg per hinge, Corrosion resistant",
      },
      {
        id: 3,
        name: "Spring-Loaded Hinge",
        image: lBracket,
        description: "Self-closing spring hinge for freezer doors",
        useCases: ["Auto-close applications", "Energy-efficient doors", "Commercial kitchens"],
        specifications: "Material: Galvanized steel, Spring force: Adjustable, Cycles: 100,000+",
      },
    ],
  },
  {
    id: 2,
    name: "Press Components",
    products: [
      {
        id: 4,
        name: "Mounting Plate",
        image: mountingPlate,
        description: "Precision-cut galvanized mounting plate",
        useCases: ["Motor mounting", "Panel installation", "Equipment bases"],
        specifications: "Material: Cold-rolled steel, Surface: Galvanized/Powder coated",
      },
      {
        id: 5,
        name: "Base Mounting Plate",
        image: basePlate,
        description: "Precision base plate with countersunk holes",
        useCases: ["Equipment mounting", "Floor fixtures", "Structural bases"],
        specifications: "Material: CRCA Steel, Thickness: 4-6mm, Surface: Galvanized",
      },
      {
        id: 6,
        name: "Threaded Insert Plate",
        image: threadedPlate,
        description: "Steel plate with welded threaded inserts",
        useCases: ["Quick-mount systems", "Adjustable fixtures", "Panel installation"],
        specifications: "Material: Steel, Inserts: M6-M12, Finish: Zinc plated",
      },
      {
        id: 7,
        name: "Gusset Plate",
        image: gussetPlate,
        description: "Triangular gusset reinforcement plate",
        useCases: ["Structural reinforcement", "Corner bracing", "Frame connections"],
        specifications: "Material: MS Steel, Thickness: 2-5mm, Various hole patterns",
      },
    ],
  },
  {
    id: 3,
    name: "Filter Caps",
    products: [
      {
        id: 8,
        name: "Filter Base Assembly",
        image: wrenchTool,
        description: "Deep drawn filter base component",
        useCases: ["Oil filters", "Air filters", "Industrial filtration"],
        specifications: "Material: CRCA/SS, Seam: Welded, Pressure rating: Custom",
      },
      {
        id: 9,
        name: "Filter End Cap",
        image: whiteTool,
        description: "Precision filter end cap with seal groove",
        useCases: ["Hydraulic filters", "Fuel filters", "Water filtration"],
        specifications: "Material: Steel/Aluminum, Seal type: O-ring, Pressure: Up to 10 bar",
      },
      {
        id: 10,
        name: "Threaded Filter Cap",
        image: whiteWrench,
        description: "Threaded cap for filter assemblies",
        useCases: ["Screw-on filters", "Replaceable elements", "Cartridge filters"],
        specifications: "Material: Steel, Thread: Standard metric/BSP, Finish: Zinc plated",
      },
    ],
  },
  {
    id: 4,
    name: "Deep Drawn Press Components",
    products: [
      {
        id: 11,
        name: "Deep Drawn Cup",
        image: casterWheel,
        description: "Precision deep drawn steel cup component",
        useCases: ["Filter housings", "Cap components", "Container parts"],
        specifications: "Material: CRCA Steel, Depth ratio: Up to 2:1, Surface: Bright finish",
      },
      {
        id: 12,
        name: "Cylindrical Housing",
        image: fanPanel,
        description: "Deep drawn cylindrical housing component",
        useCases: ["Motor housings", "Pump casings", "Electronic enclosures"],
        specifications: "Material: Steel/SS, Wall thickness: 0.5-2mm, Height: Up to 150mm",
      },
      {
        id: 13,
        name: "Conical Component",
        image: ventedPlate,
        description: "Deep drawn conical shape component",
        useCases: ["Funnels", "Nozzle housings", "Transition pieces"],
        specifications: "Material: CRCA/SS, Angle: 15-60°, Seamless construction",
      },
    ],
  },
  {
    id: 5,
    name: "Clinching Clips",
    products: [
      {
        id: 14,
        name: "Spring Clip Component",
        image: blackBracket,
        description: "Stainless steel spring clip component",
        useCases: ["Quick release", "Panel retention", "Assembly clips"],
        specifications: "Material: Spring steel/SS, Tension: Customizable, Heat treated",
      },
      {
        id: 15,
        name: "Retaining Clip",
        image: steelBracket,
        description: "Metal retaining clip for secure fastening",
        useCases: ["Cable management", "Pipe clamps", "Component retention"],
        specifications: "Material: Spring steel, Finish: Phosphate/Zinc, Reusable design",
      },
      {
        id: 16,
        name: "Panel Clinch Clip",
        image: uBracket,
        description: "Panel-to-panel clinching clip",
        useCases: ["Sheet metal assembly", "Panel joining", "Quick assembly"],
        specifications: "Material: Galvanized steel, Thickness range: 0.5-1.5mm, No tools required",
      },
    ],
  },
  {
    id: 6,
    name: "Caster Wheels",
    products: [
      {
        id: 17,
        name: "Caster Wheel Assembly",
        image: casterWheel,
        description: "Heavy-duty swivel caster with precision bearings",
        useCases: ["Material handling equipment", "Industrial trolleys", "Storage systems"],
        specifications: "Load capacity: 200kg, Wheel diameter: 100mm, Swivel lock available",
      },
      {
        id: 18,
        name: "Fixed Caster Bracket",
        image: motorBracket,
        description: "Fixed caster mounting bracket assembly",
        useCases: ["Heavy equipment", "Static loads", "Industrial carts"],
        specifications: "Material: Steel, Load: Up to 500kg, Mounting: Plate/Stem options",
      },
      {
        id: 19,
        name: "Brake Caster Unit",
        image: foldedBracket,
        description: "Caster with integrated brake mechanism",
        useCases: ["Mobile workstations", "Safety applications", "Precision positioning"],
        specifications: "Material: Steel/Nylon, Brake type: Foot-operated, Wheel: PU/Rubber",
      },
    ],
  },
  {
    id: 7,
    name: "Sheet Metal Components",
    products: [
      {
        id: 20,
        name: "Custom L-Bracket",
        image: lBracket,
        description: "Galvanized steel L-bracket with mounting holes",
        useCases: ["Structural support", "Cabinet mounting", "Equipment installation"],
        specifications: "Material: Galvanized steel, Thickness: 2-4mm, Custom sizes available",
      },
      {
        id: 21,
        name: "U-Channel Bracket",
        image: uBracket,
        description: "Powder-coated steel U-channel bracket",
        useCases: ["Heavy load bearing", "Furniture hardware", "Industrial fixtures"],
        specifications: "Material: MS Steel, Finish: Powder coated, Weld quality: Grade A",
      },
      {
        id: 22,
        name: "Z-Bracket Assembly",
        image: zBracket,
        description: "Heavy-duty Z-shaped mounting bracket",
        useCases: ["Wall mounting", "Equipment support", "Cantilever applications"],
        specifications: "Material: Galvanized steel, Thickness: 3-6mm, Custom bends",
      },
      {
        id: 23,
        name: "Box Bracket",
        image: blackBracket,
        description: "Powder-coated steel box bracket",
        useCases: ["Heavy load bearing", "Industrial fixtures", "Support structures"],
        specifications: "Material: MS Steel, Finish: Powder coated, Weld quality: Grade A",
      },
    ],
  },
];

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  useCases: string[];
  specifications: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<number[]>(
    categories.map((c) => c.id)
  );
  const [rotation, setRotation] = useState(0);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleRotate = () => {
    setRotation((prev) => prev + 90);
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-cta font-semibold text-sm uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Product Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our comprehensive range of industrial components organized by category.
            Click on any product to view detailed specifications.
          </p>
        </motion.div>

        {/* Category Sections */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-cta/10 text-cta font-bold text-lg">
                    {category.products.length}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground text-left">
                    {category.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm hidden sm:inline">
                    {expandedCategories.includes(category.id) ? "Hide" : "Show"} Products
                  </span>
                  {expandedCategories.includes(category.id) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Products Grid */}
              <AnimatePresence>
                {expandedCategories.includes(category.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 md:p-6 pt-0 border-t border-border">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5"
                      >
                        {category.products.map((product) => (
                          <motion.div
                            key={product.id}
                            variants={itemVariants}
                            onClick={() => setSelectedProduct(product)}
                            className="group bg-background rounded-lg overflow-hidden border border-border hover:border-cta/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                          >
                            {/* Product Image */}
                            <div className="relative aspect-square bg-gradient-to-br from-steel-light to-white p-4 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                              />
                              {/* Quick View Overlay */}
                              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <div className="flex items-center gap-2 text-white font-medium">
                                  <Eye className="w-5 h-5" />
                                  Quick View
                                </div>
                              </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-4">
                              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base line-clamp-2 min-h-[2.5rem]">
                                {product.name}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* View More Button */}
                      <div className="mt-6 text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="group"
                          onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Request Catalogue for {category.name}
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="cta"
            size="lg"
            className="group"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Request Full Product Catalogue
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
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
                <div className="relative bg-gradient-to-br from-steel-light to-white rounded-xl p-6 flex items-center justify-center">
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
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
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
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
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
