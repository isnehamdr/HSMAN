// import EventBanner from '@/MainComponent/EventBanner'
// import React from 'react'
// import { Link } from '@inertiajs/react'
// import { Clock, MapPin, ArrowRight, CalendarCheck, CalendarClock } from 'lucide-react'

// function EventCard({ event }) {
//   return (
//     <div className="bg-slate-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
//       <div className="h-48 w-full overflow-hidden">
//         <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
//       </div>
//       <div className="p-6 flex flex-col flex-1">
//         <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs sm:text-sm text-gray-500 mb-3">
//           <span className="flex items-center gap-1.5">
//             <Clock size={14} className="text-[#007DCC]" />
//             {event.date} · {event.time}
//           </span>
//           <span className="flex items-center gap-1.5">
//             <MapPin size={14} className="text-[#007DCC]" />
//             {event.location}
//           </span>
//         </div>
//         <h3 className="mb-2 text-lg font-semibold text-slate-800 leading-snug">{event.title}</h3>
//         <p className="text-sm text-slate-600 leading-relaxed flex-1">{event.excerpt}</p>
//         <Link
//           href={`/events/${event.id}`}
//           className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#007DCC] hover:gap-2.5 transition-all w-fit"
//         >
//           Read More <ArrowRight size={14} />
//         </Link>
//       </div>
//     </div>
//   );
// }

// const NewsnEvents = ({ events }) => {
//   const upcomingEvents = events.filter((e) => e.type === 'upcoming');
//   const pastEvents = events.filter((e) => e.type === 'past');

//   return (
//     <>
//       <EventBanner />
//       <div className="min-h-screen bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-16">
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-14 text-center md:mb-16">
//             <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
//               News & Events
//             </span>
//             <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
//               Stay Updated with HSMAN
//             </h1>
//             <p className="mt-3 text-sm text-slate-600 sm:text-base md:text-lg max-w-2xl mx-auto">
//               From annual sales meets to community initiatives — catch up on
//               what's coming next and what our members have been up to.
//             </p>
//           </div>

//           <div className="mb-16 sm:mb-20">
//             <div className="flex items-center gap-3 mb-8">
//               <span className="w-10 h-10 rounded-full bg-[#007DCC]/10 flex items-center justify-center shrink-0">
//                 <CalendarClock size={20} className="text-[#007DCC]" />
//               </span>
//               <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Upcoming Events</h2>
//             </div>
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)}
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center gap-3 mb-8">
//               <span className="w-10 h-10 rounded-full bg-[#007DCC]/10 flex items-center justify-center shrink-0">
//                 <CalendarCheck size={20} className="text-[#007DCC]" />
//               </span>
//               <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Past Events</h2>
//             </div>
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {pastEvents.map((event) => <EventCard key={event.id} event={event} />)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default NewsnEvents

import EventBanner from '@/MainComponent/EventBanner'
import React, { useEffect, useRef } from 'react'
import { Link } from '@inertiajs/react'
import { Clock, MapPin, ArrowRight, CalendarCheck, CalendarClock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function EventCard({ event, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    // Individual card animation with stagger effect
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.get(cardRef.current)?.kill()
    }
  }, [index])

  return (
    <div 
      ref={cardRef} 
      className="bg-slate-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
    >
      <div className="h-48 w-full overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs sm:text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-[#007DCC]" />
            {event.date} · {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-[#007DCC]" />
            {event.location}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-slate-800 leading-snug">{event.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-1">{event.excerpt}</p>
        <Link
          href={`/events/${event.id}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#007DCC] hover:gap-2.5 transition-all w-fit"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

const NewsnEvents = ({ events }) => {
  const headerRef = useRef(null)
  const upcomingSectionRef = useRef(null)
  const pastSectionRef = useRef(null)
  const upcomingTitleRef = useRef(null)
  const pastTitleRef = useRef(null)
  const upcomingCardsRef = useRef([])
  const pastCardsRef = useRef([])

  const upcomingEvents = events.filter((e) => e.type === 'upcoming');
  const pastEvents = events.filter((e) => e.type === 'past');

  // GSAP Animations
  useEffect(() => {
    // Header animation - fade in from bottom
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Upcoming section title animation - slide in from left
    gsap.fromTo(
      upcomingTitleRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: upcomingTitleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Past section title animation - slide in from left
    gsap.fromTo(
      pastTitleRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pastTitleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <EventBanner />
      <div className="min-h-screen bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div 
            ref={headerRef} 
            className="mb-14 text-center md:mb-16"
          >
            <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
              News & Events
            </span>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Stay Updated with HSMAN
            </h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base md:text-lg max-w-2xl mx-auto">
              From annual sales meets to community initiatives — catch up on
              what's coming next and what our members have been up to.
            </p>
          </div>

          {/* Upcoming Events Section */}
          <div ref={upcomingSectionRef} className="mb-16 sm:mb-20">
            <div 
              ref={upcomingTitleRef} 
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-10 rounded-full bg-[#007DCC]/10 flex items-center justify-center shrink-0">
                <CalendarClock size={20} className="text-[#007DCC]" />
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Upcoming Events</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Past Events Section */}
          <div ref={pastSectionRef}>
            <div 
              ref={pastTitleRef} 
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-10 rounded-full bg-[#007DCC]/10 flex items-center justify-center shrink-0">
                <CalendarCheck size={20} className="text-[#007DCC]" />
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Past Events</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  index={index + upcomingEvents.length} // Continue stagger from upcoming events
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsnEvents