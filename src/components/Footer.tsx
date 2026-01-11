import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

const products = [
  "Press Components",
  "Deep Drawn Parts",
  "Sheet Metal Components",
  "Custom Brackets",
  "Mounting Plates",
  "Industrial Tools",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="CS Industries Logo" className="h-12 w-auto brightness-0 invert" />
              <div>
                <span className="font-heading font-bold text-lg">CS Industries</span>
                <p className="text-xs text-primary-foreground/70">Precision Press Components</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Your trusted manufacturing partner since 2002. Delivering precision-engineered 
              industrial components with quality and reliability.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-cta/20 text-cta rounded-full text-xs font-medium">
                MSME Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-cta transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-primary-foreground/70 text-sm">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+919876543210"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-cta transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@csindustries.com"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-cta transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>info@csindustries.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    Industrial Area, Phase 2<br />
                    Hyderabad, India - 500001
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 CS Industries. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>GSTIN: 36XXXXX1234X1XX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
