import { Leaf, Award, Heart, Sparkles } from "lucide-react";
import paneerCurry from "@/assets/paneer-curry.jpg";

const features = [
  {
    icon: Leaf,
    title: "100% Pure Veg",
    description: "Strictly vegetarian kitchen with no compromise on purity",
  },
  {
    icon: Award,
    title: "Best Quality",
    description: "Premium ingredients and authentic recipes",
  },
  {
    icon: Heart,
    title: "Hygienic Prep",
    description: "Prepared in clean, sanitized kitchens",
  },
  {
    icon: Sparkles,
    title: "Fresh Daily",
    description: "Made fresh for every event and tiffin",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={paneerCurry}
                alt="Delicious Paneer Curry"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-card p-6 hidden md:block">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-primary">15+</span>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
            {/* Decorative Border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Authentic North Indian
              <span className="text-saffron"> Vegetarian</span> Cuisine
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Welcome to <strong className="text-primary">Shukla Catering & Tiffin Services</strong> – 
              your trusted partner for pure vegetarian catering in Kanpur. With over 15 years of 
              experience, we bring the authentic flavors of North India to your special occasions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From grand weddings to intimate family gatherings, from corporate events to daily 
              tiffin services – we cater to all your needs with love, care, and the finest 
              ingredients. Our motto: <span className="text-primary font-medium italic">"Waah Bhai Waah"</span> – 
              food that makes you say wow!
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50 hover:shadow-soft transition-shadow"
                >
                  <div className="p-2 bg-saffron/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
