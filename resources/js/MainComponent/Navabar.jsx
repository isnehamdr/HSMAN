import { useState, useEffect } from "react";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "About Us", href: "#about" },
    { label: "Volunteer", href: "#volunteer" },
  ];

  // Lock background scroll/interaction when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="w-full border-b border-gray-200  ">
      {/* Top info bar */}
      <div className="flex bg-[#007dcc] flex-col md:flex-row md:items-center md:justify-between leading-relaxed px-4 sm:px-6 lg:px-12 py-2 md:py-3 border-b border-gray-100 text-[11px] sm:text-xs md:text-sm text-gray-500 gap-1.5 md:gap-0">
        <p className="tracking-[1px] md:tracking-[2px] text-center md:text-left text-white">
          WELCOME TO HOSPITALITY SALES & MARKETING ASSOCIATION NEPAL
        </p>
        <div className="flex items-center justify-center md:justify-end gap-4 md:gap-6 flex-wrap">
          <a href="tel:+984-5667008" className="flex items-center gap-1.5 md:gap-2  transition-colors">
            <Phone size={14} className="text-gray-200 shrink-0 md:w-4 md:h-4" />
            <span className="text-white">+984-5667008</span>
          </a>
          <a href="mailto:hsman.2078@gmail.com" className="flex items-center gap-1.5 md:gap-2  transition-colors">
            <Mail size={14} className="text-gray-200 shrink-0 md:w-4 md:h-4" />
            <span className="text-white">hsman.2078@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 lg:px-12 py-1 lg:py-2">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 text-2xl font-bold shrink-0">
          <img src="/images/logo2.jpeg" alt="Logo" className="w-16 h-16" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium text-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors hover:text-[#007DCC] ${
                link.active ? "text-[#007DCC]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setPageOpen(true)}
            onMouseLeave={() => setPageOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#007DCC] text-lg transition-colors">
              Page <ChevronDown size={20} />
            </button>
            {pageOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-20">
                <a href="#gallery" className="block px-4 py-2 text-md hover:bg-emerald-50 hover:text-[#007DCC]">
                  Gallery
                </a>
                <a href="#team" className="block px-4 py-2 text-md hover:bg-emerald-50 hover:text-[#007DCC]">
                  Our Team
                </a>
                <a href="#faq" className="block px-4 py-2 text-md hover:bg-emerald-50 hover:text-[#007DCC]">
                  FAQ
                </a>
              </div>
            )}
          </div>

          <a href="#contact" className="hover:text-[#007DCC] transition-colors">
          News & Events
          </a>
        </nav>

        {/* CTA button (desktop) */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 bg-[#007DCC] hover:bg-[#007DCC] transition-colors text-white font-semibold pl-2 pr-5 py-2 rounded-full text-lg"
        >
          <span className="w-7 h-7 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-xs">
            »
          </span>
         Contact Us
        </a>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-gray-700 relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Overlay backdrop - blocks interaction with rest of page */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-30 ${
          menuOpen
            ? "opacity-100 pointer-events-auto duration-1000"
            : "opacity-0 pointer-events-none duration-[1500ms]"
        } transition-opacity ease-in-out`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile slide-in menu panel (right to left open, left to right close) */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 max-w-[80%] bg-white z-40 shadow-2xl transform overflow-y-auto ${
          menuOpen
            ? "translate-x-0 duration-1000"
            : "translate-x-full duration-[1500ms]"
        } transition-transform ease-in-out`}
      >
        <div className="px-6 pb-6 pt-6 flex flex-col gap-4 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`${link.active ? "text-[#007DCC]" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
          <a href="#team" onClick={() => setMenuOpen(false)}>
            Our Team
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            News & Events
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#007DCC] text-white font-semibold px-5 py-2.5 rounded-full mt-2"
          >
          Contact Us
          </a>

          <div className="flex flex-col gap-2 pt-4 border-t border-gray-100 text-sm text-gray-500">
            <a href="tel:+984-5667008" className="flex items-center gap-2">
              <Phone size={16} className="text-[#007DCC]" /> +984-5667008
            </a>
            <a href="mailto:hsman.2078@gmail.com" className="flex items-center gap-2">
              <Mail size={16} className="text-[#007DCC]" /> hsman.2078@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}