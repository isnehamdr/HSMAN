import EventBanner from '@/MainComponent/EventBanner'
import React from 'react'
import { Link } from '@inertiajs/react'
import { Clock, MapPin, ArrowRight, CalendarCheck, CalendarClock } from 'lucide-react'

function EventCard({ event }) {
  return (
    <div className="bg-slate-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
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
  const upcomingEvents = events.filter((e) => e.type === 'upcoming');
  const pastEvents = events.filter((e) => e.type === 'past');

  return (
    <>
      <EventBanner />
      <div className="min-h-screen bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center md:mb-16">
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

          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-full bg-[#007DCC]/10 flex items-center justify-center shrink-0">
                <CalendarClock size={20} className="text-[#007DCC]" />
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Upcoming Events</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-full bg-[#007DCC]/10 flex items-center justify-center shrink-0">
                <CalendarCheck size={20} className="text-[#007DCC]" />
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Past Events</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsnEvents