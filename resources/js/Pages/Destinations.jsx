import React from "react";
import { MapPin } from "lucide-react";
import GalleryBanner from "@/MainComponent/GalleryBanner";

const destinations = [
  {
    name: "Pashupatinath Temple",
    location: "Kathmandu",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=700&auto=format&fit=crop&q=70",
    description:
      "One of the holiest Hindu temples in the world, Pashupatinath sits on the banks of the sacred Bagmati River in Kathmandu. A UNESCO World Heritage Site, it draws pilgrims, sadhus, and visitors year-round, especially during Maha Shivaratri.",
  },
  {
    name: "Boudhanath Stupa",
    location: "Kathmandu",
    image:
      "/images/img7.jpeg",
    description:
      "One of the largest spherical stupas in the world, Boudhanath is a major center of Tibetan Buddhism. Its watchful eyes and colorful prayer flags make it one of Kathmandu's most photographed landmarks.",
  },
  {
    name: "Phewa Lake, Pokhara",
    location: "Pokhara",
    image:
      "/images/img1.jpeg",
    description:
      "Nepal's second largest lake, framed by the snow-capped Annapurna range, Phewa Lake is the heart of Pokhara. Rent a boat, visit Tal Barahi Temple on the island, or simply relax at a lakeside cafe.",
  },
  {
    name: "Annapurna Circuit",
    location: "Annapurna Region",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&auto=format&fit=crop&q=70",
    description:
      "One of the world's classic trekking routes, the Annapurna Circuit winds through terraced farmland, rhododendron forests, and high mountain passes, offering some of the most varied scenery in the Himalayas.",
  },
  {
    name: "Everest Base Camp",
    location: "Solukhumbu",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=70",
    description:
      "The ultimate trekking bucket-list destination, the trail to Everest Base Camp passes through Sherpa villages, ancient monasteries, and dramatic Himalayan landscapes en route to the foot of the world's highest peak.",
  },
  {
    name: "Chitwan National Park",
    location: "Chitwan",
    image:
      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=700&auto=format&fit=crop&q=70",
    description:
      "A UNESCO World Heritage jungle in the Terai lowlands, home to one-horned rhinos, Bengal tigers, and rich biodiversity. Explore by jeep safari, canoe ride, or guided jungle walk.",
  },
  {
    name: "Lumbini",
    location: "Rupandehi",
    image:
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=700&auto=format&fit=crop&q=70",
    description:
      "The birthplace of Lord Buddha and a UNESCO World Heritage Site, Lumbini is a place of pilgrimage and quiet reflection, with monasteries built by Buddhist communities from around the world.",
  },
  {
    name: "Bhaktapur Durbar Square",
    location: "Bhaktapur",
    image:
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700&auto=format&fit=crop&q=70",
    description:
      "A beautifully preserved medieval city famed for its intricate wood and stone carvings, pottery squares, and royal palace complex — one of the best-preserved examples of Newari architecture in Nepal.",
  },
];

export default function Destinations() {
  return (
    <>
    <GalleryBanner/>
    <div className="w-full font-sans bg-white">
      {/* Header */}
      <section className="px-4 sm:px-10 lg:px-0 pt-32 sm:pt-40 pb-12 sm:pb-16 text-center">
        <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
          Explore Nepal
        </span>
        <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 max-w-2xl mx-auto leading-tight">
          Popular Destinations
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-xl mx-auto">
          From sacred temples and ancient stupas to the world's highest
          peaks, here's a closer look at the places that make Nepal
          unforgettable.
        </p>
      </section>

      {/* Destinations list - alternating layout */}
      <section className="px-4 sm:px-10 lg:px-0 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 sm:gap-8 lg:gap-12 items-center  transition-shadow`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col">
                <span className="flex items-center gap-1.5 text-xl text-[#007DCC] font-semibold uppercase tracking-wide mb-2">
                  <MapPin size={13} />
                  {dest.location}
                </span>
                <h3 className="text-xl sm:text-5xl font-semibold text-gray-900 mb-3 leading-snug">
                  {dest.name}
                </h3>
                <p className="text-sm sm:text-lg text-gray-500 leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-10 lg:px-16 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto bg-[#007DCC] rounded-2xl px-6 sm:px-12 py-10 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Plan your journey through Nepal
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-1">
              Connect with HSMAN members for travel planning and hospitality
              support.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 transition-colors text-[#007DCC] font-semibold px-6 py-3 rounded-full text-sm sm:text-base whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
    </>
  );
}