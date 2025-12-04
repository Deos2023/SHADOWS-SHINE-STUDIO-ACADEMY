import { useState } from "react";
import bridal1 from "@/assets/gallery/bridal-1.jpeg";
import bridal2 from "@/assets/gallery/bridal-2.png";
import bridal3 from "@/assets/gallery/bridal-3.png";
import bridal4 from "@/assets/gallery/bridal-4.png";
import bridal5 from "@/assets/gallery/bridal-5.jpeg";
import nails1 from "@/assets/gallery/nails-1.jpeg";
import nails2 from "@/assets/gallery/nails-2.jpeg";
import lashes from "@/assets/gallery/lashes.jpeg";
import lashLift from "@/assets/gallery/lash-lift.jpg";
import makeupArt from "@/assets/gallery/makeup-art.jpeg";
import lipBlush from "@/assets/gallery/lip-blush.jpg";
import nanoBrows from "@/assets/gallery/nano-brows.jpg";

const galleryItems = [
  { src: lipBlush, category: "Lip Blush", title: "Before • After • Healed" },
  { src: nanoBrows, category: "Brows", title: "Nano Brows Perfection" },
  { src: bridal2, category: "Bridal", title: "Bengali Bridal Elegance" },
  { src: lashLift, category: "Lashes", title: "Lash Lift & Extensions" },
  { src: bridal3, category: "Bridal", title: "Traditional Beauty" },
  { src: nails2, category: "Nail Art", title: "Mermaid Shell Design" },
  { src: lashes, category: "Lashes", title: "Lash Extension Styles" },
  { src: bridal1, category: "Bridal", title: "Evening Glam" },
  { src: bridal4, category: "Bridal", title: "Radiant Bride" },
  { src: bridal5, category: "Bridal", title: "Golden Hour Beauty" },
  { src: nails1, category: "Nail Art", title: "Soft Pink Elegance" },
  { src: makeupArt, category: "Creative", title: "Fantasy Makeup Art" },
];

const categories = ["All", "Bridal", "Lip Blush", "Brows", "Lashes", "Nail Art", "Creative"];

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-card text-sm font-medium text-foreground/80 mb-4">
            Our Portfolio
          </span>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
            Gallery of Beauty
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Witness the transformations and artistry that define our work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-royal text-primary-foreground shadow-lg"
                  : "bg-card hover:bg-card/80 text-foreground/70 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-gold text-xs uppercase tracking-wider">{item.category}</span>
                <h3 className="font-script text-2xl text-primary-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-wine/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-scale-in"
          />
          <button 
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 transition-colors flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};
