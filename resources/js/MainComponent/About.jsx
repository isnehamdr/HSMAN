// export default function About() {
//   return (
//     <section className="w-full  px-4 sm:px-10 lg:px-0 py-16 sm:py-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Top row: badge + heading */}
//         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//           <div className="flex items-center sm:items-start">
//             <span className="inline-flex items-center gap-2 border border-gray-200 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit">
//               Get to Know Us
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 className="w-4 h-4"
//               >
//                 <circle cx="12" cy="12" r="3" />
//                 <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
//               </svg>
//             </span>
//           </div>

//           <div className="hidden lg:block w-px bg-gray-200 self-stretch" />

//           {/* Right: heading, paragraph, CTA */}
//           <div className="flex-1">
//             <h2 className="text-2xl sm:text-3xl lg:text-3xl font-medium leading-[1.6] sm:leading-[1.5] lg:leading-[1.25] text-gray-900">
//              HSMA Nepal brings together hospitality sales and marketing professionals across Nepal to strengthen connections, share knowledge, and create opportunities for growth. Through collaboration, networking, and industry engagement, we work to elevate hospitality standards and support the growth of tourism in Nepal.
//             </h2>

//             <p className="text-gray-500 text-sm sm:text-lg leading-relaxed mt-6 max-w-5xl">
//             We are committed to building a stronger, more connected hospitality community through professional development, meaningful partnerships, and a shared vision for progress.
//             </p>

//             <a
//               href="/about"
//               className="inline-flex items-center gap-2 bg-[#007dcc]  transition-colors text-white font-semibold pl-2 pr-6 py-2.5 rounded-full mt-8 w-fit"
//             >
//               <span className="w-7 h-7 rounded-full bg-white text-[#007dcc] flex items-center justify-center text-xs">
//                 »
//               </span>
//               More About Us
//             </a>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-gray-200 mt-14 sm:mt-16" />

//         {/* Stats row */}
//          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-6 pt-10 sm:pt-12 justify-items-left text-center">
//           <div className="flex items-center justify-center sm:block">
//             <div>
//               <p className="text-4xl sm:text-5xl font-bold text-gray-900">
//                 300+
//               </p>
//               <p className="text-gray-500 text-sm sm:text-base mt-2">
//                  Members
//               </p>
//             </div>
//           </div>
 
//           <div className="flex items-center justify-center sm:block relative">
//             <div className="hidden sm:block absolute -left-20 top-0 h-16 w-px bg-gray-200" />
//             <div>
//               <p className="text-4xl sm:text-5xl font-bold text-gray-900">
//                 11
//               </p>
//               <p className="text-gray-500 text-sm sm:text-base mt-2">
//                Member Committee
//               </p>
//             </div>
//           </div>
 
//           <div className="flex items-center justify-center sm:block relative">
//             <div className="hidden sm:block absolute -left-20 top-0 h-16 w-px bg-gray-200" />
//             <div>
//               <p className="text-4xl sm:text-5xl font-bold text-gray-900">
//                 60+
//               </p>
//               <p className="text-gray-500 text-sm sm:text-base mt-2">
//                 Industry Representatives
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center justify-center sm:block relative">
//             <div className="hidden sm:block absolute -left-20 top-0 h-16 w-px bg-gray-200" />
//             <div>
//               <p className="text-4xl sm:text-5xl font-bold text-gray-900">
//                 7
//               </p>
//               <p className="text-gray-500 text-sm sm:text-base mt-2">
//                 Province Represented
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useRef, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function About() {
//   const sectionRef = useRef(null);
//   const badgeRef = useRef(null);
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);
//   const ctaRef = useRef(null);
//   const dividerRef = useRef(null);
//   const statRefs = useRef([]);
//   statRefs.current = [];

//   const addStatRef = (el) => {
//     if (el && !statRefs.current.includes(el)) {
//       statRefs.current.push(el);
//     }
//   };

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Set initial (from) states once, GSAP will animate to/from these
//       gsap.set(badgeRef.current, { opacity: 0, y: -16, scale: 0.9 });
//       gsap.set(headingRef.current, { opacity: 0, y: 24 });
//       gsap.set(paraRef.current, { opacity: 0, y: 24 });
//       gsap.set(ctaRef.current, { opacity: 0, y: 24 });
//       gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
//       gsap.set(statRefs.current, { opacity: 0, y: 20 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           // play on enter, reverse when scrolling back up out of view,
//           // and re-play again if it re-enters (works both directions)
//           toggleActions: "play reverse play reverse",
//         },
//         defaults: { ease: "power3.out", duration: 0.7 },
//       });

