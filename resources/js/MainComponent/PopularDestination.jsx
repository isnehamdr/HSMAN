// import React, { useState, useEffect } from "react";
// import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// const featured = [
//   {
//     title: "Pashupatinath Temple",
//     image:
//       "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&auto=format&fit=crop&q=70",
//     slug: "pashupatinath-temple",
//   },
//   {
//     title: "Phewa Lake, Pokhara",
//     image:
//       "/images/img1.jpeg    ",
//     slug: "phewa-lake-pokhara",
//   },
//   {
//     title: "Chitwan National Park",
//     image:
//       "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=600&auto=format&fit=crop&q=70",
//     slug: "chitwan-national-park",
//   },
// ];

// const others = [
//   {
//     name: "Everest Base Camp",
//     image:
//       "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&auto=format&fit=crop&q=70",
//     slug: "everest-base-camp",
//   },
//   {
//     name: "Boudhanath Stupa",
//     image:
//       "/images/img7.jpeg",
//     slug: "boudhanath-stupa",
//   },
//   {
//     name: "Lumbini",
//     image:
//       "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&auto=format&fit=crop&q=70",
//     slug: "lumbini",
//   },
//   {
//     name: "Annapurna Circuit",
//     image:
//       "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=70",
//     slug: "annapurna-circuit",
//   },
//   {
//     name: "Kathmandu Durbar Square",
//     image:
//       "/images/img6.jpeg",
//     slug: "kathmandu-durbar-square",
//   },
//   {
//     name: "Swayambhunath Stupa",
//     image:
//       "/images/img7.jpeg",
//     slug: "swayambhunath-stupa",
//   },
// ];

// const PopularDestination = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const itemsToShow = 4; // Number of items visible at once

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const maxIndex = Math.max(0, others.length - itemsToShow);
//         return prevIndex >= maxIndex ? 0 : prevIndex + 1;
//       });
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, [isAutoPlaying]);

