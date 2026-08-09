// import React, { useState, useEffect, useCallback } from "react";

// const featured = [
//   {
//     title: "Pashupatinath Temple",
//     image: "/images/pashupati.jpeg",
//     slug: "pashupatinath-temple",
//   },
//   {
//     title: "Phewa Lake, Pokhara",
//     image: "/images/img1.png",
//     slug: "phewa-lake-pokhara",
//   },
//   {
//     title: "Chitwan National Park",
//     image: "/images/chitwan.jpeg",
//     slug: "chitwan-national-park",
//   },
// ];

// const others = [
//   { name: "Everest Base Camp", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&auto=format&fit=crop&q=70", slug: "everest-base-camp" },
//   { name: "Boudhanath Stupa", image: "/images/img7.png", slug: "boudhanath-stupa" },
//   { name: "Lumbini", image: "/images/lumbini.jpeg", slug: "lumbini" },
//   { name: "Annapurna Circuit", image: "/images/annapurna.jpeg", slug: "annapurna-circuit" },
//   // { name: "Kathmandu Durbar Square", image: "/images/img6.jpeg", slug: "kathmandu-durbar-square" },
//   // { name: "Swayambhunath Stupa", image: "/images/img7.jpeg", slug: "swayambhunath-stupa" },
// ];

// /**
//  * Returns items per page matching Tailwind breakpoints:
//  * < 640px  → 1 item  (mobile)
//  * 640–1023px → 2 items (tablet / sm)
//  * ≥ 1024px → 4 items (desktop / lg)
//  */
// function getItemsPerPage() {
//   if (typeof window === "undefined") return 1; // SSR safe default
//   if (window.matchMedia("(min-width: 1024px)").matches) return 4;
//   if (window.matchMedia("(min-width: 640px)").matches) return 2;
//   return 1;
// }

// const PopularDestination = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

//   // Listen to exact Tailwind breakpoints via matchMedia
//   useEffect(() => {
//     const mqlSm = window.matchMedia("(min-width: 640px)");
//     const mqlLg = window.matchMedia("(min-width: 1024px)");

//     const handleChange = () => {
//       const newSize = getItemsPerPage();
//       setItemsPerPage((prev) => {
//         if (prev !== newSize) {
//           setCurrentPage(0);
//           return newSize;
//         }
//         return prev;
//       });
//     };

//     mqlSm.addEventListener("change", handleChange);
//     mqlLg.addEventListener("change", handleChange);
//     return () => {
//       mqlSm.removeEventListener("change", handleChange);
//       mqlLg.removeEventListener("change", handleChange);
//     };
//   }, []);

//   const totalPages = Math.ceil(others.length / itemsPerPage);

//   const handleNext = useCallback(() => {
//     setCurrentPage((prev) => (prev + 1) % totalPages);
//   }, [totalPages]);

//   const handlePrev = useCallback(() => {
//     setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
//   }, [totalPages]);

//   useEffect(() => {
//     if (!isAutoPlaying || totalPages <= 1) return;
//     const interval = setInterval(handleNext, 4000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, handleNext, totalPages]);

//   const startIndex = currentPage * itemsPerPage;
//   const visibleItems = others.slice(startIndex, startIndex + itemsPerPage);

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

//         {/* Featured Cards */}
//        {/* Featured Cards */}
// <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6">
//   {featured.map((dest) => (
//     <a
//       key={dest.slug}
//       href={`/popular-destinations#${dest.slug}`}
//       className="group relative rounded-md overflow-hidden block cursor-pointer"
//     >
//       <div className="w-full aspect-[4/3] overflow-hidden">
//         <img
//           src={dest.image.trim()}
//           alt={dest.title}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         />
//       </div>
//       <div className="absolute inset-[4px] border-2 border-white/80 rounded-2xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
//         <h3 className="text-xl sm:text-2xl font-semibold text-white">{dest.title}</h3>
//       </div>
//     </a>
//   ))}
// </div>

