import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    date: "February 14, 2026",
    category: "Networking",
    title: "Building Stronger Bonds Across Nepal's Hospitality Industry",
    image: "/images/event2.jpeg",
  },
  {
    date: "February 17, 2026",
    category: "CSR",
    title: "HSMAN's Blood Donation Drive Brings the Community Together",
    image: "/images/g1.jpg",
  },
  {
    date: "February 19, 2026",
    category: "Training",
    title: "Digital Marketing Skills Every Hotel Sales Team Needs",
    image: "/images/event1.jpeg",
  },
];

export default function Blog() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation - fade in from left with slight rotation
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards animation - stagger with 3D flip effect
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          rotationX: 8,
          rotationY: 5,
          duration: 0.9,
          ease: "back.out(1.7)",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Image subtle scale on hover (non-GSAP, pure CSS alternative kept)
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gray-50 px-4 sm:px-10 lg:px-0 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div 
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit mb-4">
              Blog
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
              Read Our Latest Blog Posts
            </h2>
          </div>

          <a
            href="#blog"
            className="inline-flex items-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] transition-colors text-white font-semibold pl-2 pr-6 py-2.5 rounded-full w-fit shrink-0"
          >
            <span className="w-7 h-7 rounded-full bg-white text-[#007DCC] flex items-center justify-center text-xs">
              »
            </span>
            View All Blog
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <div
              key={post.title}
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3 leading-snug">
                {post.title}
              </h3>

              <a
                href="#read-more"
                className="inline-flex items-center gap-1.5 text-gray-900 font-medium text-sm mt-4 w-fit group"
              >
                Read more
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <div className="h-px bg-gray-200 mt-4 mb-4" />

              <div className="rounded-xl overflow-hidden mt-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 sm:h-48 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}