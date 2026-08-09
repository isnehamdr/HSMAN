// import { Link } from "@inertiajs/react";
// import { ArrowRight } from "lucide-react";

// export default function AgencyBanner() {
//   return (
//     <section className="relative w-full overflow-hidden pt-28 pb-10 sm:pt-24 sm:pb-14 min-h-[460px]">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('/images/img1.png')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",

//         }}
//       />
      
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />
      
//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
//         <div className="flex flex-col items-center justify-center text-center">
//           {/* Title */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
//             Home / Agency
//           </h1>
          
       
//           {/* Optional: CTA Button */}
        
//         </div>
//       </div>
      
//       {/* Decorative Logo Mark - Hidden on small screens */}
      
//     </section>
//   );
// }

// import { Link } from "@inertiajs/react";
// import { ArrowRight } from "lucide-react";

// export default function ServiceBanner() {
//   return (
//      <section className="relative w-full overflow-hidden pt-28 pb-10 sm:pt-24 sm:pb-14 min-h-[460px]">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('/images/img6.png')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",

//         }}
//       />
      
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />
      
//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
//         <div className="flex flex-col items-center justify-center text-center">
//           {/* Title */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
//             Home / Services
//           </h1>
          
       
//           {/* Optional: CTA Button */}
        
//         </div>
//       </div>
      
//       {/* Decorative Logo Mark - Hidden on small screens */}
      
//     </section>
//   );
// }


import React, { useEffect, useRef } from 'react';
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AgencyBanner() {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const breadcrumbRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background image animation - subtle zoom effect
      gsap.from(backgroundRef.current, {
        scale: 1.15,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Overlay animation - fade in from transparent
      gsap.from(overlayRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Content container animation - slide up with fade
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Title animation - split effect with stagger
      const titleChars = titleRef.current?.querySelectorAll('.char');
      if (titleChars && titleChars.length > 0) {
        gsap.from(titleChars, {
          y: 60,
          opacity: 0,
          rotationX: 40,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "top 65%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Breadcrumb animation - slide from left with fade
      gsap.from(breadcrumbRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: breadcrumbRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

    });

    return () => ctx.revert();
  }, []);

  // Split title into characters for animation
  const titleText = "Home / Agency";
  const titleChars = titleText.split('').map((char, index) => (
    <span key={index} className="char inline-block">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden pt-28 pb-10 sm:pt-24 sm:pb-14 min-h-[460px]"
    >
      {/* Background Image with Overlay */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/img6.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/60" 
      />
      
      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24"
      >
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4"
          >
            {titleChars}
          </h1>
          
          {/* Breadcrumb indicator - subtle animated dot or line */}
          {/* <div 
            ref={breadcrumbRef}
            className="flex items-center gap-2 text-white/70 text-sm sm:text-base"
          >
            <span className="w-2 h-2 rounded-full bg-[#007DCC] animate-pulse"></span>
            <span>Home</span>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Agency</span>
          </div> */}
        </div>
      </div>
      
      {/* Decorative Logo Mark - Hidden on small screens */}
      
    </section>
  );
}