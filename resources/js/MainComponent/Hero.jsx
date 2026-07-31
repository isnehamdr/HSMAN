import { useState, useEffect } from "react";

const SLIDE_DURATION = 6000; // ms each image stays on screen (zoom completes within this time)

const heroImages = [
  "/images/hero-bg.jpeg",
  "/images/hero2-bg.jpeg",
  "/images/hero3-bg.jpeg",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] min-h-[560px] font-sans overflow-hidden">
      {/* Slideshow: each image zooms in over SLIDE_DURATION, then crossfades to the next */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-[1200ms] ease-in-out ${
            index === activeIndex ? "opacity-100 animate-hero-zoom" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${src}')`,
            animationDuration: `${SLIDE_DURATION}ms`,
            animationPlayState: index === activeIndex ? "running" : "paused",
          }}
        />
      ))}

      {/* Keyframes for the per-slide zoom motion */}
      <style>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.18);
          }
        }
        .animate-hero-zoom {
          animation-name: heroZoom;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-hero-zoom {
            animation: none;
          }
        }
      `}</style>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20" />

      {/* Top-left eyebrow */}
      <div className="relative h-full flex flex-col justify-between px-4 sm:px-10 lg:px-16 py-8 sm:py-10">
        <span className="text-black text-xs sm:text-sm font-semibold tracking-[3px] uppercase">
          {/* Hospitality Sales & Marketing */}
        </span>

        {/* Bottom content row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] max-w-xl">
            Your network,
            <br />
            built on hospitality
          </h1>

          {/* Description + CTA */}
          <div className="flex flex-col gap-4 max-w-sm">
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Join hospitality sales & marketing professionals across Nepal.
              Connect, collaborate, and grow the industry together.
            </p>
            <a
              href="#membership"
              className="inline-flex items-center justify-center gap-2 bg-[#007DCC] text-white hover:bg-gray-100 transition-colors  font-semibold px-6 py-3 rounded-md text-sm sm:text-base w-fit"
            >
              Become a member
            </a>
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="absolute bottom-6 right-6 sm:right-10 lg:right-16 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-[#007DCC]" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}