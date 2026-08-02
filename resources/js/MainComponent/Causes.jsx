import { Clock } from "lucide-react";

const programs = [
  {
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&auto=format&fit=crop&q=70",
    tag: "Training",
    title: "Meet & Greet Program",
    description:
      "Capacity-building sessions on digital marketing, branding, and customer service for hospitality professionals.",
   
  },
];

export default function Programs() {
  return (
    <section className="w-full bg-gray-50 px-4 sm:px-10 lg:px-16 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit mb-4">
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
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
              Find Our Popular Programs
            </h2>
          </div>

          <a
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
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5"
            >
              {/* Image with tag */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-52 sm:h-56 object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#007DCC] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
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
                    href="#contact"
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