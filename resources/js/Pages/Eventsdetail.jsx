import React from "react";
import { Clock, MapPin, ArrowLeft, Share2, CalendarDays } from "lucide-react";

// In a real app this would come from routing params + a data source / API.
// For now it's seeded with one example event; swap `event` for the matched
// record from your events list based on the route param (e.g. event id/slug).
const event = {
  id: "sales-meet-2026",
  image:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1400&auto=format&fit=crop&q=80",
  date: "August 22, 2026",
  time: "10:00 AM – 4:00 PM",
  location: "Hotel Yak & Yeti, Kathmandu",
  title: "HSMAN Annual Sales Meet 2026",
  category: "Networking",
  description:
    "The HSMAN Annual Sales Meet is our flagship gathering, bringing together hospitality sales and marketing professionals from hotels, resorts, travel agencies, and allied businesses across Nepal. This year's edition focuses on building stronger cross-property partnerships and sharing strategies for the upcoming tourist season.",
  agenda: [
    { time: "10:00 AM", item: "Registration & welcome coffee" },
    { time: "10:30 AM", item: "Opening remarks from HSMAN leadership" },
    { time: "11:00 AM", item: "Panel: Trends shaping Nepal's hospitality sales" },
    { time: "1:00 PM", item: "Networking lunch" },
    { time: "2:30 PM", item: "Breakout roundtables by sector" },
    { time: "4:00 PM", item: "Closing remarks & photo session" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=70",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=70",
    "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=500&auto=format&fit=crop&q=70",
  ],
};

export default function EventDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero image */}
      <section className="relative w-full h-[45vh] sm:h-[55vh] min-h-[320px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        <div className="relative h-full flex flex-col justify-between px-4 sm:px-10 lg:px-16 py-6 sm:py-8">
          <a
            href="/news-events"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium w-fit"
          >
            <ArrowLeft size={16} />
            Back to Events
          </a>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#007DCC] text-white text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4">
              {event.category}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-0 py-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm sm:text-base text-gray-600">
          <span className="flex items-center gap-2">
            <CalendarDays size={18} className="text-[#007DCC]" />
            {event.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={18} className="text-[#007DCC]" />
            {event.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={18} className="text-[#007DCC]" />
            {event.location}
          </span>
          <button className="ml-auto inline-flex items-center gap-2 text-[#007DCC] font-medium hover:underline">
            <Share2 size={16} />
            Share
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-0 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
        {/* Description + agenda */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              About This Event
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {event.description}
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5">
              Agenda
            </h2>
            <div className="flex flex-col border-t border-gray-200">
              {event.agenda.map((slot) => (
                <div
                  key={slot.item}
                  className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6 py-4 border-b border-gray-200"
                >
                  <span className="text-[#007DCC] font-semibold text-sm sm:w-28 shrink-0">
                    {slot.time}
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    {slot.item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {event.gallery && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5">
                Gallery
              </h2>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {event.gallery.map((src) => (
                  <div key={src} className="rounded-xl overflow-hidden">
                    <img
                      src={src}
                      alt="Event gallery"
                      className="w-full h-24 sm:h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: registration card */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-[#007DCC]/5 border border-[#007DCC]/15 rounded-2xl p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Attend This Event
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-[#007DCC]" />
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[#007DCC]" />
                {event.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#007DCC]" />
                {event.location}
              </span>
            </div>
            <a
              href="#rsvp"
              className="flex items-center justify-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] transition-colors text-white font-semibold py-3 rounded-full text-sm sm:text-base w-full"
            >
              RSVP Now
            </a>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Open to all HSMAN members. Non-members welcome to inquire.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}