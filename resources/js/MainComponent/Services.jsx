import { useState } from "react";
import {
  Handshake,
  Network,
  GraduationCap,
  Megaphone,
  Users,
} from "lucide-react";

const services = [
  {
    id: "networking",
    title: "Networking",
    icon: Handshake,
    description:
      "Connect with hospitality sales & marketing professionals across Nepal and build lasting industry relationships.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&auto=format&fit=crop&q=70",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    icon: Network,
    description:
      "Work together with peers from the same field to share strategies and grow the hospitality industry as one team.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&auto=format&fit=crop&q=70",
  },
  {
    id: "training",
    title: "Training",
    icon: GraduationCap,
    description:
      "Capacity-building sessions covering digital marketing, branding, and customer service for members.",
    image:
      "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=700&auto=format&fit=crop&q=70",
  },
  {
    id: "tourism",
    title: "Tourism Promotion",
    icon: Megaphone,
    description:
      "Promote Nepal as a premier destination through joint sales initiatives and marketing campaigns.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=70",
  },
  {
    id: "community",
    title: "Community Bond",
    icon: Users,
    description:
      "Build a strong bond within the hospitality field through shared events and community initiatives.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=70",
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId);

  return (
    <section className="w-full bg-gray-50 px-4 sm:px-10 lg:px-0 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit mb-5">
            Service
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
            What do we help
          </h2>
        </div>

        {/* Desktop: accordion strip */}
        <div className="hidden lg:flex w-full h-[560px] gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = service.id === activeId;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className={`relative rounded-2xl cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${
                  isActive ? "flex-[3.4]" : "flex-1 bg-white"
                }`}
              >
                {isActive ? (
                  <div className="w-full h-full flex flex-col justify-start bg-white rounded-2xl p-8 lg:p-10 animate-fadein overflow-y-auto">
                    <div className="flex items-center gap-3">
                      <Icon className="text-[#007dcc] shrink-0" size={30} strokeWidth={1.5} />
                      <h3 className="text-2xl font-semibold text-gray-900 whitespace-nowrap">
                        {service.title}
                      </h3>
                      <span className="flex-1 h-px bg-gray-300" />
                    </div>
                    <p className="text-gray-500 text-base mt-5 leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                    <a
                      href={`#${service.id}`}
                      className="inline-flex items-center gap-2 bg-[#007dcc] hover:bg-[#007dcc] transition-colors text-white font-semibold pl-2 pr-5 py-2.5 rounded-full mt-6 text-base w-fit"
                    >
                      <span className="w-7 h-7 rounded-full bg-white text-[#007dcc] flex items-center justify-center text-sm">
                        »
                      </span>
                      View Details
                    </a>
                    <div className="mt-6 w-full rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center py-8">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <Icon className="text-[#007dcc]" size={30} strokeWidth={1.5} />
                      <p
                        className="text-gray-700 text-base font-medium tracking-wide"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {service.title}
                      </p>
                    </div>
                    <span className="w-px flex-1 max-h-24 bg-gray-200 mt-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet: simple stacked accordion */}
        <div className="lg:hidden flex flex-col gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = service.id === activeId;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setActiveId(isActive ? null : service.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="text-[#007dcc]" size={28} strokeWidth={1.5} />
                    <span className="text-gray-900 font-medium text-lg">
                      {service.title}
                    </span>
                  </span>
                  <span
                    className={`text-[#007dcc] text-2xl transition-transform duration-300 ${
                      isActive ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 flex flex-col sm:flex-row gap-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full sm:w-32 h-32 rounded-xl object-cover shrink-0"
                      />
                      <div>
                        <p className="text-gray-500 text-base leading-relaxed">
                          {service.description}
                        </p>
                        <a
                          href={`#${service.id}`}
                          className="inline-flex items-center gap-2 bg-[#007dcc] hover:bg-[#007dcc] transition-colors text-white font-semibold pl-2 pr-5 py-2.5 rounded-full mt-4 text-base w-fit"
                        >
                          <span className="w-7 h-7 rounded-full bg-white text-[#007dcc] flex items-center justify-center text-sm">
                            »
                          </span>
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadein {
          animation: fadein 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}