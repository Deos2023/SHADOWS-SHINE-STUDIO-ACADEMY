import { useState } from "react";

// Import existing images
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

// Import WhatsApp images (reducing duplicates by selecting one of each numbered series)
import whatsappImage1 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.36.jpeg";
import whatsappImage2 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.38.jpeg";
import whatsappImage3 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.40.jpeg";
import whatsappImage4 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.45.jpeg";
import whatsappImage5 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.46.jpeg";
import whatsappImage6 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.48.jpeg";
import whatsappImage7 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.49.jpeg";
import whatsappImage8 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.51.jpeg";
import whatsappImage9 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.58.jpeg";
import whatsappImage10 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.50.59.jpeg";
import whatsappImage11 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.00.jpeg";
import whatsappImage12 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.01.jpeg";
import whatsappImage13 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.02.jpeg";
import whatsappImage14 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.04.jpeg";
import whatsappImage15 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.05.jpeg";
import whatsappImage16 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.06.jpeg";
import whatsappImage17 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.07.jpeg";
import whatsappImage18 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.08.jpeg";
import whatsappImage19 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.09.jpeg";
import whatsappImage20 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.10.jpeg";
import whatsappImage21 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.11.jpeg";
import whatsappImage22 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.12.jpeg";
import whatsappImage23 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.13.jpeg";
import whatsappImage24 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.14.jpeg";
import whatsappImage25 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.15.jpeg";
import whatsappImage26 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.16.jpeg";
import whatsappImage27 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.17.jpeg";
import whatsappImage28 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.18.jpeg";
import whatsappImage29 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.19.jpeg";
import whatsappImage30 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.20.jpeg";
import whatsappImage31 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.21.jpeg";
import whatsappImage32 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.22.jpeg";
import whatsappImage33 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.23.jpeg";
import whatsappImage34 from "@/assets/gallery/WhatsApp Image 2026-01-20 at 13.51.25.jpeg";

// Import videos
import whatsappVideo1 from "@/assets/gallery/WhatsApp Video 2026-01-20 at 13.51.06.mp4";
import whatsappVideo2 from "@/assets/gallery/WhatsApp Video 2026-01-20 at 13.51.21.mp4";

