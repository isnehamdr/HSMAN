// import { useState, useEffect } from "react";
// import { Phone, Mail, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { label: "Home", href: "#home", active: true },
//     { label: "About Us", href: "#about" },
//     { label: "Member", href: "#member" },
//     { label: "Agencies", href: "#agencies" },
//     { label: "Gallery", href: "#gallery" },
//     { label: "Our Team", href: "#team" },
//     { label: "FAQ", href: "#faq" },
//     { label: "News & Events", href: "#contact" },
//   ];

//   // Lock background scroll when hamburger menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   // Track scroll direction: show bg when scrolling up (and not at top), hide when scrolling down
//   // Navbar itself stays fixed/visible at all times - only background/color changes
//   useEffect(() => {
//     let lastY = window.scrollY;

//     const handleScroll = () => {
//       const currentY = window.scrollY;

//       if (currentY <= 10) {
//         setScrolled(false);
//       } else if (currentY < lastY) {
//         setScrolled(true);
//       } else if (currentY > lastY) {
//         setScrolled(false);
//       }

//       lastY = currentY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
//         scrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       {/* Main nav - hamburger left, logo centered, contact right */}
//       <div className="relative flex items-center justify-between px-3 sm:px-6 lg:px-12 py-2.5 sm:py-3 lg:py-4 min-h-[64px] sm:min-h-[72px] lg:min-h-[88px]">
//         {/* Hamburger menu toggle (left) */}
//         <button
//           className={`relative z-50 shrink-0 p-1.5 sm:p-2 rounded-full transition-colors ${
//             menuOpen ? "text-[#007DCC]" : scrolled ? "text-[#007DCC]" : "text-white"
//           }`}
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? <X size={22} className="sm:w-6 sm:h-6" /> : <Menu size={22} className="sm:w-6 sm:h-6" />}
//         </button>

//         {/* Logo - always centered, scales down on small screens */}
//         <a
//           href="#home"
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center shrink-0"
//         >
//           <img
//             src="/images/logo.jpeg"
//             alt="Logo"
//             className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover transition-all duration-300"
//           />
//         </a>

//         {/* Contact Us button (right, always filled bg-[#007dcc]) - visible from tablets up */}
//         <a
//           href="#contact"
//           className="hidden md:flex items-center gap-2 bg-[#007dcc] hover:bg-[#0069ad] transition-colors text-white font-semibold pl-2 pr-4 lg:pr-5 py-1.5 lg:py-2 rounded-full text-sm lg:text-lg shrink-0 whitespace-nowrap"
//         >
//           <span className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-xs shrink-0">
//             »
//           </span>
//           Contact Us
//         </a>

//         {/* Small-screen contact icon fallback - also filled bg-[#007dcc] */}
//         <a
//           href="#contact"
//           className="flex md:hidden items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#007dcc] text-white shrink-0"
//           aria-label="Contact Us"
//         >
//           <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
//         </a>
//       </div>

//       {/* Overlay backdrop - blocks interaction with rest of page */}
//       <div
//         className={`fixed inset-0 bg-black/50 z-30 transition-opacity ease-in-out ${
//           menuOpen ? "opacity-100 pointer-events-auto duration-500" : "opacity-0 pointer-events-none duration-500"
//         }`}
//         onClick={() => setMenuOpen(false)}
//         aria-hidden="true"
//       />

//       {/* Slide-in menu panel with all nav items - fully responsive width */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[85%] sm:w-80 max-w-[320px] bg-white z-40 shadow-2xl transform overflow-y-auto transition-transform ease-in-out duration-500 ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="px-5 sm:px-6 pb-6 pt-5 sm:pt-6 flex flex-col gap-1 text-gray-700 font-medium">
//           <div className="flex items-center justify-between mb-5 sm:mb-6">
//             <img src="/images/logo.jpeg" alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="text-gray-500 hover:text-[#007DCC] p-1"
//               aria-label="Close menu"
//             >
//               <X size={22} />
//             </button>
//           </div>

//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//               className={`py-2.5 sm:py-3 px-2 rounded-lg text-base sm:text-lg transition-colors hover:bg-blue-50 hover:text-[#007DCC] ${
//                 link.active ? "text-[#007DCC]" : ""
//               }`}
//             >
//               {link.label}
//             </a>
//           ))}

//           <a
//             href="#contact"
//             onClick={() => setMenuOpen(false)}
//             className="flex items-center justify-center gap-2 bg-[#007DCC] text-white font-semibold px-5 py-2.5 rounded-full mt-3 sm:mt-4 text-sm sm:text-base"
//           >
//             Contact Us
//           </a>

