import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

export default function AgencyBanner() {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-10 sm:pt-24 sm:pb-14 min-h-[460px]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/img1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
            Home / Agency
          </h1>
          
       
          {/* Optional: CTA Button */}
        
        </div>
      </div>
      
      {/* Decorative Logo Mark - Hidden on small screens */}
      
    </section>
  );
}