import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone, Utensils, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroThali from "@/assets/hero-thali.jpg";
import buffetSetup from "@/assets/buffet-setup.jpg";

const slides = [
  {
    image: heroThali,
    title: "100% Pure Vegetarian",
    subtitle: "Authentic North Indian Cuisine",
  },
  {
    image: buffetSetup,
    title: "Grand Wedding Catering",
    subtitle: "Making Your Special Day Memorable",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/70 via-maroon/60 to-maroon-dark/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-forest rounded-full animate-pulse" />
            <span className="text-cream text-sm font-medium">Pure Veg Since 2010</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-cream mb-4 leading-tight">
            Shukla Catering
            <span className="block text-gold mt-2">&amp; Tiffin Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-cream/90 font-medium mb-2">
            {slides[currentSlide].subtitle}
          </p>

          {/* Tagline */}
          <p className="text-cream/80 text-sm md:text-base max-w-2xl mx-auto mb-8">
            शुद्ध शाकाहारी, उचित दाम, उत्तम भोजन – Pure Veg Catering in Entire Kanpur
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="btn-gold px-8 py-6 text-lg rounded-full"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button
              onClick={() => scrollToSection("#menu")}
              className="bg-cream/20 backdrop-blur-sm border-2 border-gold text-gold hover:bg-gold hover:text-maroon-dark px-8 py-6 text-lg rounded-full font-semibold"
            >
              <Utensils className="w-5 h-5 mr-2" />
              View Menu
            </Button>
            <a href="tel:+919214381274">
              <Button
                className="bg-cream/20 backdrop-blur-sm border-2 border-gold text-gold hover:bg-gold hover:text-maroon-dark px-8 py-6 text-lg rounded-full font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </a>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-cream/20 hover:bg-cream/40 text-cream transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-gold w-8"
                    : "bg-cream/40 hover:bg-cream/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-cream/20 hover:bg-cream/40 text-cream transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse-slow hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold/20 rounded-full animate-pulse-slow hidden lg:block" />
    </section>
  );
};

export default HeroSection;
