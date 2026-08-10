// import AboutBanner from "@/MainComponent/AboutBanner";
// import {
//   Handshake,
//   Target,
//   Network,
//   Globe2,
//   Users,
//   Award,
//   Calendar,
//   MapPin,
// } from "lucide-react";


// const objectives = [
//   {
//     icon: Handshake,
//     title: "Exchange & Collaboration",
//     description:
//       "Facilitating the exchange of information and fostering collaboration among different hospitality sales personalities.",
//   },
//   {
//     icon: Target,
//     title: "Member Success",
//     description:
//       "Assisting association members in achieving their organisation's aims and objectives.",
//   },
//   {
//     icon: Network,
//     title: "Networking Platform",
//     description:
//       "Creating an effective platform for members to network and work together.",
//   },
//   {
//     icon: Globe2,
//     title: "Tourism Promotion",
//     description:
//       "Championing the aim and purpose of promoting tourism in Nepal.",
//   },
//   {
//     icon: Users,
//     title: "Community Bonding",
//     description:
//       "Building a strong bond within the team, where members from the same field can know one another.",
//   },
// ];

// const stats = [
//   { value: "300+", label: "Members" },
//   { value: "15+", label: "Events Hosted" },
//   { value: "5+", label: "Years of Impact" },
//   { value: "1", label: "Shared Mission" },
// ];

// export default function AboutPage() {
//   return (
//     <div className="w-full font-sans bg-white">
//       <AboutBanner/>

//       {/* Who we are */}
//       <section className="px-4 sm:px-10 lg:px-16 py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           <div>
//             <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
//               Who We Are
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-[1.25]">
//               A platform built by and for hospitality sales professionals
//             </h2>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-6">
//               HSMAN was formed to give hospitality sales and marketing
//               professionals across Nepal a shared home — a place to exchange
//               ideas, support one another's goals, and work collectively
//               toward a stronger tourism industry. From hotel sales teams to
//               travel agencies, our members represent every corner of Nepal's
//               hospitality landscape.
//             </p>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
//               Through regular meet-ups, training sessions, and community
//               initiatives, we help our members grow professionally while
//               building genuine, lasting relationships within the field.
//             </p>
//           </div>

//           <div className="rounded-2xl overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=70"
//               alt="HSMAN members networking"
//               className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Stats strip */}
//       <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
//         <div className="max-w-7xl mx-auto bg-[#007DCC] rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 px-6 sm:px-10 py-10 sm:py-12">
//           {stats.map((stat) => (
//             <div key={stat.label} className="text-center">
//               <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
//                 {stat.value}
//               </p>
//               <p className="text-white/80 text-xs sm:text-sm mt-2">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//           <div className="border border-[#007DCC]/20 rounded-2xl p-8 sm:p-10">
//             <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-6">
//               <Target size={22} strokeWidth={1.5} className="text-[#007DCC]" />
//             </span>
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
//               Our Mission
//             </h3>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
//               To unite hospitality sales and marketing professionals across
//               Nepal, providing a platform for collaboration, learning, and
//               mutual growth that strengthens the industry as a whole.
//             </p>
//           </div>