//         {/* Carousel Section */}
//         <div className="mt-12">
//           <div
//             className="relative rounded-xl overflow-hidden"
//             onMouseEnter={() => setIsAutoPlaying(false)}
//             onMouseLeave={() => setIsAutoPlaying(true)}
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[280px]">
//              {visibleItems.map((item) => (
//   <a
//     key={item.slug}
//     href={`/popular-destinations#${item.slug}`}
//     className="relative rounded-xl overflow-hidden aspect-[4/3] group block cursor-pointer"
//   >
//                   <img
//                     src={item.image.trim()}
//                     alt={item.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-[3px] border-2 border-white/70 rounded-xl pointer-events-none" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                   <p className="absolute bottom-3 left-4 text-white text-sm sm:text-base font-medium">
//                     {item.name}
//                   </p>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Dot Indicators */}
//           {totalPages > 1 && (
//             <div className="md:hidden block flex justify-center gap-2 mt-6">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentPage(index)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     currentPage === index
//                       ? "w-8 bg-[#007DCC]"
//                       : "w-2 bg-gray-300 hover:bg-gray-400"
//                   }`}
//                   aria-label={`Go to page ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularDestination;


import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featured = [
  {
    title: "Pashupatinath Temple",
    image: "/images/pashupati.jpeg",
    slug: "pashupatinath-temple",
  },
  {
    title: "Phewa Lake, Pokhara",
    image: "/images/img1.png",
    slug: "phewa-lake-pokhara",
  },
  {
    title: "Chitwan National Park",
    image: "/images/chitwan.jpeg",
    slug: "chitwan-national-park",
  },
];

const others = [
  { name: "Everest Base Camp", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&auto=format&fit=crop&q=70", slug: "everest-base-camp" },
  { name: "Boudhanath Stupa", image: "/images/img7.png", slug: "boudhanath-stupa" },
  { name: "Lumbini", image: "/images/lumbini.jpeg", slug: "lumbini" },
  { name: "Annapurna Circuit", image: "/images/annapurna.jpeg", slug: "annapurna-circuit" },
  // { name: "Kathmandu Durbar Square", image: "/images/img6.jpeg", slug: "kathmandu-durbar-square" },
  // { name: "Swayambhunath Stupa", image: "/images/img7.jpeg", slug: "swayambhunath-stupa" },
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
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const featuredRef = useRef(null);
  const carouselRef = useRef(null);
  const dotsRef = useRef(null);

  // ---- Scroll-in reveal (reverses on scroll up) ----
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(badgeRef.current, { opacity: 0, y: -14, scale: 0.9 });
      gsap.set(headingRef.current, { opacity: 0, y: 24 });
      gsap.set(subRef.current, { opacity: 0, y: 24 });
      gsap.set(featuredRef.current ? featuredRef.current.children : [], {
        opacity: 0,
        y: 30,
      });
      gsap.set(carouselRef.current, { opacity: 0, y: 30 });
      gsap.set(dotsRef.current, { opacity: 0, y: 10 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.to(badgeRef.current, { opacity: 1, y: 0, scale: 1 })
        .to(headingRef.current, { opacity: 1, y: 0 }, "-=0.45")
        .to(subRef.current, { opacity: 1, y: 0 }, "-=0.4")
        .to(
          featuredRef.current ? featuredRef.current.children : [],
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" },
          "-=0.3"
        )
        .to(carouselRef.current, { opacity: 1, y: 0 }, "-=0.35")
        .to(dotsRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (!isAutoPlaying || totalPages <= 1) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext, totalPages]);

  // ---- Carousel page-change animation (slides forward/back, i.e. "reverse") ----
  useLayoutEffect(() => {
    const grid = carouselRef.current?.querySelector("[data-carousel-grid]");
    if (!grid) return;

    const xOffset = direction === 1 ? 40 : -40;

    gsap.fromTo(
      grid,
      { opacity: 0, x: xOffset },
      { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" }
    );
  }, [currentPage, direction]);

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = others.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (index) => {
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white px-4 sm:px-10 lg:px-0 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <span
              ref={badgeRef}
              className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6"
            >
              Explore Nepal
            </span>
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl font-semibold text-gray-900 max-w-xl"
            >
              Popular Destinations
            </h2>
          </div>
          <p ref={subRef} className="text-gray-500 text-sm sm:text-base max-w-md">
            From sacred temples to towering peaks, Nepal offers some of the
            world's most breathtaking places to explore.
          </p>
        </div>

        {/* Featured Cards */}
        <div ref={featuredRef} className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((dest) => (
            <a
              key={dest.slug}
              href={`/popular-destinations#${dest.slug}`}
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
            ref={carouselRef}
            className="relative rounded-xl overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              data-carousel-grid
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[280px]"
            >
              {visibleItems.map((item) => (
                <a
                  key={item.slug}
                  href={`/popular-destinations#${item.slug}`}
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
            <div ref={dotsRef} className="md:hidden block flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
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