//       tl.to(badgeRef.current, { opacity: 1, y: 0, scale: 1 })
//         .to(headingRef.current, { opacity: 1, y: 0 }, "-=0.45")
//         .to(paraRef.current, { opacity: 1, y: 0 }, "-=0.4")
//         .to(ctaRef.current, { opacity: 1, y: 0 }, "-=0.4")
//         .to(dividerRef.current, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "-=0.2")
//         .to(
//           statRefs.current,
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.6,
//             stagger: 0.12,
//             ease: "back.out(1.6)",
//           },
//           "-=0.3"
//         );

//       // Gentle hover-friendly float on the CTA arrow badge
//       const arrow = ctaRef.current?.querySelector("span");
//       if (arrow) {
//         gsap.to(arrow, {
//           x: 3,
//           repeat: -1,
//           yoyo: true,
//           duration: 0.9,
//           ease: "sine.inOut",
//         });
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="w-full  px-4 sm:px-10 lg:px-0 py-16 sm:py-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Top row: badge + heading */}
//         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//           <div className="flex items-center sm:items-start">
//             <span
//               ref={badgeRef}
//               className="inline-flex items-center gap-2 border border-gray-200 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit"
//             >
//               Get to Know Us
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 className="w-4 h-4"
//               >
//                 <circle cx="12" cy="12" r="3" />
//                 <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
//               </svg>
//             </span>
//           </div>

//           <div className="hidden lg:block w-px bg-gray-200 self-stretch" />

//           {/* Right: heading, paragraph, CTA */}
//           <div className="flex-1">
//             <h2
//               ref={headingRef}
//               className="text-2xl sm:text-3xl lg:text-3xl font-medium leading-[1.6] sm:leading-[1.5] lg:leading-[1.25] text-gray-900"
//             >
//               HSMA Nepal brings together hospitality sales and marketing
//               professionals across Nepal to strengthen connections, share
//               knowledge, and create opportunities for growth. Through
//               collaboration, networking, and industry engagement, we work to
//               elevate hospitality standards and support the growth of tourism
//               in Nepal.
//             </h2>

//             <p
//               ref={paraRef}
//               className="text-gray-500 text-sm sm:text-lg leading-relaxed mt-6 max-w-5xl"
//             >
//               We are committed to building a stronger, more connected
//               hospitality community through professional development,
//               meaningful partnerships, and a shared vision for progress.
//             </p>

//             <a
//               ref={ctaRef}
//               href="/about"
//               className="inline-flex items-center gap-2 bg-[#007dcc]  transition-colors text-white font-semibold pl-2 pr-6 py-2.5 rounded-full mt-8 w-fit"
//             >
//               <span className="w-7 h-7 rounded-full bg-white text-[#007dcc] flex items-center justify-center text-xs">
//                 »
//               </span>
//               More About Us
//             </a>
//           </div>
//         </div>

//         {/* Divider */}
//         <div ref={dividerRef} className="h-px bg-gray-200 mt-14 sm:mt-16" />

//         {/* Stats row */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-6 pt-10 sm:pt-12 justify-items-left text-center">
//           <div className="flex items-center justify-center sm:block">
//             <div ref={addStatRef}>
//               <p className="text-4xl sm:text-5xl font-bold text-gray-900">300+</p>
//               <p className="text-gray-500 text-sm sm:text-base mt-2">Members</p>
//             </div>
//           </div>

//           <div className="flex items-center justify-center sm:block relative">
//             <div className="hidden sm:block absolute -left-20 top-0 h-16 w-px bg-gray-200" />
//             <div ref={addStatRef}>
//               <p className="text-4xl sm:text-5xl font-bold text-gray-900">11</p>
//               <p className="text-gray-500 text-sm sm:text-base mt-2">Member Committee</p>
//             </div>
//           </div>

