import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&auto=format&fit=crop&q=70",
    quote:
      "Being part of HSMAN has opened doors to partnerships I never imagined. The networking events are truly valuable for hotel sales teams.",
    name: "Sanjeev Tuladhar",
    role: "Vice President, HSMAN",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&auto=format&fit=crop&q=70",
    quote:
      "The training sessions on digital marketing helped our property completely rethink how we approach guest outreach.",
    name: "Laxmi Shrestha",
    role: "Secretary, HSMAN",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=70",
    quote:
      "HSMAN brought our entire industry closer together. The Sales Meet is now the highlight of our year.",
    name: "Ganesh Budhathoki",
    role: "Treasurer, HSMAN",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=70",
    quote:
      "From the blood donation drive to the Meet & Greet programs, HSMAN genuinely gives back to the community.",
    name: "Anjani Thapa",
    role: "Executive Member, HSMAN",
  },
];

export default function Testimonial() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="w-full font-sans py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <span className="inline-flex items-center gap-2 border border-gray-200 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit mb-4">
              Testimonial
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
              What our Members Say?
            </h2>
          </div>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
            Hear directly from HSMAN members about how the association has
            helped them build connections, grow their skills, and give back
            to communities across Nepal.
          </p>
        </div>
      </div>

      {/* Infinite auto-scrolling carousel */}
      <div className="relative w-full">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7 w-[320px] sm:w-[420px] shrink-0"
            >
              {/* Avatar + quote icon */}
              <div className="flex items-center justify-between">
                {/* <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                /> */}
                <span className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center">
                  <Quote size={16} fill="white" />
                </span>
              </div>

              {/* Quote text */}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-5">
                {t.quote}
              </p>

              <div className="h-px bg-gray-200 my-5" />

              {/* Name + rating */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gray-900 text-gray-900"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}