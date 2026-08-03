import AboutBanner from "@/MainComponent/AboutBanner";
import {
  Handshake,
  Target,
  Network,
  Globe2,
  Users,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";


const objectives = [
  {
    icon: Handshake,
    title: "Exchange & Collaboration",
    description:
      "Facilitating the exchange of information and fostering collaboration among different hospitality sales personalities.",
  },
  {
    icon: Target,
    title: "Member Success",
    description:
      "Assisting association members in achieving their organisation's aims and objectives.",
  },
  {
    icon: Network,
    title: "Networking Platform",
    description:
      "Creating an effective platform for members to network and work together.",
  },
  {
    icon: Globe2,
    title: "Tourism Promotion",
    description:
      "Championing the aim and purpose of promoting tourism in Nepal.",
  },
  {
    icon: Users,
    title: "Community Bonding",
    description:
      "Building a strong bond within the team, where members from the same field can know one another.",
  },
];

const stats = [
  { value: "300+", label: "Members" },
  { value: "15+", label: "Events Hosted" },
  { value: "5+", label: "Years of Impact" },
  { value: "1", label: "Shared Mission" },
];

export default function AboutPage() {
  return (
    <div className="w-full font-sans bg-white">
      <AboutBanner/>

      {/* Who we are */}
      <section className="px-4 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-[1.25]">
              A platform built by and for hospitality sales professionals
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-6">
              HSMAN was formed to give hospitality sales and marketing
              professionals across Nepal a shared home — a place to exchange
              ideas, support one another's goals, and work collectively
              toward a stronger tourism industry. From hotel sales teams to
              travel agencies, our members represent every corner of Nepal's
              hospitality landscape.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
              Through regular meet-ups, training sessions, and community
              initiatives, we help our members grow professionally while
              building genuine, lasting relationships within the field.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=70"
              alt="HSMAN members networking"
              className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto bg-[#007DCC] rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 px-6 sm:px-10 py-10 sm:py-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="border border-[#007DCC]/20 rounded-2xl p-8 sm:p-10">
            <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-6">
              <Target size={22} strokeWidth={1.5} className="text-[#007DCC]" />
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
              To unite hospitality sales and marketing professionals across
              Nepal, providing a platform for collaboration, learning, and
              mutual growth that strengthens the industry as a whole.
            </p>
          </div>

          <div className="border border-[#007DCC]/20 rounded-2xl p-8 sm:p-10">
            <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-6">
              <Globe2 size={22} strokeWidth={1.5} className="text-[#007DCC]" />
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
              A thriving, well-connected hospitality community that drives
              tourism growth in Nepal and positions the country as a leading
              destination on the global stage.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
              Our Objectives
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-2xl">
              What HSMAN stands for
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {objectives.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="border border-gray-100 rounded-2xl p-7 sm:p-8 hover:border-[#007DCC]/30 hover:bg-[#007DCC]/5 transition-colors"
                >
                  <span className="w-12 h-12 rounded-full bg-[#007DCC]/10 flex items-center justify-center mb-5">
                    <Icon size={22} strokeWidth={1.5} className="text-[#007DCC]" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline / journey */}
      <section className="px-4 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-2xl">
              Building momentum, one event at a time
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl">
              <Calendar size={22} className="text-[#007DCC]" />
              <h3 className="text-lg font-semibold text-gray-900">
                HSMAN Sales Meet
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our flagship annual gathering, bringing hospitality sales
                teams together to connect and share strategies.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl">
              <Award size={22} className="text-[#007DCC]" />
              <h3 className="text-lg font-semibold text-gray-900">
                Blood Donation Program
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Giving back to the community through organized donation
                drives with the Nepal Red Cross.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 sm:p-8 bg-[#007DCC]/5 rounded-2xl">
              <MapPin size={22} className="text-[#007DCC]" />
              <h3 className="text-lg font-semibold text-gray-900">
                Meet & Greet Programs
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Regular training and networking sessions held across
                Kathmandu, Pokhara, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-10 lg:px-16 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto bg-[#007DCC] rounded-2xl px-6 sm:px-12 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white max-w-xl">
            Ready to be part of Nepal's hospitality network?
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