//           <div className="border border-[#007DCC]/20 rounded-2xl p-8 sm:p-10">
//             <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-6">
//               <Globe2 size={22} strokeWidth={1.5} className="text-[#007DCC]" />
//             </span>
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
//               Our Vision
//             </h3>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
//               A thriving, well-connected hospitality community that drives
//               tourism growth in Nepal and positions the country as a leading
//               destination on the global stage.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Objectives */}
//       <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
//             <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
//               Our Objectives
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-2xl">
//               What HSMAN stands for
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {objectives.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.title}
//                   className="border border-gray-100 rounded-2xl p-7 sm:p-8 hover:border-[#007DCC]/30 hover:bg-[#007DCC]/5 transition-colors"
//                 >
//                   <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-5">
//                     <Icon size={22} strokeWidth={1.5} className="text-[#007DCC]" />
//                   </span>
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm leading-relaxed mt-3">
//                     {item.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Timeline / journey */}
//       <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
//             <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
//               Our Journey
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-2xl">
//               Building momentum, one event at a time
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
//             <div className="flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl">
//               <Calendar size={22} className="text-[#007DCC]" />
//               <h3 className="text-lg font-semibold text-gray-900">
//                 HSMAN Sales Meet
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Our flagship annual gathering, bringing hospitality sales
//                 teams together to connect and share strategies.
//               </p>
//             </div>
//             <div className="flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl">
//               <Award size={22} className="text-[#007DCC]" />
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Blood Donation Program
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Giving back to the community through organized donation
//                 drives with the Nepal Red Cross.
//               </p>
//             </div>
//             <div className="flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl">
//               <MapPin size={22} className="text-[#007DCC]" />
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Meet & Greet Programs
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Regular training and networking sessions held across
//                 Kathmandu, Pokhara, and beyond.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-4 sm:px-10 lg:px-16 pb-20 sm:pb-28">
//         <div className="max-w-7xl mx-auto bg-[#007DCC] rounded-2xl px-6 sm:px-12 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white max-w-xl">
//             Ready to be part of Nepal's hospitality network?
//           </h2>
//           <a
//             href="#membership"
//             className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 transition-colors text-[#007DCC] font-semibold px-7 py-3 rounded-full text-sm sm:text-base whitespace-nowrap"
//           >
//             Become a Member
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from 'react';
// import AboutBanner from "@/MainComponent/AboutBanner";
// import {
//   Handshake,
//   Target,
//   Network,
//   Globe2,
//   Users,
//   Award,
//   Calendar,
//   MapPin,
// } from "lucide-react";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const objectives = [
//   {
//     icon: Handshake,
//     title: "Exchange & Collaboration",
//     description:
//       "Facilitating the exchange of information and fostering collaboration among different hospitality sales personalities.",
//   },
//   {
//     icon: Target,
//     title: "Member Success",
//     description:
//       "Assisting association members in achieving their organisation's aims and objectives.",
//   },
//   {
//     icon: Network,
//     title: "Networking Platform",
//     description:
//       "Creating an effective platform for members to network and work together.",
//   },
//   {
//     icon: Globe2,
//     title: "Tourism Promotion",
//     description:
//       "Championing the aim and purpose of promoting tourism in Nepal.",
//   },
//   {
//     icon: Users,
//     title: "Community Bonding",
//     description:
//       "Building a strong bond within the team, where members from the same field can know one another.",
//   },
// ];

// const stats = [
//   { value: "300+", label: "Members" },
//   { value: "15+", label: "Events Hosted" },
//   { value: "5+", label: "Years of Impact" },
//   { value: "1", label: "Shared Mission" },
// ];

// export default function AboutPage() {
//   const sectionRefs = {
//     whoWeAre: useRef(null),
//     imageRef: useRef(null),
//     statsRef: useRef(null),
//     missionRef: useRef(null),
//     visionRef: useRef(null),
//     objectivesRef: useRef(null),
//     journeyRef: useRef(null),
//     ctaRef: useRef(null),
//   };

//   const objectiveRefs = useRef([]);
//   const journeyRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Who We Are section - slide from left
//       gsap.from(sectionRefs.whoWeAre.current, {
//         x: -60,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRefs.whoWeAre.current,
//           start: "top 85%",
//           end: "top 65%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       // Image animation - scale and fade
//       gsap.from(sectionRefs.imageRef.current, {
//         scale: 0.9,
//         opacity: 0,
//         duration: 1.2,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: sectionRefs.imageRef.current,
//           start: "top 85%",
//           end: "top 65%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       // Stats animation - stagger from bottom with bounce
//       const statItems = sectionRefs.statsRef.current?.querySelectorAll('.stat-item');
//       if (statItems) {
//         gsap.from(statItems, {
//           y: 60,
//           opacity: 0,
//           duration: 0.9,
//           stagger: 0.15,
//           ease: "back.out(1.8)",
//           scrollTrigger: {
//             trigger: sectionRefs.statsRef.current,
//             start: "top 85%",
//             end: "top 65%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       }

//       // Mission animation - slide from left
//       gsap.from(sectionRefs.missionRef.current, {
//         x: -50,
//         opacity: 0,
//         duration: 0.9,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRefs.missionRef.current,
//           start: "top 85%",
//           end: "top 65%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       // Vision animation - slide from right
//       gsap.from(sectionRefs.visionRef.current, {
//         x: 50,
//         opacity: 0,
//         duration: 0.9,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRefs.visionRef.current,
//           start: "top 85%",
//           end: "top 65%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       // Objectives - stagger with 3D rotation
//       objectiveRefs.current.forEach((card, index) => {
//         gsap.from(card, {
//           y: 40,
//           opacity: 0,
//           rotationX: 10,
//           duration: 0.8,
//           delay: index * 0.1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 88%",
//             end: "top 68%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       });