//           <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-gray-100 text-xs sm:text-sm text-gray-500">
//             <a href="tel:+984-5667008" className="flex items-center gap-2 break-all">
//               <Phone size={16} className="text-[#007DCC] shrink-0" /> +984-5667008
//             </a>
//             <a href="mailto:hsman.2078@gmail.com" className="flex items-center gap-2 break-all">
//               <Mail size={16} className="text-[#007DCC] shrink-0" /> hsman.2078@gmail.com
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "About Us", href: "#about" },
    { label: "Member", href: "#member" },
    { label: "Agencies", href: "#agencies" },
    { label: "Gallery", href: "#gallery" },
    { label: "Our Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
    { label: "News & Events", href: "#contact" },
  ];

  // Lock background scroll when hamburger menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Track scroll direction: navbar slides out of view when scrolling down,
  // slides back in with a solid background when scrolling up.
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (currentY <= 10) {
        // At the very top -> always visible and transparent
        setScrolled(false);
        setHidden(false);
      } else if (delta > 5) {
        // Scrolling down -> hide navbar
        setHidden(true);
      } else if (delta < -5) {
        // Scrolling up -> reveal navbar with background
        setHidden(false);
        setScrolled(true);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 ease-in-out ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        } ${hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        {/* Main nav - hamburger left, logo centered, contact right */}
        <div className="relative flex items-center justify-between px-3 sm:px-6 lg:px-12 py-2.5 sm:py-3 lg:py-4 min-h-[64px] sm:min-h-[72px] lg:min-h-[88px]">
          {/* Hamburger menu toggle (left) */}
          <button
            className={`relative z-50 shrink-0 p-1.5 sm:p-2 rounded-full transition-colors ${
              menuOpen ? "text-[#007DCC]" : scrolled ? "text-[#007DCC]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} className="sm:w-6 sm:h-6" /> : <Menu size={22} className="sm:w-6 sm:h-6" />}
          </button>

          {/* Logo - always centered, scales down on small screens */}
          <a
            href="#home"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center shrink-0"
          >
            <img
              src="/images/logo.jpeg"
              alt="Logo"
              className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover transition-all duration-300"
            />
          </a>

          {/* Contact Us button (right, always filled bg-[#007dcc]) - visible from tablets up */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-[#007dcc] hover:bg-[#0069ad] transition-colors text-white font-semibold pl-2 pr-4 lg:pr-5 py-1.5 lg:py-2 rounded-full text-sm lg:text-lg shrink-0 whitespace-nowrap"
          >
            <span className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-xs shrink-0">
              »
            </span>
            Contact Us
          </a>

          {/* Small-screen contact icon fallback - also filled bg-[#007dcc] */}
          <a
            href="#contact"
            className="flex md:hidden items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#007dcc] text-white shrink-0"
            aria-label="Contact Us"
          >
            <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>
      </header>

      {/* Overlay backdrop - blocks interaction with rest of page.
          Kept outside <header> so it's not affected by the header's translate-y. */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto duration-500" : "opacity-0 pointer-events-none duration-500"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in menu panel with all nav items - fully responsive width.
          Kept outside <header> so it's not affected by the header's translate-y. */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-80 max-w-[320px] bg-white z-50 shadow-2xl transform overflow-y-auto transition-transform ease-in-out duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-5 sm:px-6 pb-6 pt-5 sm:pt-6 flex flex-col gap-1 text-gray-700 font-medium">
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <img src="/images/logo.jpeg" alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-500 hover:text-[#007DCC] p-1"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {navLinks.map((link) => (
           <a 
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-2.5 sm:py-3 px-2 rounded-lg text-base sm:text-lg transition-colors hover:bg-blue-50 hover:text-[#007DCC] ${
                link.active ? "text-[#007DCC]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}

<a          
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#007DCC] text-white font-semibold px-5 py-2.5 rounded-full mt-3 sm:mt-4 text-sm sm:text-base"
          >
            Contact Us
          </a>

          <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-gray-100 text-xs sm:text-sm text-gray-500">
            <a href="tel:+984-5667008" className="flex items-center gap-2 break-all">
              <Phone size={16} className="text-[#007DCC] shrink-0" /> +984-5667008
            </a>
            <a href="mailto:hsman.2078@gmail.com" className="flex items-center gap-2 break-all">
              <Mail size={16} className="text-[#007DCC] shrink-0" /> hsman.2078@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}