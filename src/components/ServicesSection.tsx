import { Heart, Users, Cake, Briefcase, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import buffetSetup from "@/assets/buffet-setup.jpg";
import sweets from "@/assets/sweets.jpg";
import chaatCounter from "@/assets/chaat-counter.jpg";
import biryani from "@/assets/biryani.jpg";
import heroThali from "@/assets/hero-thali.jpg";

const services = [
  {
    icon: Heart,
    title: "शादी (Weddings)",
    titleEn: "Wedding Catering",
    description: "Grand wedding feasts with elaborate menus, live counters, and traditional setups that make your big day unforgettable.",
    image: buffetSetup,
  },
  {
    icon: Users,
    title: "पारिवारिक कार्यक्रम",
    titleEn: "Family Functions",
    description: "From mundan to engagement, grih pravesh to anniversaries – we handle all family celebrations with care.",
    image: sweets,
  },
  {
    icon: Cake,
    title: "जन्मदिन (Birthday)",
    titleEn: "Birthday Events",
    description: "Make birthdays special with customized menus, theme-based setups, and delicious food everyone will love.",
    image: chaatCounter,
  },
  {
    icon: Briefcase,
    title: "कार्यालय कार्यक्रम",
    titleEn: "Office Events",
    description: "Professional catering for corporate meetings, office parties, and business events with punctual service.",
    image: biryani,
  },
  {
    icon: Truck,
    title: "Daily Tiffin",
    titleEn: "Tiffin Services",
    description: "Fresh, homestyle vegetarian meals delivered to your doorstep daily. Perfect for working professionals and students.",
    image: heroThali,
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Catering for Every
            <span className="text-saffron"> Occasion</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From intimate gatherings to grand celebrations, we bring the same passion, 
            quality, and taste to every event we cater.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-elevated overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent" />
                <div className="absolute bottom-4 left-4 p-3 bg-gold rounded-full">
                  <service.icon className="w-6 h-6 text-maroon-dark" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-1">
                  {service.title}
                </h3>
                <p className="text-saffron text-sm font-medium mb-3">{service.titleEn}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