//           <div className="flex items-center justify-center sm:block relative">
//             <div className="hidden sm:block absolute -left-20 top-0 h-16 w-px bg-gray-200" />
//             <div ref={addStatRef}>
//               <p className="text-4xl sm:text-5xl font-bold text-gray-900">60+</p>
//               <p className="text-gray-500 text-sm sm:text-base mt-2">
//                 Industry Representatives
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center justify-center sm:block relative">
//             <div className="hidden sm:block absolute -left-20 top-0 h-16 w-px bg-gray-200" />
//             <div ref={addStatRef}>
//               <p className="text-4xl sm:text-5xl font-bold text-gray-900">7</p>
//               <p className="text-gray-500 text-sm sm:text-base mt-2">
//                 Province Represented
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const dividerRef = useRef(null);
  const statRefs = useRef([]);
  statRefs.current = [];

  const addStatRef = (el) => {
    if (el && !statRefs.current.includes(el)) {
      statRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(badgeRef.current, { opacity: 0, y: -16, scale: 0.9 });
      gsap.set(headingRef.current, { opacity: 0, y: 24 });
      gsap.set(paraRef.current, { opacity: 0, y: 24 });
      gsap.set(ctaRef.current, { opacity: 0, y: 24 });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(statRefs.current, { opacity: 0, y: 20 });

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
        .to(paraRef.current, { opacity: 1, y: 0 }, "-=0.4")
        .to(ctaRef.current, { opacity: 1, y: 0 }, "-=0.4")
        .to(dividerRef.current, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "-=0.2")
        .to(
          statRefs.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.6)",
          },
          "-=0.3"
        );

      const arrow = ctaRef.current?.querySelector("span");
      if (arrow) {
        gsap.to(arrow, {
          x: 3,
          repeat: -1,
          yoyo: true,
          duration: 0.9,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-4 sm:px-10 lg:px-0 py-16 sm:py-0 sm:pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Top row: badge + heading */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-0 lg:px-0">
          <div className="flex items-center sm:items-start">
            <span
              ref={badgeRef}
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit"
            >
              Get to Know Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
          </div>

          <div className="hidden lg:block w-px bg-gray-200 self-stretch" />

          {/* Right: heading, paragraph, CTA */}
          <div className="flex-1">
            <h2
              ref={headingRef}
              className="text-2xl sm:text-3xl lg:text-3xl font-medium leading-[1.6] sm:leading-[1.5] lg:leading-[1.25] text-gray-900"
            >
              HSMA Nepal brings together hospitality sales and marketing
              professionals across Nepal to strengthen connections, share
              knowledge, and create opportunities for growth. Through
              collaboration, networking, and industry engagement, we work to
              elevate hospitality standards and support the growth of tourism
              in Nepal.
            </h2>

            <p
              ref={paraRef}
              className="text-gray-500 text-sm sm:text-lg leading-relaxed mt-6 max-w-5xl"
            >
              We are committed to building a stronger, more connected
              hospitality community through professional development,
              meaningful partnerships, and a shared vision for progress.
            </p>

            <a
              ref={ctaRef}
              href="/about"
              className="inline-flex items-center gap-2 bg-[#007dcc] transition-colors text-white font-semibold pl-2 pr-6 py-2.5 rounded-full mt-8 w-fit"
            >
              <span className="w-7 h-7 rounded-full bg-white text-[#007dcc] flex items-center justify-center text-xs">
                »
              </span>
              More About Us
            </a>
          </div>
        </div>

    
      </div>

    {/* Stats row: full width, rounded-3xl top */}
<div className="w-full bg-[#007DCC] text-white mt-10 sm:mt-12 pt-24 pb-16 sm:pb-20">
  <div className="max-w-3xl mx-auto text-center px-6 mb-12 sm:mb-16">
    <h3 className="text-2xl sm:text-3xl font-semibold">
      Our Impact Across Nepal
    </h3>
    <p className="text-white/80 text-sm sm:text-base mt-3">
      A growing network of hospitality and tourism professionals driving
      collaboration and industry growth nationwide.
    </p>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 px-6 sm:px-12 justify-items-stretch text-center">

    <div className="bg-white rounded-3xl p-8">
      <div className="flex flex-col items-center justify-center">
        <div ref={addStatRef}>
          <img
            src="/images/one.png"
            alt="Members icon"
            className="w-12 h-12 mx-auto mb-4"
          />
          <p className="text-4xl sm:text-5xl font-bold text-gray-700">300+</p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">Members</p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-3xl p-8">
      <div className="flex flex-col items-center justify-center">
        <div ref={addStatRef}>
          <img
            src="/images/two.png"
            alt="Member Committee icon"
            className="w-12 h-12 mx-auto mb-4"
          />
          <p className="text-4xl sm:text-5xl font-bold text-gray-700">11</p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">Member Committee</p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-3xl p-8">
      <div className="flex flex-col items-center justify-center">
        <div ref={addStatRef}>
          <img
            src="/images/three.png"
            alt="Industry Representatives icon"
            className="w-12 h-12 mx-auto mb-4"
          />
          <p className="text-4xl sm:text-5xl font-bold text-gray-700">60+</p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">Industry Representatives</p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-3xl p-8">
      <div className="flex flex-col items-center justify-center">
        <div ref={addStatRef}>
          <img
            src="/images/four.png"
            alt="Province Representatives icon"
            className="w-12 h-12 mx-auto mb-4"
          />
          <p className="text-4xl sm:text-5xl font-bold text-gray-700">7</p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">Province Representatives</p>
        </div>
      </div>
    </div>

  </div>
</div>
    </section>
  );
}