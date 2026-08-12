import React, { useState, useEffect } from 'react';

const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // WhatsApp click handler
  const handleWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '9779764596097';
    const message = 'Hello, I need assistance!';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="w-16 h-16 md:w-16 md:h-16 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <img 
          src="/images/w.png"
          alt="WhatsApp"
          className="w-12 h-12 md:w-16 md:h-16"
        />
      </button>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 md:w-12 md:h-12 rounded-full bg-[#007dcc] text-white shadow-lg transition-all duration-300 hover:bg-[#0066aa] hover:scale-110 flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg 
            className="w-6 h-6 md:w-7 md:h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Backtotop;