//   // Pause autoplay on hover
//   const handleMouseEnter = () => setIsAutoPlaying(false);
//   const handleMouseLeave = () => setIsAutoPlaying(true);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => {
//       const maxIndex = Math.max(0, others.length - itemsToShow);
//       return prevIndex === 0 ? maxIndex : prevIndex - 1;
//     });
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => {
//       const maxIndex = Math.max(0, others.length - itemsToShow);
//       return prevIndex >= maxIndex ? 0 : prevIndex + 1;
//     });
//   };

//   const visibleItems = others.slice(currentIndex, currentIndex + itemsToShow);

//   return (
//     <section className="w-full bg-white px-4 sm:px-10 lg:px-0 py-16 sm:py-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
//           <div>
//             <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
//               Explore Nepal
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 max-w-xl">
//               Popular Destinations
//             </h2>
//           </div>
//           <p className="text-gray-500 text-sm sm:text-base max-w-md">
//             From sacred temples to towering peaks, Nepal offers some of the
//             world's most breathtaking places to explore.
//           </p>
//         </div>

//         {/* Featured destination cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {featured.map((dest) => (
//             <a
//               key={dest.title}
//               href="/popular-destinations"
//               className="group relative rounded-md overflow-hidden block cursor-pointer"
//             >
//               <div className="w-full aspect-[4/3] overflow-hidden">
//                 <img
//                   src={dest.image}
//                   alt={dest.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               {/* White border overlay */}
//               <div className="absolute inset-[4px] border-2 border-white/80 rounded-2xl pointer-events-none" />
//               {/* Location indicator */}
//               {/* <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                 <MapPin size={14} className="text-white" />
//                 <span className="text-xs text-white font-semibold uppercase tracking-wide">
//                   Nepal
//                 </span>
//               </div> */}
//               {/* Title overlay */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
//                 <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                   {dest.title}
//                 </h3>
//               </div>
//             </a>
//           ))}
//         </div>
//  </div>
//         {/* Others - Auto Carousel */}
//         <div className="mt-8">
//           <div className="flex justify-between items-center mb-4">
//             {/* <h3 className="text-xl font-semibold text-gray-800">More to Explore</h3> */}
//             {/* <div className="flex gap-2">
//               <button
//                 onClick={handlePrev}
//                 className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300"
//                 aria-label="Previous"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300"
//                 aria-label="Next"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div> */}
//           </div>

//           <div
//             className="relative rounded-xl overflow-hidden"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500 ease-in-out "
//             >
//               {visibleItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href="/popular-destinations"
//                   className="relative rounded-xl overflow-hidden aspect-[4/3] group block cursor-pointer"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {/* White border overlay */}
//                   <div className="absolute inset-[3px] border-2 border-white/70 rounded-xl pointer-events-none" />
//                   {/* Gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                   {/* Title */}
//                   <p className="absolute bottom-3 left-4 text-white text-sm sm:text-base font-medium">
//                     {item.name}
//                   </p>
//                 </a>
//               ))}
//             </div>

//             {/* Dot indicators */}
//             {/* <div className="flex justify-center gap-2 mt-4">
//               {Array.from({ length: Math.ceil(others.length / itemsToShow) }).map(
//                 (_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index * itemsToShow)}
//                     className={`h-2 rounded-full transition-all duration-300 ${
//                       Math.floor(currentIndex / itemsToShow) === index
//                         ? "w-8 bg-[#007DCC]"
//                         : "w-2 bg-gray-300 hover:bg-gray-400"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 )
//               )}
//             </div> */}
//           </div>
//         </div>

//         {/* CTA */}
//         {/* <div className="flex justify-center mt-10 sm:mt-12">
//           <a
//             href="/popular-destinations"
//             className="inline-flex items-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] transition-colors text-white font-semibold px-7 py-3 rounded-full text-sm sm:text-base"
//           >
//             View All Destinations
//             <ArrowRight size={16} />
//           </a>
//         </div> */}
     
//     </section>
//   );
// };

// export default PopularDestination;

import React, { useState, useEffect, useCallback } from "react";

const featured = [
  {
    title: "Pashupatinath Temple",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&auto=format&fit=crop&q=70",
    slug: "pashupatinath-temple",
  },
  {
    title: "Phewa Lake, Pokhara",
    image: "/images/img1.jpeg",
    slug: "phewa-lake-pokhara",
  },
  {
    title: "Chitwan National Park",
    image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=600&auto=format&fit=crop&q=70",
    slug: "chitwan-national-park",
  },
];

const others = [
  { name: "Everest Base Camp", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&auto=format&fit=crop&q=70", slug: "everest-base-camp" },
  { name: "Boudhanath Stupa", image: "/images/img7.jpeg", slug: "boudhanath-stupa" },
  { name: "Lumbini", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&auto=format&fit=crop&q=70", slug: "lumbini" },
  { name: "Annapurna Circuit", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=70", slug: "annapurna-circuit" },
  { name: "Kathmandu Durbar Square", image: "/images/img6.jpeg", slug: "kathmandu-durbar-square" },
  { name: "Swayambhunath Stupa", image: "/images/img7.jpeg", slug: "swayambhunath-stupa" },
];

/**
 * Returns items per page matching Tailwind breakpoints:
 * < 640px  → 1 item  (mobile)
 * 640–1023px → 2 items (tablet / sm)
 * ≥ 1024px → 4 items (desktop / lg)
 */
function getItemsPerPage() {
  if (typeof window === "undefined") return 1; // SSR safe default
  if (window.matchMedia("(min-width: 1024px)").matches) return 4;
  if (window.matchMedia("(min-width: 640px)").matches) return 2;
  return 1;
}

const PopularDestination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  // Listen to exact Tailwind breakpoints via matchMedia
  useEffect(() => {
    const mqlSm = window.matchMedia("(min-width: 640px)");
    const mqlLg = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      const newSize = getItemsPerPage();
      setItemsPerPage((prev) => {
        if (prev !== newSize) {
          setCurrentPage(0);
          return newSize;
        }
        return prev;
      });
    };

    mqlSm.addEventListener("change", handleChange);
    mqlLg.addEventListener("change", handleChange);
    return () => {
      mqlSm.removeEventListener("change", handleChange);
      mqlLg.removeEventListener("change", handleChange);
    };
  }, []);

  const totalPages = Math.ceil(others.length / itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (!isAutoPlaying || totalPages <= 1) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext, totalPages]);

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = others.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="w-full bg-white px-4 sm:px-10 lg:px-0 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
              Explore Nepal
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 max-w-xl">
              Popular Destinations
            </h2>
          </div>
          <p className="text-gray-500 text-sm sm:text-base max-w-md">
            From sacred temples to towering peaks, Nepal offers some of the
            world's most breathtaking places to explore.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="sm:flex hidden grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((dest) => (
            <a
              key={dest.slug}
              href="/popular-destinations"
              className="group relative rounded-md overflow-hidden block cursor-pointer"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image.trim()}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-[4px] border-2 border-white/80 rounded-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{dest.title}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="mt-12">
          <div
            className="relative rounded-xl overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[280px]">
              {visibleItems.map((item) => (
                <a
                  
                  href="/popular-destinations"
                  className="relative rounded-xl overflow-hidden aspect-[4/3] group block cursor-pointer"
                >
                  <img
                    src={item.image.trim()}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-[3px] border-2 border-white/70 rounded-xl pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-white text-sm sm:text-base font-medium">
                    {item.name}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? "w-8 bg-[#007DCC]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;