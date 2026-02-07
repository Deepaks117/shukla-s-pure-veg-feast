import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Cakes", href: "#cakes" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft border-b border-gold/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Logo size="sm" showTagline variant="dark" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-saffron hover:after:w-full after:transition-all"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919214381274" className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+91 92143 81274</span>
              </Button>
            </a>
            <a
              href="https://wa.me/919214381274?text=Hello%2C%20I%20am%20interested%20in%20your%20catering%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-forest hover:bg-forest-light text-cream" size="sm">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden xl:inline ml-1">WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-gold/20 animate-fade-in">
          <nav className="container-custom py-4 px-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left py-3 px-4 text-foreground hover:bg-cream-dark rounded-lg transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <a href="tel:+919214381274">
                <Button variant="outline" className="w-full border-primary/20">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +91 92143 81274
                </Button>
              </a>
              <a
                href="https://wa.me/919214381274?text=Hello%2C%20I%20am%20interested%20in%20your%20catering%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-forest hover:bg-forest-light text-cream">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
