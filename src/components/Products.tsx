import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, Move, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

// Category-specific images
import freezerHingeAssembly from "@/assets/products/freezer-hinge-assembly.png";
import filterCapsImage from "@/assets/products/filter-caps.png";
import clinchingClipsImage from "@/assets/products/clinching-clips.png";
import casterWheel from "@/assets/products/caster-wheel.png";
import electricalBox from "@/assets/products/electrical-box.png";
import deepDrawnComponents from "@/assets/products/deep-drawn-components.png";
import copperShell from "@/assets/products/copper-shell.png";

// Press Components images (existing)
import mountingPlate from "@/assets/products/mounting-plate.png";
import basePlate from "@/assets/products/base-plate.png";
import threadedPlate from "@/assets/products/threaded-plate.png";
import gussetPlate from "@/assets/products/gusset-plate.png";
import lBracket from "@/assets/products/l-bracket.png";
import uBracket from "@/assets/products/u-bracket.png";
import zBracket from "@/assets/products/z-bracket.png";
import blackBracket from "@/assets/products/black-bracket.png";

// Freezer Parts images
import freezerMountingPlate1 from "@/assets/products/freezer-parts/mounting-plate-1.png";
import freezerBlackUBracket from "@/assets/products/freezer-parts/black-u-bracket.png";
import freezerZMountBracket from "@/assets/products/freezer-parts/z-mount-bracket.png";
import freezerGussetPlate1 from "@/assets/products/freezer-parts/gusset-plate-1.png";
import freezerSlottedHinge from "@/assets/products/freezer-parts/slotted-hinge-bracket.png";
import freezerGussetPlate2 from "@/assets/products/freezer-parts/gusset-plate-2.png";
import freezerCurvedLBracket from "@/assets/products/freezer-parts/curved-l-bracket.png";
import freezerMountingPlate2 from "@/assets/products/freezer-parts/mounting-plate-2.png";

// Category definitions with exact products per folder
const categories = [
  {
    id: 1,
    name: "Freezer Hinges",
    products: [
      { id: 1, name: "Freezer Hinge Assembly", image: freezerHingeAssembly },
    ],
  },
  {
    id: 2,
    name: "Press Components",
    products: [
      { id: 2, name: "Mounting Plate", image: mountingPlate },
      { id: 3, name: "Base Mounting Plate", image: basePlate },
      { id: 4, name: "Threaded Insert Plate", image: threadedPlate },
      { id: 5, name: "Gusset Plate", image: gussetPlate },
      { id: 6, name: "L-Bracket", image: lBracket },
      { id: 7, name: "U-Bracket", image: uBracket },
      { id: 8, name: "Z-Bracket", image: zBracket },
      { id: 9, name: "Box Bracket", image: blackBracket },
    ],
  },
  {
    id: 3,
    name: "Filter Caps",
    products: [
      { id: 10, name: "Brass Filter Cap", image: filterCapsImage },
    ],
  },
  {
    id: 4,
    name: "Deep Drawn Press Components",
    products: [
      { id: 11, name: "Stainless Steel Deep Drawn Components", image: deepDrawnComponents },
      { id: 12, name: "Copper Cylindrical Shell", image: copperShell },
    ],
  },
  {
    id: 5,
    name: "Clinching Clips",
    products: [
      { id: 13, name: "Clinching Strip", image: clinchingClipsImage },
    ],
  },
  {
    id: 6,
    name: "Caster Wheels",
    products: [
      { id: 14, name: "Caster", image: casterWheel },
    ],
  },
  {
    id: 7,
    name: "Sheet Metal Components",
    products: [
      { id: 15, name: "Powder-Coated Metal Electrical Box", image: electricalBox },
    ],
  },
  {
    id: 8,
    name: "Freezer Parts",
    products: [
      { id: 16, name: "Freezer Mounting Plate", image: freezerMountingPlate1 },
      { id: 17, name: "Freezer U-Bracket", image: freezerBlackUBracket },
      { id: 18, name: "Z-Mount Bracket", image: freezerZMountBracket },
      { id: 19, name: "Freezer Gusset Plate", image: freezerGussetPlate1 },
      { id: 20, name: "Slotted Hinge Bracket", image: freezerSlottedHinge },
      { id: 21, name: "Gusset Support Plate", image: freezerGussetPlate2 },
      { id: 22, name: "Curved L-Bracket", image: freezerCurvedLBracket },
      { id: 23, name: "Multi-Slot Mounting Plate", image: freezerMountingPlate2 },
    ],
  },
];

interface Product {
  id: number;
  name: string;
  image: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; startRotX: number; startRotY: number }>({
    startX: 0,
    startY: 0,
    startRotX: 0,
    startRotY: 0,
  });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  useEffect(() => {
    if (selectedProduct) {
      setRotation({ x: 0, y: 0 });
    }
  }, [selectedProduct]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    dragRef.current = {
      startX: clientX,
      startY: clientY,
      startRotX: rotation.x,
      startRotY: rotation.y,
    };
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const deltaX = clientX - dragRef.current.startX;
    const deltaY = clientY - dragRef.current.startY;
    
    setRotation({
      x: dragRef.current.startRotX + deltaY * 0.5,
      y: dragRef.current.startRotY + deltaX * 0.5,
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
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
            Explore our comprehensive range of industrial components. 
            Click any product to inspect it interactively.
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
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5"
                      >
                        {category.products.map((product) => (
                          <motion.div
                            key={product.id}
                            variants={itemVariants}
                            onClick={() => setSelectedProduct(product)}
                            className="group bg-background rounded-lg overflow-hidden border border-border hover:border-cta/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                          >
                            {/* Product Image */}
                            <div className="relative aspect-square bg-gradient-to-br from-steel-light to-white p-3 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <div className="flex items-center gap-2 text-white font-medium text-sm">
                                  <Move className="w-4 h-4" />
                                  View 360°
                                </div>
                              </div>
                            </div>

                            {/* Product Name */}
                            <div className="p-3 text-center">
                              <h4 className="font-heading font-semibold text-foreground text-xs md:text-sm line-clamp-2">
                                {product.name}
                              </h4>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
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

      {/* Product 360° Viewer Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden bg-background">
          {selectedProduct && (
            <div className="flex flex-col">
              {/* 360° Image Viewer */}
              <div
                ref={imageContainerRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                className="relative bg-gradient-to-br from-steel-light to-white cursor-grab active:cursor-grabbing select-none"
                style={{ touchAction: 'none' }}
              >
                <div className="aspect-square p-8 flex items-center justify-center">
                  <motion.img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-w-full max-h-full object-contain pointer-events-none"
                    style={{
                      transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    }}
                    animate={{
                      rotateX: rotation.x,
                      rotateY: rotation.y,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>

                {/* Drag Hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-primary/80 text-white text-sm px-4 py-2 rounded-full">
                  <Move className="w-4 h-4" />
                  Drag to rotate
                </div>
              </div>

              {/* Product Name & CTA */}
              <div className="p-6 text-center space-y-4">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                  {selectedProduct.name}
                </h3>

                <Button
                  variant="cta"
                  size="lg"
                  className="w-full max-w-sm mx-auto group"
                  onClick={() => {
                    setSelectedProduct(null);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Request a Quote
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
