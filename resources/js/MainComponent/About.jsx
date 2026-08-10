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
  const statBoxRefs = useRef([]);
  const statNumberRefs = useRef([]);
  statBoxRefs.current = [];
  statNumberRefs.current = [];

  const addStatBoxRef = (el) => {
    if (el && !statBoxRefs.current.includes(el)) {
      statBoxRefs.current.push(el);
    }
  };

  const addStatNumberRef = (el) => {
    if (el && !statNumberRefs.current.includes(el)) {
      statNumberRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(badgeRef.current, { opacity: 0, y: -16, scale: 0.9 });
      gsap.set(headingRef.current, { opacity: 0, y: 24 });
      gsap.set(paraRef.current, { opacity: 0, y: 24 });
      gsap.set(ctaRef.current, { opacity: 0, y: 24 });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });

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
        .to(dividerRef.current, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "-=0.2");

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

      // Stats row: fade/scale in boxes, then count up numbers
      gsap.set(statBoxRefs.current, { opacity: 0, y: 20, scale: 0.9 });

      const statsTl = gsap.timeline({
        scrollTrigger: {
          trigger: statBoxRefs.current[0]?.closest("div.grid") || sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      statsTl.to(statBoxRefs.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.6)",
      });

      statNumberRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = parseFloat(el.dataset.target || "0");
        const suffix = el.dataset.suffix || "";
        const counter = { val: 0 };

        statsTl.to(
          counter,
          {
            val: target,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.floor(counter.val) + suffix;
            },
            onComplete: () => {
              el.textContent = target + suffix;
            },
          },
          i === 0 ? "-=0.2" : "<0.1"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: "/images/one.png", alt: "Members icon", target: 300, suffix: "+", label: "Members" },
    { icon: "/images/two.png", alt: "Member Committee icon", target: 11, suffix: "", label: "Member Committee" },
    { icon: "/images/three.png", alt: "Industry Representatives icon", target: 60, suffix: "+", label: "Industry Representatives" },
    { icon: "/images/four.png", alt: "Province Representatives icon", target: 7, suffix: "", label: "Province Representatives" },
  ];

  return (
    <section ref={sectionRef} className="w-full px-0 py-10 lg:py-20 sm:px-10 lg:px-0 sm:py-0 sm:pt-24 lg:mb-20">
      <div className="px-4 mx-auto max-w-7xl lg:px-0">
        {/* Top row: badge + heading */}
        <div className="flex flex-col items-center gap-8 px-0 lg:flex-row lg:gap-12 lg:px-0">
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

          <div className="self-stretch hidden w-px bg-gray-200 lg:block" />

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
              className="max-w-5xl mt-6 text-sm leading-relaxed text-gray-500 sm:text-lg"
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
      <div className="w-full bg-[#007DCC] text-white mt-10 sm:mt-12 pt-8 lg:pt-16 pb-8 sm:pb-20 relative">
        <div
          className="
            absolute inset-0
            opacity-10
            bg-[linear-gradient(135deg,transparent_49%,rgba(255,255,255,0.6)_50%,transparent_51%)]
            [background-size:40px_40px]
          "
        />

        <div className="flex flex-col px-6 mx-auto mb-12 lg:px-12 text-start sm:mb-16 lg:flex-row lg:justify-between">
          <h3 className="text-3xl font-semibold sm:text-5xl lg:max-w-lg">
            Our Impact Across Nepal
          </h3>
          <p className="max-w-lg mt-3 text-sm text-white/80 sm:text-base">
            A growing network of hospitality and tourism professionals driving
            collaboration and industry growth nationwide.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 text-center lg:-mb-44 sm:grid-cols-4 sm:gap-6 sm:px-12 justify-items-stretch">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              ref={addStatBoxRef}
              className="p-4 lg:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={stat.icon}
                  alt={stat.alt}
                  className="w-10 h-10 mx-auto mb-3 sm:w-12 sm:h-12 sm:mb-4"
                />
                <p
                  ref={addStatNumberRef}
                  data-target={stat.target}
                  data-suffix={stat.suffix}
                  className="text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl"
                >
                  0{stat.suffix}
                </p>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}