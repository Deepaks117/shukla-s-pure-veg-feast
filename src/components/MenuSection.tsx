import { Check, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const menuPackages = [
  {
    name: "Basic Menu",
    price: "₹150",
    unit: "per plate",
    minOrder: "Minimum 50 plates",
    tier: 1,
    popular: false,
    items: [
      "Paneer (Any One)",
      "Mix Veg",
      "Rice",
      "Gulab Jamun",
      "Kachori (4 pcs)",
      "Salad",
    ],
  },
  {
    name: "Standard Menu",
    price: "₹200",
    unit: "per plate",
    minOrder: "Minimum 50 plates",
    tier: 2,
    popular: false,
    items: [
      "Paneer (Any One)",
      "Mix Veg",
      "Chole / Dal / Kofta Curry",
      "Rice",
      "Raita",
      "Gulab Jamun",
      "Kachori",
      "Papad",
      "Salad",
    ],
  },
  {
    name: "Classic Menu",
    price: "₹300",
    unit: "per plate",
    minOrder: "Minimum 50 plates",
    tier: 3,
    popular: false,
    items: [
      "Paneer (Any One)",
      "Mix Veg",
      "Chole / Malai Kofta",
      "Dal Fry / Dal Makhani",
      "Rice",
      "Raita",
      "Gulab Jamun",
      "Kachori (2 Types)",
      "Papad",
      "Salad",
      "Chowmein",
      "French Fries",
    ],
  },
  {
    name: "Regular Menu",
    price: "₹400",
    unit: "per plate",
    minOrder: "Minimum 50 plates",
    tier: 4,
    popular: true,
    items: [
      "Paneer (Any One)",
      "Mix Veg",
      "Chole / Malai Kofta",
      "Dal Fry / Dal Makhani",
      "Rice",
      "Veg Biryani",
      "Dahi Bada",
      "Gulab Jamun",
      "Kachori (2 Types)",
      "Roti (All Types)",
      "Papad",
      "Salad",
      "Chowmein",
      "French Fries",
      "Manchurian",
      "Fried Rice",
      "Cutlets",
    ],
  },
  {
    name: "Premium Menu",
    price: "₹650",
    unit: "per plate",
    minOrder: "Minimum 50 plates",
    tier: 5,
    popular: false,
    premium: true,
    items: [
      "Paneer (2 Types)",
      "Mix Veg",
      "Chole / Malai Kofta",
      "Dal Fry / Dal Makhani",
      "Rice (2 Types)",
      "Dahi Bada",
      "Gulab Jamun",
      "Halwa",
      "Kachori (2 Types)",
      "Roti (All Types)",
      "Papad",
      "Salad",
      "Chinese Platter",
      "Dosa Counter",
      "Pav Bhaji Counter",
      "Live Chaat Counter",
    ],
  },
];

const MenuSection = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="menu" className="section-padding bg-gradient-warm">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-wider mb-4">
            Our Menu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Choose Your Perfect
            <span className="text-saffron"> Package</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From budget-friendly to premium feasts — we have a package for every occasion.
            All packages require a minimum of 50 plates.
          </p>
        </div>

        {/* Price Tier Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuPackages.map((pkg) => (
            <button
              key={pkg.tier}
              onClick={() => setSelectedTier(selectedTier === pkg.tier ? null : pkg.tier)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedTier === pkg.tier
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : pkg.popular
                  ? "bg-gold text-maroon-dark hover:bg-gold/90"
                  : pkg.premium
                  ? "bg-gradient-gold text-maroon-dark hover:shadow-lg"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {pkg.price}
              {pkg.popular && <Star className="w-3 h-3 inline ml-1" />}
              {pkg.premium && <Sparkles className="w-3 h-3 inline ml-1" />}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {menuPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl overflow-hidden transition-all duration-500 flex flex-col ${
                selectedTier === pkg.tier
                  ? "ring-2 ring-primary shadow-2xl scale-105 z-10"
                  : selectedTier !== null
                  ? "opacity-60 scale-95"
                  : ""
              } ${
                pkg.premium
                  ? "border-2 border-gold shadow-gold"
                  : pkg.popular
                  ? "border-2 border-saffron shadow-lg"
                  : "border border-border shadow-card hover:shadow-xl"
              }`}
            >
              {/* Popular/Premium Badge */}
              {pkg.popular && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-saffron text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  <Star className="w-3 h-3" />
                  Popular
                </div>
              )}
              {pkg.premium && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-gradient-gold text-maroon-dark text-xs font-bold px-2 py-1 rounded-full z-10">
                  <Sparkles className="w-3 h-3" />
                  Premium
                </div>
              )}

              {/* Header */}
              <div
                className={`p-5 ${
                  pkg.premium
                    ? "bg-gradient-to-br from-primary to-maroon-dark"
                    : pkg.popular
                    ? "bg-primary"
                    : "bg-cream-dark"
                }`}
              >
                <p
                  className={`text-xs font-medium mb-1 ${
                    pkg.premium || pkg.popular ? "text-gold" : "text-saffron"
                  }`}
                >
                  {pkg.items.length} Items
                </p>
                <h3
                  className={`text-lg font-heading font-bold mb-2 ${
                    pkg.premium || pkg.popular ? "text-cream" : "text-primary"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl font-bold ${
                      pkg.premium ? "text-gold" : pkg.popular ? "text-gold" : "text-saffron"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ${
                      pkg.premium || pkg.popular ? "text-cream/70" : "text-muted-foreground"
                    }`}
                  >
                    /{pkg.unit}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="p-5 flex-1 flex flex-col">
                <ul className="space-y-2 flex-1">
                  {pkg.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div
                        className={`p-0.5 rounded-full mt-1 ${
                          pkg.premium
                            ? "bg-gold/20"
                            : pkg.popular
                            ? "bg-saffron/20"
                            : "bg-forest/10"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            pkg.premium
                              ? "text-gold"
                              : pkg.popular
                              ? "text-saffron"
                              : "text-forest"
                          }`}
                        />
                      </div>
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full mt-5 py-5 text-sm ${
                    pkg.premium
                      ? "btn-gold"
                      : pkg.popular
                      ? "bg-saffron text-white hover:bg-saffron/90"
                      : "bg-primary text-primary-foreground hover:bg-maroon-dark"
                  }`}
                >
                  Book This Package
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-10 max-w-2xl mx-auto">
          * Prices may vary based on guest count, venue location, and special customizations.
          Contact us for a personalized quote tailored to your event.
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