const galleryItems = [
  // Original curated items
  { src: lipBlush, category: "Lip Blush", title: "Before • After • Healed", type: "image" as const },
  { src: nanoBrows, category: "Brows", title: "Nano Brows Perfection", type: "image" as const },
  { src: bridal2, category: "Bridal", title: "Bengali Bridal Elegance", type: "image" as const },
  { src: lashLift, category: "Lashes", title: "Lash Lift & Extensions", type: "image" as const },
  { src: bridal3, category: "Bridal", title: "Traditional Beauty", type: "image" as const },
  { src: nails2, category: "Nail Art", title: "Mermaid Shell Design", type: "image" as const },
  { src: lashes, category: "Lashes", title: "Lash Extension Styles", type: "image" as const },
  { src: bridal1, category: "Bridal", title: "Evening Glam", type: "image" as const },
  { src: bridal4, category: "Bridal", title: "Radiant Bride", type: "image" as const },
  { src: bridal5, category: "Bridal", title: "Golden Hour Beauty", type: "image" as const },
  { src: nails1, category: "Nail Art", title: "Soft Pink Elegance", type: "image" as const },
  { src: makeupArt, category: "Creative", title: "Fantasy Makeup Art", type: "image" as const },
  
  // WhatsApp Images - categorized by content
  { src: whatsappImage1, category: "Bridal", title: "Traditional Henna Design", type: "image" as const },
  { src: whatsappImage2, category: "Bridal", title: "Gold & Maroon Ensemble", type: "image" as const },
  { src: whatsappImage3, category: "Makeup", title: "Professional Makeup Application", type: "image" as const },
  { src: whatsappImage4, category: "Bridal", title: "Jewelry & Accessories", type: "image" as const },
  { src: whatsappImage5, category: "Makeup", title: "Bridal Makeup Session", type: "image" as const },
  { src: whatsappImage6, category: "Bridal", title: "Complete Bridal Look", type: "image" as const },
  { src: whatsappImage7, category: "Makeup", title: "Detailed Eye Makeup", type: "image" as const },
  { src: whatsappImage8, category: "Bridal", title: "Traditional Bengali Bride", type: "image" as const },
  { src: whatsappImage9, category: "Nail Art", title: "Bridal Nail Design", type: "image" as const },
  { src: whatsappImage10, category: "Makeup", title: "Smokey Eye Creation", type: "image" as const },
  { src: whatsappImage11, category: "Bridal", title: "Red & Gold Theme", type: "image" as const },
  { src: whatsappImage12, category: "Makeup", title: "Foundation Application", type: "image" as const },
  { src: whatsappImage13, category: "Lashes", title: "Lash Extension Process", type: "image" as const },
  { src: whatsappImage14, category: "Brows", title: "Brow Shaping & Tinting", type: "image" as const },
  { src: whatsappImage15, category: "Makeup", title: "Contouring Technique", type: "image" as const },
  { src: whatsappImage16, category: "Bridal", title: "Traditional Jewelry Set", type: "image" as const },
  { src: whatsappImage17, category: "Makeup", title: "Blending Perfection", type: "image" as const },
  { src: whatsappImage18, category: "Bridal", title: "Full Bridal Transformation", type: "image" as const },
  { src: whatsappImage19, category: "Makeup", title: "Highlighting Process", type: "image" as const },
  { src: whatsappImage20, category: "Lashes", title: "Lash Lift Results", type: "image" as const },
  { src: whatsappImage21, category: "Bridal", title: "Classic Bengali Look", type: "image" as const },
  { src: whatsappImage22, category: "Makeup", title: "Professional Brushes", type: "image" as const },
  { src: whatsappImage23, category: "Brows", title: "Microblading Process", type: "image" as const },
  { src: whatsappImage24, category: "Bridal", title: "Royal Wedding Look", type: "image" as const },
  { src: whatsappImage25, category: "Makeup", title: "Setting Spray Application", type: "image" as const },
  { src: whatsappImage26, category: "Nail Art", title: "Intricate Nail Design", type: "image" as const },
  { src: whatsappImage27, category: "Bridal", title: "Traditional Red Attire", type: "image" as const },
  { src: whatsappImage28, category: "Makeup", title: "Eyeshadow Blending", type: "image" as const },
  { src: whatsappImage29, category: "Brows", title: "Brow Mapping Session", type: "image" as const },
  { src: whatsappImage30, category: "Bridal", title: "Golden Jewelry Display", type: "image" as const },
  { src: whatsappImage31, category: "Makeup", title: "Lipstick Application", type: "image" as const },
  { src: whatsappImage32, category: "Lashes", title: "Volume Lash Extensions", type: "image" as const },
  { src: whatsappImage33, category: "Bridal", title: "Final Bridal Touches", type: "image" as const },
  { src: whatsappImage34, category: "Makeup", title: "Studio Workstation", type: "image" as const },
  
  // Videos
  { src: whatsappVideo1, category: "Tutorial", title: "Makeup Technique Demo", type: "video" as const, poster: whatsappImage7 },
  { src: whatsappVideo2, category: "Tutorial", title: "Bridal Makeup Process", type: "video" as const, poster: whatsappImage3 },
];

const categories = ["All", "Bridal", "Lip Blush", "Brows", "Lashes", "Nail Art", "Creative", "Makeup", "Tutorial"];

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; type: 'image' | 'video' } | null>(null);

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
              onClick={() => setSelectedMedia({ src: item.src, type: item.type })}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    className="w-full h-full object-cover"
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gold text-xs uppercase tracking-wider">{item.category}</span>
                  {item.type === "video" && (
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Video</span>
                  )}
                </div>
                <h3 className="font-script text-xl text-primary-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox/Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-wine/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-full max-h-[90vh]">
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt="Gallery preview"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-scale-in"
              />
            ) : (
              <video
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl animate-scale-in"
                controls
                autoPlay
                src={selectedMedia.src}
              />
            )}
            <button 
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 transition-colors flex items-center justify-center"
              onClick={() => setSelectedMedia(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
