// Increased icon size from w-5 h-5 to w-7 h-7 (and w-8 h-8 for social icons)
const iconClassName = "w-7 h-7 text-gray-700";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClassName}>
      <path d="M14 8.5V6.75c0-.5.4-.9.9-.9h1.6V3h-2.4C11.4 3 10 4.6 10 7.1v1.4H8v3h2V21h3.2v-9.5h2.4l.4-3H13.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClassName}>
      <path d="M6.5 8.8H3.7V20h2.8V8.8ZM5.1 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 5.1 4ZM20.3 13.7c0-3-1.6-5-4.2-5-1.3 0-2.3.6-2.9 1.5V8.8h-2.8V20h2.8v-6.1c0-1.7.9-2.7 2.2-2.7s2 1 2 2.7V20h2.9v-6.3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 px-4 sm:px-10 lg:px-12 pt-6 pb-0">
      <div className="">

        {/* Top bar - increased text size */}
        <div className="bg-white rounded-2xl px-6 sm:px-8 py-5 flex items-center justify-between">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
            Let's Build Nepal's Hospitality Network Together
          </h2>
          <a
            href="#contact"
            className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#007DCC"
              strokeWidth="2"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        {/* Main footer content */}
        <div className="mt-4 flex flex-col lg:flex-row gap-4">
          
          {/* Left card: logo + tagline - increased image size */}
          <div className="bg-white rounded-2xl px-6 sm:px-8 py-8 sm:py-10 lg:w-1/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:self-stretch">
            <a href="#home" className="flex items-center gap-1 text-2xl font-bold w-fit">
              <img src="/images/logo.jpeg" alt="logo" className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48" />
            </a>
          </div>

          {/* Right card: nav columns + social icons + contact/copyright */}
          <div className="bg-white rounded-2xl px-6 sm:px-8 py-8 sm:py-10 lg:w-3/4 flex flex-col justify-between gap-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:items-center sm:justify-between">
              
              {/* Navigation links - increased text size */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="flex flex-col gap-3 text-base sm:text-lg">
                  <a href="#home" className="text-[#007DCC] font-medium">
                    Home
                  </a>
                  <a href="#about" className="text-gray-600 hover:text-[#007DCC] transition-colors">
                    About Us
                  </a>
                  <a href="#gallery" className="text-gray-600 hover:text-[#007DCC] transition-colors">
                    Gallery
                  </a>
                </div>
                <div className="flex flex-col gap-3 text-base sm:text-lg">
                  <a href="#membership" className="text-gray-600 hover:text-[#007DCC] transition-colors">
                    Membership
                  </a>
                  <a href="#programs" className="text-gray-600 hover:text-[#007DCC] transition-colors">
                    Programs
                  </a>
                  <a href="#contact" className="text-gray-600 hover:text-[#007DCC] transition-colors">
                    Contact
                  </a>
                </div>
                <div className="flex flex-col gap-3 text-base sm:text-lg">
                  <a href="#events" className="text-gray-600 hover:text-[#007DCC] transition-colors">
                    News & Events
                  </a>
                  <a href="#directory" className="text-gray-600 hover:text-[#007DCC] transition-colors">
                    Member Directory
                  </a>
                  <a href="#committee" className="text-gray-600 hover:text-[#007DCC] transition-colors">
                    Executive Committee
                  </a>
                </div>
              </div>

              {/* Social icons - increased size */}
              <div className="flex gap-3 shrink-0">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#instagram"
                  className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#linkedin"
                  className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>

            {/* Contact + copyright - increased text size */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm sm:text-base text-gray-500">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
                <span>hsman.2078@gmail.com</span>
                <span>Kathmandu, Nepal</span>
              </div>
              <span>© HSMAN 2026. All rights reserved.</span>
            </div>
          </div>
        </div>

        {/* Giant watermark text - kept as is but you can increase if needed */}
        <div className="overflow-hidden mt-4 select-none pointer-events-none">
          <h1
            className="text-center font-extrabold leading-none text-[24vw] sm:text-[14vw] lg:text-[25vw] whitespace-nowrap"
            style={{
              background: "linear-gradient(180deg, #007DCC 0%, rgba(0,125,204,0) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            HSMAN 
          </h1>
        </div>

      </div>
    </footer>
  );
}