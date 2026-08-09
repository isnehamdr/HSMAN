// import { useState } from "react";
// import { Handshake, Target, Network, Globe2, Users, ArrowUpRight } from "lucide-react";

// const objectives = [
//   {
//     icon: Handshake,
//     number: "01",
//     title: "Exchange & Collaboration",
//     description:
//       "Facilitating the exchange of information and fostering collaboration among different hospitality sales personalities, creating an open channel for ideas and best practices to flow across the industry.",
//   },
//   {
//     icon: Target,
//     number: "02",
//     title: "Member Success",
//     description:
//       "Assisting association members in achieving their organisation's aims and objectives — supporting hotels, resorts, and agencies as they build stronger, more effective sales and marketing functions.",
//   },
//   {
//     icon: Network,
//     number: "03",
//     title: "Networking Platform",
//     description:
//       "Creating an effective platform for members to network and work together, connecting professionals from across Nepal's hospitality landscape to collaborate on shared goals.",
//   },
//   {
//     icon: Globe2,
//     number: "04",
//     title: "Tourism Promotion",
//     description:
//       "Championing the aim and purpose of promoting tourism in Nepal — aligning member efforts toward positioning the country as a leading hospitality and travel destination.",
//   },
//   {
//     icon: Users,
//     number: "05",
//     title: "Community Bonding",
//     description:
//       "Building a strong bond within the team, where members from the same field can genuinely know one another — turning professional connections into a lasting community.",
//   },
// ];

// export default function Services() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="w-full font-sans bg-gray-50 px-4 sm:px-10 lg:px-16 py-20 sm:py-28">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 sm:mb-20">
//           <div className="max-w-2xl">
//             <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full w-fit mb-6">
//               Our Objectives
//             </span>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.15]">
//               What HSMAN stands for
//             </h2>
//           </div>
//           <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
//             Five founding principles guide everything we do — from the events
//             we host to the partnerships we build — all working toward one
//             shared vision for Nepal's hospitality industry.
//           </p>
//         </div>

//         {/* Objectives list */}
//         <div className="flex flex-col border-t border-gray-200">
//           {objectives.map((item, index) => {
//             const Icon = item.icon;
//             const isActive = index === activeIndex;
//             return (
//               <button
//                 key={item.title}
//                 onClick={() => setActiveIndex(isActive ? -1 : index)}
//                 onMouseEnter={() => setActiveIndex(index)}
//                 className="w-full text-left border-b border-gray-200 group"
//               >
//                 <div
//                   className={`grid grid-cols-1 sm:grid-cols-[64px_64px_1fr_auto] gap-4 sm:gap-8 items-center py-7 sm:py-9 px-2 sm:px-4 transition-colors duration-300 ${
//                     isActive ? "bg-[#007DCC]/5" : "hover:bg-gray-50"
//                   }`}
//                 >
//                   {/* Number */}
//                   <span
//                     className={`text-2xl sm:text-3xl font-bold tabular-nums transition-colors duration-300 ${
//                       isActive ? "text-[#007DCC]" : "text-gray-300"
//                     }`}
//                   >
//                     {item.number}
//                   </span>

//                   {/* Icon */}
//                   <span
//                     className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
//                       isActive
//                         ? "bg-[#007DCC] shadow-lg shadow-[#007DCC]/30 scale-105"
//                         : "bg-[#007DCC]/10"
//                     }`}
//                   >
//                     <Icon
//                       size={24}
//                       strokeWidth={1.5}
//                       className={isActive ? "text-white" : "text-[#007DCC]"}
//                     />
//                   </span>

