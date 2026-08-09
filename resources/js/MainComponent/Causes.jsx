// import { Clock } from "lucide-react";

// const programs = [
//   {
//     image:
//       "/images/event2.jpeg",
//     tag: "Networking",
//     title: "HSMAN Sales Meet",
//     description:
//       "Bringing hospitality sales professionals together to connect, share strategies, and build lasting industry relationships.",
   
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=70",
//     tag: "CSR",
//     title: "Blood Donation Program",
//     description:
//       "Giving back to the community through organized blood donation drives in partnership with the Nepal Red Cross.",
  
//   },
//   {
//     image:
//       "/images/event1.jpeg",
//     tag: "Training",
//     title: "Meet & Greet Program",
//     description:
//       "Capacity-building sessions on digital marketing, branding, and customer service for hospitality professionals.",
   
//   },
// ];

// export default function Programs() {
//   return (
//     <section className="w-full bg-gray-50 px-4 sm:px-10 lg:px-16 py-16 sm:py-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Header row */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-12">
//           <div>
//             <span className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit mb-4">
//               Our Programs
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
//             <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
//               Find Our Popular Programs
//             </h2>
//           </div>

//           <a
//             href="#programs"
//             className="inline-flex items-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] transition-colors text-white font-semibold pl-2 pr-6 py-2.5 rounded-full w-fit shrink-0"
//           >
//             <span className="w-7 h-7 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-xs">
//               »
//             </span>
//             View All Programs
//           </a>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {programs.map((program) => (
//             <div
//               key={program.title}
//               className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5"
//             >
//               {/* Image with tag */}
//               <div className="relative rounded-xl overflow-hidden">
//                 <img
//                   src={program.image}
//                   alt={program.title}
//                   className="w-full h-52 sm:h-56 object-cover"
//                 />
//                 <span className="absolute bottom-3 left-3 bg-[#007DCC] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
//                   {program.tag}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="pt-5">
//                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
//                   {program.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm mt-3 leading-relaxed">
//                   {program.description}
//                 </p>

//                 {/* Progress */}
//                 {/* <div className="mt-5">
//                   <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
//                     <span>{program.raised}%</span>
//                     <span>{program.goal}%</span>
//                   </div>
//                   <div className="w-full h-2 bg-[#007DCC]/10 rounded-full overflow-hidden">
//                     <div
//                       className="h-full bg-[#007DCC] rounded-full"
//                       style={{ width: `${program.goal}%` }}
//                     />
//                   </div>
//                 </div> */}

//                 {/* Footer row */}
//                 <div className="flex items-center justify-between mt-5">
//                   {/* <span className="flex items-center gap-2 text-gray-700 text-sm font-medium">
//                     <Clock size={16} className="text-[#007DCC]" />
//                     {program.days} Days
//                   </span> */}
//                   <a
//                     href="/contact"
//                     className="inline-flex items-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] transition-colors text-white font-semibold pl-1.5 pr-4 py-2 rounded-full text-sm"
//                   >
//                     <span className="w-5 h-5 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-[10px]">
//                       »
//                     </span>
//                     Join Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useRef, useLayoutEffect } from "react";
import { Clock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    image:
      "/images/event2.jpeg",
    tag: "Networking",
    title: "HSMAN Sales Meet",
    description:
      "Bringing hospitality sales professionals together to connect, share strategies, and build lasting industry relationships.",
   
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=70",
    tag: "CSR",
    title: "Blood Donation Program",
    description:
      "Giving back to the community through organized blood donation drives in partnership with the Nepal Red Cross.",
  
  },
  {
    image:
      "/images/event1.jpeg",
    tag: "Training",
    title: "Meet & Greet Program",
    description:
      "Capacity-building sessions on digital marketing, branding, and customer service for hospitality professionals.",
   
  },
];

export default function Programs() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(badgeRef.current, { opacity: 0, y: -14, scale: 0.9 });
      gsap.set(headingRef.current, { opacity: 0, y: 24 });
      gsap.set(ctaRef.current, { opacity: 0, y: 24 });
      gsap.set(cardRefs.current, { opacity: 0, y: 34, scale: 0.97 });

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
        .to(ctaRef.current, { opacity: 1, y: 0 }, "-=0.5")
        .to(
          cardRefs.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Per-card image zoom-out reset + tag pop, tied to the same scroll trigger
      cardRefs.current.forEach((card) => {
        const tag = card.querySelector("[data-tag-pill]");
        if (tag) {
          gsap.fromTo(
            tag,
            { opacity: 0, scale: 0.7 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-gray-50 px-4 sm:px-10 lg:px-16 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span
              ref={badgeRef}
              className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit mb-4"
            >
              Our Programs
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
            <h2 ref={headingRef} className="text-3xl sm:text-4xl font-medium text-gray-900">
              Find Our Popular Programs
            </h2>
          </div>

          <a
            ref={ctaRef}
            href="#programs"
            className="inline-flex items-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] transition-colors text-white font-semibold pl-2 pr-6 py-2.5 rounded-full w-fit shrink-0"
          >
            <span className="w-7 h-7 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-xs">
              »
            </span>
            View All Programs
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              ref={addCardRef}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5"
            >
              {/* Image with tag */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-52 sm:h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
                <span
                  data-tag-pill
                  className="absolute bottom-3 left-3 bg-[#007DCC] text-white text-xs font-semibold px-4 py-1.5 rounded-full"
                >
                  {program.tag}
                </span>
              </div>

              {/* Content */}
              <div className="pt-5">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {program.description}
                </p>

                {/* Progress */}
                {/* <div className="mt-5">
                  <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
                    <span>{program.raised}%</span>
                    <span>{program.goal}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#007DCC]/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#007DCC] rounded-full"
                      style={{ width: `${program.goal}%` }}
                    />
                  </div>
                </div> */}

                {/* Footer row */}
                <div className="flex items-center justify-between mt-5">
                  {/* <span className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <Clock size={16} className="text-[#007DCC]" />
                    {program.days} Days
                  </span> */}
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] transition-colors text-white font-semibold pl-1.5 pr-4 py-2 rounded-full text-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-[10px]">
                      »
                    </span>
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}