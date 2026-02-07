import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Cakes", href: "#cakes" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Wedding Catering",
    "Family Functions",
    "Birthday Events",
    "Corporate Catering",
    "Daily Tiffin Service",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo size="md" showTagline variant="light" />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              शुद्ध शाकाहारी, उचित दाम, उत्तम भोजन
              <br />
              <span className="text-gold italic">"Waah Bhai Waah"</span> – 
              Food that makes you say wow!
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-saffron flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-saffron flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-saffron flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-saffron transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-gold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-gold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-saffron mt-0.5" />
                <a
                  href="tel:+919214381274"
                  className="text-primary-foreground/80 hover:text-saffron transition-colors text-sm"
                >
                  +91 92143 81274
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-saffron mt-0.5" />
                <a
                  href="mailto:shuklacatering@gmail.com"
                  className="text-primary-foreground/80 hover:text-saffron transition-colors text-sm"
                >
                  shuklacatering@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  3D/243, Aawas Vikas Hanshpuram,<br />
                  Naubasta, Kanpur – 208021, UP
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Shukla Catering & Tiffin Services. All rights reserved.
            </p>
            <p className="text-gold text-sm font-medium italic">
              "वाह भाई वाह – Waah Bhai Waah"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