//       // Journey cards - Fixed animation with proper targeting
//       journeyRefs.current.forEach((card, index) => {
//         gsap.from(card, {
//           y: 50,
//           opacity: 0,
//           duration: 0.8,
//           delay: index * 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 88%",
//             end: "top 68%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       });

//       // CTA animation - pulse scale effect
//       gsap.from(sectionRefs.ctaRef.current, {
//         scale: 0.95,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRefs.ctaRef.current,
//           start: "top 85%",
//           end: "top 65%",
//           toggleActions: "play none none reverse",
//         },
//       });

//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="w-full font-sans bg-white">
//       <AboutBanner/>

//       {/* Who we are */}
//       <section className="px-4 sm:px-10 lg:px-16 py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           <div ref={sectionRefs.whoWeAre}>
//             <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
//               Who We Are
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-[1.25]">
//               A platform built by and for hospitality sales professionals
//             </h2>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-6">
//               HSMAN was formed to give hospitality sales and marketing
//               professionals across Nepal a shared home — a place to exchange
//               ideas, support one another's goals, and work collectively
//               toward a stronger tourism industry. From hotel sales teams to
//               travel agencies, our members represent every corner of Nepal's
//               hospitality landscape.
//             </p>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
//               Through regular meet-ups, training sessions, and community
//               initiatives, we help our members grow professionally while
//               building genuine, lasting relationships within the field.
//             </p>
//           </div>

//           <div 
//             ref={sectionRefs.imageRef}
//             className="rounded-2xl overflow-hidden"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=70"
//               alt="HSMAN members networking"
//               className="w-full h-64 sm:h-80 lg:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Stats strip */}
//       <section 
//         ref={sectionRefs.statsRef}
//         className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24"
//       >
//         <div className="max-w-7xl mx-auto bg-[#007DCC] rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 px-6 sm:px-10 py-10 sm:py-12">
//           {stats.map((stat) => (
//             <div key={stat.label} className="stat-item text-center">
//               <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
//                 {stat.value}
//               </p>
//               <p className="text-white/80 text-xs sm:text-sm mt-2">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//           <div 
//             ref={sectionRefs.missionRef}
//             className="border border-[#007DCC]/20 rounded-2xl p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300"
//           >
//             <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-6">
//               <Target size={22} strokeWidth={1.5} className="text-[#007DCC]" />
//             </span>
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
//               Our Mission
//             </h3>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
//               To unite hospitality sales and marketing professionals across
//               Nepal, providing a platform for collaboration, learning, and
//               mutual growth that strengthens the industry as a whole.
//             </p>
//           </div>

//           <div 
//             ref={sectionRefs.visionRef}
//             className="border border-[#007DCC]/20 rounded-2xl p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300"
//           >
//             <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-6">
//               <Globe2 size={22} strokeWidth={1.5} className="text-[#007DCC]" />
//             </span>
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
//               Our Vision
//             </h3>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
//               A thriving, well-connected hospitality community that drives
//               tourism growth in Nepal and positions the country as a leading
//               destination on the global stage.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Objectives */}
//       <section 
//         ref={sectionRefs.objectivesRef}
//         className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24"
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
//             <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
//               Our Objectives
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-2xl">
//               What HSMAN stands for
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {objectives.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.title}
//                   ref={el => objectiveRefs.current[index] = el}
//                   className="border border-gray-100 rounded-2xl p-7 sm:p-8 hover:border-[#007DCC]/30 hover:bg-[#007DCC]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-5">
//                     <Icon size={22} strokeWidth={1.5} className="text-[#007DCC]" />
//                   </span>
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm leading-relaxed mt-3">
//                     {item.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Timeline / journey - FIXED ANIMATION */}
//       <section 
//         ref={sectionRefs.journeyRef}
//         className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24"
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
//             <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
//               Our Journey
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-2xl">
//               Building momentum, one event at a time
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
//             <div 
//               ref={el => journeyRefs.current[0] = el}
//               className="journey-item flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl hover:bg-[#007DCC]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
//             >
//               <Calendar size={22} className="text-[#007DCC]" />
//               <h3 className="text-lg font-semibold text-gray-900">
//                 HSMAN Sales Meet
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Our flagship annual gathering, bringing hospitality sales
//                 teams together to connect and share strategies.
//               </p>
//             </div>
//             <div 
//               ref={el => journeyRefs.current[1] = el}
//               className="journey-item flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl hover:bg-[#007DCC]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
//             >
//               <Award size={22} className="text-[#007DCC]" />
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Blood Donation Program
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Giving back to the community through organized donation
//                 drives with the Nepal Red Cross.
//               </p>
//             </div>
//             <div 
//               ref={el => journeyRefs.current[2] = el}
//               className="journey-item flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl hover:bg-[#007DCC]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
//             >
//               <MapPin size={22} className="text-[#007DCC]" />
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Meet & Greet Programs
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Regular training and networking sessions held across
//                 Kathmandu, Pokhara, and beyond.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section 
//         ref={sectionRefs.ctaRef}
//         className="px-4 sm:px-10 lg:px-16 pb-20 sm:pb-28"
//       >
//         <div className="max-w-7xl mx-auto bg-[#007DCC] rounded-2xl px-6 sm:px-12 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white max-w-xl">
//             Ready to be part of Nepal's hospitality network?
//           </h2>
//           <a
//             href="#membership"
//             className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 transition-all duration-300 text-[#007DCC] font-semibold px-7 py-3 rounded-full text-sm sm:text-base whitespace-nowrap hover:scale-105 hover:shadow-lg"
//           >
//             Become a Member
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }



