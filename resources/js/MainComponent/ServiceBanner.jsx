import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

export default function ServiceBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#007dcc]/80 pt-28 pb-10 sm:pt-24 sm:pb-14 ">
      {/* -pt-28+ reserves space for the transparent navbar sitting on top,
          so this section's own bg color shows through behind it instead of
          whatever is below the page (e.g. white) */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Left: title + breadcrumb */}
          <div className="flex flex-col items-start gap-5 sm:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">
              Services
            </h1>

            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm sm:text-base"
            >
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </Link>

              <ArrowRight size={16} className="text-[#007DCC] shrink-0" />

              <span className="text-[#007DCC] font-medium">Services</span>
            </nav>
          </div>

          {/* Right: decorative logo mark - INCREASED SIZE */}
          <div className="hidden sm:block shrink-0 w-32 md:w-40 lg:w-72 ">
            <img
              src="/images/coordination.png"
              alt="Logo Mark"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}