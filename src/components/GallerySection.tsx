import { useState } from "react";
import heroThali from "@/assets/hero-thali.jpg";
import buffetSetup from "@/assets/buffet-setup.jpg";
import paneerCurry from "@/assets/paneer-curry.jpg";
import chaatCounter from "@/assets/chaat-counter.jpg";
import sweets from "@/assets/sweets.jpg";
import biryani from "@/assets/biryani.jpg";
import weddingService from "@/assets/wedding-service.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import streetFood from "@/assets/street-food-platter.jpg";
import weddingReception from "@/assets/wedding-reception.jpg";
import festiveSweets from "@/assets/festive-sweets.jpg";
import manchurian from "@/assets/manchurian.jpg";
import birthdayCatering from "@/assets/birthday-catering.jpg";

const images = [
  { src: heroThali, alt: "Traditional Indian Thali", category: "Thali" },
  { src: buffetSetup, alt: "Wedding Buffet Setup", category: "Events" },
  { src: paneerCurry, alt: "Paneer Butter Masala", category: "Main Course" },
  { src: dalMakhani, alt: "Dal Makhani with Naan", category: "Main Course" },
  { src: chaatCounter, alt: "Chaat Counter", category: "Starters" },
  { src: streetFood, alt: "Street Food Platter", category: "Starters" },
  { src: sweets, alt: "Indian Sweets Display", category: "Desserts" },
  { src: festiveSweets, alt: "Festive Sweet Platter", category: "Desserts" },
  { src: biryani, alt: "Vegetable Biryani", category: "Main Course" },
  { src: manchurian, alt: "Veg Manchurian with Rice", category: "Main Course" },
  { src: weddingService, alt: "Wedding Catering Service", category: "Events" },
  { src: weddingReception, alt: "Grand Wedding Reception", category: "Events" },
  { src: birthdayCatering, alt: "Birthday Party Setup", category: "Events" },
];

const categories = ["All", "Main Course", "Starters", "Desserts", "Events", "Thali"];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-wider mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            A Feast for
            <span className="text-saffron"> Your Eyes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a visual journey through our delectable creations and 
            beautifully organized events.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-cream-dark text-foreground hover:bg-saffron/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-soft hover:shadow-card transition-all"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-cream text-sm font-medium">{image.alt}</span>
                <span className="block text-gold text-xs">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-maroon-dark/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-gold text-maroon-dark rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
