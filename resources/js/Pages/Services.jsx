import ServiceBanner from "@/MainComponent/ServiceBanner";
import React, { useEffect, useRef } from "react";
import {
  Handshake,
  Network,
  GraduationCap,
  Globe2,
  Calendar,
  BookOpen,
  Users,
  Megaphone,
  Award,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "networking",
    number: "01",
    icon: Handshake,
    title: "Networking",
    summary:
      "HSMAN brings together sales and marketing professionals from hotels, resorts, travel agencies, airlines, and allied hospitality businesses across Nepal.",
    description:
      "Through regular meetups, industry mixers, annual conferences, and member forums, HSMAN creates a platform where professionals can exchange contacts, discuss market trends, and build relationships that translate into real business opportunities. Whether you're a seasoned sales director or new to the industry, HSMAN's network connects you with the people shaping Nepal's hospitality sector.",
    points: [
      "Regular networking events and member mixers",
      "Annual conferences and industry gatherings",
      "A member directory to connect with peers by sector or specialty",
      "Opportunities to meet potential partners, clients, and collaborators",
    ],
  },
  {
    id: "collaboration",
    number: "02",
    icon: Network,
    title: "Collaboration",
    summary:
      "Beyond networking, HSMAN fosters active collaboration among its members — encouraging hoteliers, marketers, and sales professionals to work together rather than compete in isolation.",
    description:
      "Through joint committees, working groups, and shared best-practice sessions, members pool their expertise to solve common industry challenges, from seasonal demand fluctuations to evolving customer expectations. This collaborative spirit strengthens the entire hospitality ecosystem, ensuring that when one part of the industry succeeds, the whole community benefits.",
    points: [
      "Peer-to-peer knowledge sharing and strategy sessions",
      "Joint committees on industry-wide challenges",
      "Collaborative campaigns and cross-property initiatives",
      "A community-first approach to industry growth",
    ],
  },
  {
    id: "training",
    number: "03",
    icon: GraduationCap,
    title: "Training",
    summary:
      "HSMAN is committed to strengthening the skills of its members through ongoing capacity-building programs.",
    description:
      "These sessions cover essential and emerging areas of hospitality sales and marketing — including digital marketing strategies, brand positioning, customer service excellence, revenue management, and social media engagement. Led by industry experts and experienced practitioners, these trainings ensure that Nepal's hospitality professionals stay current with global best practices while adapting them to the local market context.",
    points: [
      "Workshops on digital marketing and social media strategy",
      "Branding and positioning masterclasses",
      "Customer service and guest experience training",
      "Guest sessions from industry experts and thought leaders",
      "Certificates or recognition for participation (if applicable)",
    ],
  },
  {
    id: "tourism-promotion",
    number: "04",
    icon: Globe2,
    title: "Tourism Promotion",
    summary:
      "As a unified voice for Nepal's hospitality sales and marketing community, HSMAN plays an active role in promoting Nepal as a premier travel and tourism destination.",
    description:
      "Through joint sales missions, collaborative marketing campaigns, participation in international travel fairs, and partnerships with government and tourism boards, HSMAN amplifies Nepal's appeal to travelers while giving individual members greater visibility and reach than they could achieve alone.",
    points: [
      "Joint sales missions and roadshows to key source markets",
      "Collaborative destination marketing campaigns",
      "Representation at international travel trade fairs",
      "Partnerships with tourism boards and government bodies",
      "Collective promotion of Nepal's hospitality offerings globally",
    ],
  },
];

const pointIcons = [Calendar, BookOpen, Users, Megaphone, Award];

export default function Services() {
  const headerRef = useRef(null);
  const servicesContainerRef = useRef(null);
  const serviceRefs = useRef([]);
  const pointRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Keep the horizontal slide distance small on mobile so left/right
    // content never gets pushed past the viewport edge (horizontal overflow).
    const isSmallScreen = window.innerWidth < 640;
    const xOffset = isSmallScreen ? 20 : 50;

    // Header animation - fade in from bottom
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate each service section
    serviceRefs.current.forEach((serviceEl, index) => {
      if (!serviceEl) return;

      const isEven = index % 2 === 1;
      const leftContent = serviceEl.querySelector('.service-left');
      const rightContent = serviceEl.querySelector('.service-right');

      // On small screens, left/right stack vertically anyway, so skip the
      // horizontal slide entirely there and just fade+rise in instead.
      const leftFrom = isSmallScreen
        ? { opacity: 0, y: 24 }
        : { opacity: 0, x: isEven ? xOffset : -xOffset };
      const rightFrom = isSmallScreen
        ? { opacity: 0, y: 24 }
        : { opacity: 0, x: isEven ? -xOffset : xOffset };

      // Left side animation - slide from left or right based on position
      gsap.fromTo(leftContent, leftFrom, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: serviceEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Right side animation - slide from opposite direction
      gsap.fromTo(rightContent, rightFrom, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: serviceEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate point items with stagger
    const pointItems = pointRefs.current.filter(el => el !== null);
    if (pointItems.length > 0) {
      gsap.fromTo(
        pointItems,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: servicesContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // CTA section animation - fade in with scale
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    // overflow-x-hidden clips any transient horizontal offset from the
    // x-axis GSAP tweens above so small screens never get horizontal scroll
    <div className="w-full font-sans bg-white overflow-x-hidden">
      <ServiceBanner />

      {/* Services list */}
      <section className="px-4 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div ref={servicesContainerRef} className="max-w-7xl mx-auto flex flex-col gap-20 sm:gap-28">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div
                ref={(el) => (serviceRefs.current[index] = el)}
                id={service.id}
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start scroll-mt-24"
              >
                {/* Left: number + icon + title */}
                <div
                  className={`service-left lg:col-span-4 flex flex-col gap-6 ${
                    isEven ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl sm:text-5xl font-bold text-[#007DCC]/15 tabular-nums">
                      {service.number}
                    </span>
                    <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#007DCC]/10 flex items-center justify-center shrink-0">
                      <Icon size={28} strokeWidth={1.5} className="text-[#007DCC]" />
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Right: description + points */}
                <div
                  className={`service-right lg:col-span-8 flex flex-col gap-8 ${
                    isEven ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed border-l-2 border-[#007DCC]/20 pl-5">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.points.map((point, i) => {
                      const PointIcon = pointIcons[i % pointIcons.length];
                      const pointIndex = index * service.points.length + i;
                      
                      return (
                        <div
                          key={point}
                          ref={(el) => (pointRefs.current[pointIndex] = el)}
                          className="flex items-start gap-3 bg-gray-50 hover:bg-[#007DCC]/5 rounded-xl px-4 py-4 transition-colors"
                        >
                          <span className="w-8 h-8 rounded-full bg-[#007DCC]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <PointIcon size={15} className="text-[#007DCC]" />
                          </span>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {point}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="px-4 sm:px-10 lg:px-16 pb-20 sm:pb-28"
      >
        <div className="max-w-7xl mx-auto bg-[#007DCC] rounded-2xl px-6 sm:px-12 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white max-w-xl">
            Ready to grow with Nepal's hospitality network?
          </h2>
          <a
            href="#membership"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 transition-colors text-[#007DCC] font-semibold px-7 py-3 rounded-full text-sm sm:text-base whitespace-nowrap"
          >
            Become a Member
          </a>
        </div>
      </section>
    </div>
  );
}