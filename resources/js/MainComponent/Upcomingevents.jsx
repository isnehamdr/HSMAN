import { useState } from "react";
import { Clock, MapPin } from "lucide-react";

const eventsByDay = {
  "Day 1": [
    {
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&auto=format&fit=crop&q=70",
      time: "10:00 AM",
      location: "Hotel Yak & Yeti, Kathmandu",
      title: "HSMAN Annual Sales Meet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&auto=format&fit=crop&q=70",
      time: "2:00 PM",
      location: "Pokhara Lakeside",
      title: "Meet & Greet with Hospitality Leaders",
    },
  ],
  "Day 2": [
    {
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=70",
      time: "9:00 AM",
      location: "Nepal Red Cross, Kathmandu",
      title: "Blood Donation Program",
    },
    {
      image:
        "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=700&auto=format&fit=crop&q=70",
      time: "1:00 PM",
      location: "Hotel Himalaya, Kathmandu",
      title: "Digital Marketing Training Workshop",
    },
  ],
  "Day 3": [
    {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&auto=format&fit=crop&q=70",
      time: "11:00 AM",
      location: "Soaltee Kathmandu",
      title: "Networking Breakfast for Members",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=70",
      time: "3:00 PM",
      location: "Bhrikutimandap, Kathmandu",
      title: "Promoting Nepal Tourism Panel",
    },
  ],
};

const days = ["Day 1", "Day 2", "Day 3"];

export default function UpcomingEvents() {
  const [activeDay, setActiveDay] = useState("Day 1");

  return (
    <section className="w-full font-sans px-4 sm:px-10 lg:px-0 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 border border-gray-200 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit mb-4">
              Upcoming Events
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
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
              Ready to Join Our Upcoming Events
            </h2>
          </div>

          {/* Day tabs */}
          <div className="flex items-center gap-3">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-2.5 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                  activeDay === day
                    ? "bg-[#007DCC] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {eventsByDay[activeDay].map((event) => (
            <div
              key={event.title}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full sm:w-52 h-44 sm:h-52 rounded-xl object-cover shrink-0"
              />

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700">
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-[#007DCC]" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#007DCC]" />
                    {event.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-3 leading-snug">
                  {event.title}
                </h3>

                <a
                  href="#event-details"
                  className="inline-flex items-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] transition-colors text-white font-semibold pl-2 pr-5 py-2.5 rounded-full mt-5 text-sm sm:text-base w-fit"
                >
                  <span className="w-7 h-7 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-xs">
                    »
                  </span>
                  Event Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}