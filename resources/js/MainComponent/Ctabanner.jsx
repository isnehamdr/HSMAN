export default function CtaBanner() {
  return (
    <section className="w-full bg-gray-50 px-4 sm:px-10 lg:px-0 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gray-800 rounded-2xl overflow-hidden px-6 sm:px-10 lg:px-14 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Decorative subtle squares (hidden on mobile) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 opacity-40">
            <div className="flex flex-col gap-3 mt-8">
              <div className="w-16 h-16 bg-white/5 rounded-lg" />
              <div className="w-16 h-16 bg-white/5 rounded-lg" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-16 h-16 bg-white/5 rounded-lg" />
              <div className="w-16 h-16 bg-white/5 rounded-lg mt-8" />
            </div>
          </div>

          {/* Left: heading */}
          <div className="relative z-10 flex items-start gap-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-tight">
              Join Nepal's Hospitality
              <br />
              Network Today
            </h2>
            <span className="text-[#007DCC] mt-1 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </div>

          {/* Right: rotating badge button */}
          <a
            href="#membership"
            className="relative z-10 shrink-0 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center"
          >
            {/* Rotating text ring */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full animate-spin-slow"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
              </defs>
              <text fill="#9CA3AF" fontSize="16" letterSpacing="2">
                <textPath href="#circlePath" startOffset="0%">
                  JOIN NOW • JOIN NOW • JOIN NOW • JOIN NOW • JOIN NOW
                </textPath>
              </text>
            </svg>

            {/* Center circle */}
            <span className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#007DCC] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 12s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}