import React, { useState } from "react";
import { X } from "lucide-react";
import GalleryBanner from "@/MainComponent/GalleryBanner";

const categories = ["All", "Sales Meet", "CSR", "Training", "Networking"];

const images = [
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&auto=format&fit=crop&q=70", category: "Sales Meet", title: "HSMAN Annual Sales Meet" },
  { src: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=700&auto=format&fit=crop&q=70", category: "CSR", title: "Blood Donation Program" },
  { src: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=700&auto=format&fit=crop&q=70", category: "Training", title: "Digital Marketing Workshop" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&auto=format&fit=crop&q=70", category: "Networking", title: "Meet & Greet Pokhara" },
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&auto=format&fit=crop&q=70", category: "Networking", title: "Networking Breakfast" },
  { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=70", category: "Sales Meet", title: "Tourism Promotion Panel" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=70", category: "CSR", title: "Community Outreach" },
  { src: "https://images.unsplash.com/photo-1560523159-4a9692d222f8?w=700&auto=format&fit=crop&q=70", category: "Training", title: "Customer Service Masterclass" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
<>

<GalleryBanner/>

<div className="w-full font-sans bg-white">
      {/* Header */}
      <section className="px-4 sm:px-10 lg:px-16 pt-32 sm:pt-40 pb-12 sm:pb-16 text-center">
        <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
          Gallery
        </span>
        <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 max-w-2xl mx-auto leading-tight">
          Moments from the HSMAN Community
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-xl mx-auto">
          A look back at our sales meets, trainings, and community
          initiatives across Nepal.
        </p>
      </section>

      {/* Filter tabs */}
      <section className="px-4 sm:px-10 lg:px-16 mb-10 sm:mb-14">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#007DCC] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Image grid */}
      <section className="px-4 sm:px-10 lg:px-16 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxImage(img)}
              className="group relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#007DCC]/0 group-hover:bg-[#007DCC]/40 transition-colors duration-300 flex items-end p-3">
                <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-white text-center mt-4 text-sm sm:text-base">
              {lightboxImage.title}
            </p>
          </div>
        </div>
      )}
    </div>

</>

    
  );
}