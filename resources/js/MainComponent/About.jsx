export default function About() {
  return (
    <section className="w-full  px-4 sm:px-10 lg:px-0 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Top row: badge + heading */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex items-center sm:items-start">
            <span className="inline-flex items-center gap-2 border border-gray-200 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit">
              Get to Know Us
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
          </div>

          <div className="hidden lg:block w-px bg-gray-200 self-stretch" />

          {/* Right: heading, paragraph, CTA */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-medium leading-[1.6] sm:leading-[1.5] lg:leading-[1.25] text-gray-900">
             HSMA Nepal brings together hospitality sales and marketing professionals across Nepal to strengthen connections, share knowledge, and create opportunities for growth. Through collaboration, networking, and industry engagement, we work to elevate hospitality standards and support the growth of tourism in Nepal.
            </h2>

            <p className="text-gray-500 text-sm sm:text-lg leading-relaxed mt-6 max-w-5xl">
            We are committed to building a stronger, more connected hospitality community through professional development, meaningful partnerships, and a shared vision for progress.
            </p>

            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-[#007dcc]  transition-colors text-white font-semibold pl-2 pr-6 py-2.5 rounded-full mt-8 w-fit"
            >
              <span className="w-7 h-7 rounded-full bg-white text-[#007dcc] flex items-center justify-center text-xs">
                »
              </span>
              More About Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mt-14 sm:mt-16" />

        {/* Stats row */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 pt-10 sm:pt-12 justify-items-left text-center">
          <div className="flex items-center justify-center sm:block">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-900">
                300+
              </p>
              <p className="text-gray-500 text-sm sm:text-base mt-2">
                 Members
              </p>
            </div>
          </div>
 
          <div className="flex items-center justify-center sm:block relative">
            <div className="hidden sm:block absolute -left-20 top-0 h-16 w-px bg-gray-200" />
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-900">
                11
              </p>
              <p className="text-gray-500 text-sm sm:text-base mt-2">
               Member Committee
              </p>
            </div>
          </div>
 
          <div className="flex items-center justify-center sm:block relative">
            <div className="hidden sm:block absolute -left-20 top-0 h-16 w-px bg-gray-200" />
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-900">
                60+
              </p>
              <p className="text-gray-500 text-sm sm:text-base mt-2">
                Industry Representatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}