import React, { useEffect, useRef } from 'react';
import AboutBanner from "@/MainComponent/AboutBanner";
import {
  Handshake,
  Target,
  Network,
  Globe2,
  Users,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const objectives = [
  {
    icon: Handshake,
    title: "Exchange & Collaboration",
    description:
      "Facilitating the exchange of information and fostering collaboration among different hospitality sales personalities.",
  },
  {
    icon: Target,
    title: "Member Success",
    description:
      "Assisting association members in achieving their organisation's aims and objectives.",
  },
  {
    icon: Network,
    title: "Networking Platform",
    description:
      "Creating an effective platform for members to network and work together.",
  },
  {
    icon: Globe2,
    title: "Tourism Promotion",
    description:
      "Championing the aim and purpose of promoting tourism in Nepal.",
  },
  {
    icon: Users,
    title: "Community Bonding",
    description:
      "Building a strong bond within the team, where members from the same field can know one another.",
  },
];

const stats = [
  { value: "300+", label: "Members" },
  { value: "15+", label: "Events Hosted" },
  { value: "5+", label: "Years of Impact" },
  { value: "1", label: "Shared Mission" },
];

export default function AboutPage() {
  const sectionRefs = {
    whoWeAre: useRef(null),
    imageRef: useRef(null),
    statsRef: useRef(null),
    missionRef: useRef(null),
    visionRef: useRef(null),
    objectivesRef: useRef(null),
    journeyRef: useRef(null),
    ctaRef: useRef(null),
  };

  const objectiveRefs = useRef([]);
  const journeyRefs = useRef([]);

  useEffect(() => {
    // Keep horizontal slide distances small on mobile so nothing pushes
    // past the viewport edge and creates horizontal scroll/overflow.
    const isSmallScreen = window.innerWidth < 640;
    const xOffset = isSmallScreen ? 24 : 60;
    const xOffsetSmall = isSmallScreen ? 20 : 50;

    const ctx = gsap.context(() => {
      // Who We Are section - slide from left
      gsap.from(sectionRefs.whoWeAre.current, {
        x: -xOffset,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRefs.whoWeAre.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Image animation - scale and fade (no horizontal movement, so no overflow risk)
      gsap.from(sectionRefs.imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRefs.imageRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Stats animation - stagger from bottom with bounce
      const statItems = sectionRefs.statsRef.current?.querySelectorAll('.stat-item');
      if (statItems) {
        gsap.from(statItems, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: sectionRefs.statsRef.current,
            start: "top 85%",
            end: "top 65%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Mission animation - slide from left
      gsap.from(sectionRefs.missionRef.current, {
        x: -xOffsetSmall,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRefs.missionRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Vision animation - slide from right
      gsap.from(sectionRefs.visionRef.current, {
        x: xOffsetSmall,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRefs.visionRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Objectives - stagger with 3D rotation (vertical only, safe)
      objectiveRefs.current.forEach((card, index) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          rotationX: 10,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            end: "top 68%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Journey cards - vertical only, safe
      journeyRefs.current.forEach((card, index) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            end: "top 68%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // CTA animation - pulse scale effect
      gsap.from(sectionRefs.ctaRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRefs.ctaRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    // overflow-x-hidden clips any transient horizontal offset from the
    // x-axis GSAP tweens above so small screens never get horizontal scroll
    <div className="w-full font-sans bg-white overflow-x-hidden">
      <AboutBanner/>

      {/* Who we are */}
      <section className="px-4 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div ref={sectionRefs.whoWeAre}>
            <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-[1.25]">
              A platform built by and for hospitality sales professionals
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-6">
              HSMAN was formed to give hospitality sales and marketing
              professionals across Nepal a shared home — a place to exchange
              ideas, support one another's goals, and work collectively
              toward a stronger tourism industry. From hotel sales teams to
              travel agencies, our members represent every corner of Nepal's
              hospitality landscape.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
              Through regular meet-ups, training sessions, and community
              initiatives, we help our members grow professionally while
              building genuine, lasting relationships within the field.
            </p>
          </div>

          <div 
            ref={sectionRefs.imageRef}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=70"
              alt="HSMAN members networking"
              className="w-full h-64 sm:h-80 lg:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section 
        ref={sectionRefs.statsRef}
        className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto bg-[#007DCC] rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 px-6 sm:px-10 py-10 sm:py-12">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div 
            ref={sectionRefs.missionRef}
            className="border border-[#007DCC]/20 rounded-2xl p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300"
          >
            <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-6">
              <Target size={22} strokeWidth={1.5} className="text-[#007DCC]" />
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
              To unite hospitality sales and marketing professionals across
              Nepal, providing a platform for collaboration, learning, and
              mutual growth that strengthens the industry as a whole.
            </p>
          </div>

          <div 
            ref={sectionRefs.visionRef}
            className="border border-[#007DCC]/20 rounded-2xl p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300"
          >
            <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-6">
              <Globe2 size={22} strokeWidth={1.5} className="text-[#007DCC]" />
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
              A thriving, well-connected hospitality community that drives
              tourism growth in Nepal and positions the country as a leading
              destination on the global stage.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section 
        ref={sectionRefs.objectivesRef}
        className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
              Our Objectives
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-2xl">
              What HSMAN stands for
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {objectives.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  ref={el => objectiveRefs.current[index] = el}
                  className="border border-gray-100 rounded-2xl p-7 sm:p-8 hover:border-[#007DCC]/30 hover:bg-[#007DCC]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-5">
                    <Icon size={22} strokeWidth={1.5} className="text-[#007DCC]" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline / journey */}
      <section 
        ref={sectionRefs.journeyRef}
        className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-2xl">
              Building momentum, one event at a time
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <div 
              ref={el => journeyRefs.current[0] = el}
              className="journey-item flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl hover:bg-[#007DCC]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <Calendar size={22} className="text-[#007DCC]" />
              <h3 className="text-lg font-semibold text-gray-900">
                HSMAN Sales Meet
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our flagship annual gathering, bringing hospitality sales
                teams together to connect and share strategies.
              </p>
            </div>
            <div 
              ref={el => journeyRefs.current[1] = el}
              className="journey-item flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl hover:bg-[#007DCC]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <Award size={22} className="text-[#007DCC]" />
              <h3 className="text-lg font-semibold text-gray-900">
                Blood Donation Program
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Giving back to the community through organized donation
                drives with the Nepal Red Cross.
              </p>
            </div>
            <div 
              ref={el => journeyRefs.current[2] = el}
              className="journey-item flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl hover:bg-[#007DCC]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <MapPin size={22} className="text-[#007DCC]" />
              <h3 className="text-lg font-semibold text-gray-900">
                Meet & Greet Programs
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Regular training and networking sessions held across
                Kathmandu, Pokhara, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        ref={sectionRefs.ctaRef}
        className="px-4 sm:px-10 lg:px-16 pb-20 sm:pb-28"
      >
        <div className="max-w-7xl mx-auto bg-[#007DCC] rounded-2xl px-6 sm:px-12 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white max-w-xl">
            Ready to be part of Nepal's hospitality network?
          </h2>
          <a
            href="#membership"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 transition-all duration-300 text-[#007DCC] font-semibold px-7 py-3 rounded-full text-sm sm:text-base whitespace-nowrap hover:scale-105 hover:shadow-lg"
          >
            Become a Member
          </a>
        </div>
      </section>
    </div>
  );
}