//                   {/* Title + expanding description */}
//                   <div>
//                     <h3
//                       className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
//                         isActive ? "text-gray-900" : "text-gray-700"
//                       }`}
//                     >
//                       {item.title}
//                     </h3>
//                     <div
//                       className={`grid transition-all duration-500 ease-in-out ${
//                         isActive
//                           ? "grid-rows-[1fr] opacity-100 mt-3"
//                           : "grid-rows-[0fr] opacity-0"
//                       }`}
//                     >
//                       <p className="overflow-hidden text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Arrow indicator */}
//                   <span
//                     className={`hidden sm:flex w-10 h-10 rounded-full border items-center justify-center shrink-0 transition-all duration-300 ${
//                       isActive
//                         ? "border-[#007DCC] bg-[#007DCC] text-white rotate-45"
//                         : "border-gray-200 text-gray-400 group-hover:border-[#007DCC]/40"
//                     }`}
//                   >
//                     <ArrowUpRight size={18} />
//                   </span>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState, useRef, useLayoutEffect } from "react";
import { Handshake, Target, Network, Globe2, Users, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const objectives = [
  {
    icon: Handshake,
    number: "01",
    title: "Exchange & Collaboration",
    description:
      "Facilitating the exchange of information and fostering collaboration among different hospitality sales personalities, creating an open channel for ideas and best practices to flow across the industry.",
  },
  {
    icon: Target,
    number: "02",
    title: "Member Success",
    description:
      "Assisting association members in achieving their organisation's aims and objectives — supporting hotels, resorts, and agencies as they build stronger, more effective sales and marketing functions.",
  },
  {
    icon: Network,
    number: "03",
    title: "Networking Platform",
    description:
      "Creating an effective platform for members to network and work together, connecting professionals from across Nepal's hospitality landscape to collaborate on shared goals.",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Tourism Promotion",
    description:
      "Championing the aim and purpose of promoting tourism in Nepal — aligning member efforts toward positioning the country as a leading hospitality and travel destination.",
  },
  {
    icon: Users,
    number: "05",
    title: "Community Bonding",
    description:
      "Building a strong bond within the team, where members from the same field can genuinely know one another — turning professional connections into a lasting community.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const rowRefs = useRef([]);
  rowRefs.current = [];

  const addRowRef = (el) => {
    if (el && !rowRefs.current.includes(el)) {
      rowRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(badgeRef.current, { opacity: 0, y: -14, scale: 0.9 });
      gsap.set(headingRef.current, { opacity: 0, y: 24 });
      gsap.set(subRef.current, { opacity: 0, y: 24 });
      gsap.set(rowRefs.current, { opacity: 0, y: 28 });

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
          rowRefs.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate icon + arrow whenever a row becomes active/inactive
  const handleActivate = (index, el) => {
    const wasActive = index === activeIndex;
    setActiveIndex(wasActive ? -1 : index);

    const icon = el.querySelector("[data-icon-badge]");
    if (icon) {
      gsap.fromTo(
        icon,
        { scale: 0.85, rotate: -8 },
        { scale: 1, rotate: 0, duration: 0.45, ease: "back.out(2)" }
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full font-sans bg-gray-50 px-4 sm:px-10 lg:px-16 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <span
              ref={badgeRef}
              className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full w-fit mb-6"
            >
              Our Objectives
            </span>
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.15]"
            >
              What HSMAN stands for
            </h2>
          </div>
          <p
            ref={subRef}
            className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md"
          >
            Five founding principles guide everything we do — from the events
            we host to the partnerships we build — all working toward one
            shared vision for Nepal's hospitality industry.
          </p>
        </div>

        {/* Objectives list */}
        <div className="flex flex-col border-t border-gray-200">
          {objectives.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={item.title}
                ref={addRowRef}
                onClick={(e) => handleActivate(index, e.currentTarget)}
                onMouseEnter={(e) => {
                  if (index !== activeIndex) {
                    setActiveIndex(index);
                    const icon = e.currentTarget.querySelector("[data-icon-badge]");
                    if (icon) {
                      gsap.fromTo(
                        icon,
                        { scale: 0.85, rotate: -8 },
                        { scale: 1, rotate: 0, duration: 0.45, ease: "back.out(2)" }
                      );
                    }
                  }
                }}
                className="w-full text-left border-b border-gray-200 group"
              >
                <div
                  className={`grid grid-cols-1 sm:grid-cols-[64px_64px_1fr_auto] gap-4 sm:gap-8 items-center py-7 sm:py-9 px-2 sm:px-4 transition-colors duration-300 ${
                    isActive ? "bg-[#007DCC]/5" : "hover:bg-gray-50"
                  }`}
                >
                  {/* Number */}
                  <span
                    className={`text-2xl sm:text-3xl font-bold tabular-nums transition-colors duration-300 ${
                      isActive ? "text-[#007DCC]" : "text-gray-300"
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* Icon */}
                  <span
                    data-icon-badge
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-[#007DCC] shadow-lg shadow-[#007DCC]/30 scale-105"
                        : "bg-[#007DCC]/10"
                    }`}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className={isActive ? "text-white" : "text-[#007DCC]"}
                    />
                  </span>

                  {/* Title + expanding description */}
                  <div>
                    <h3
                      className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-3"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <span
                    className={`hidden sm:flex w-10 h-10 rounded-full border items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? "border-[#007DCC] bg-[#007DCC] text-white rotate-45"
                        : "border-gray-200 text-gray-400 group-hover:border-[#007DCC]/40"
                    }`}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}