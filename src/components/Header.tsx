import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-cta transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@company.com" className="flex items-center gap-2 hover:text-cta transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@company.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
            <span>MSME Certified</span>
            <span className="w-1 h-1 rounded-full bg-cta" />
            <span>Since 2002</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="Company Logo" className="h-14 w-auto" />
              <div className="hidden sm:block">
                <span className="font-heading font-bold text-xl text-primary">
                  CS Industries
                </span>
                <p className="text-xs text-muted-foreground">Precision Press Components</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-cta transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cta after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="hero" size="lg">
                Request a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-cta transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-border px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-cta transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2 w-full">
                Request a Quote
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
