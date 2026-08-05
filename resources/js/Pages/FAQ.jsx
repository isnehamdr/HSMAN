import React, { useState } from "react";
import { Plus } from "lucide-react";
import FAQBanner from "@/MainComponent/FAQBanner";

const faqs = [
  {
    question: "What is HSMAN?",
    answer:
      "HSMAN (Hospitality Sales and Marketing Association Nepal) is a platform that brings together hospitality sales and marketing professionals from hotels, resorts, travel agencies, and allied businesses across Nepal to network, collaborate, and grow the industry together.",
  },
  {
    question: "Who can become a member of HSMAN?",
    answer:
      "Any hospitality sales, marketing, or business development professional working in hotels, resorts, travel agencies, airlines, or allied hospitality businesses in Nepal is welcome to apply for membership.",
  },
  {
    question: "How do I join HSMAN?",
    answer:
      "You can apply for membership by reaching out through our contact page or attending one of our upcoming events. Our executive committee reviews applications and welcomes new members regularly.",
  },
  {
    question: "What kind of events does HSMAN organize?",
    answer:
      "We host annual sales meets, networking mixers, training workshops on digital marketing and customer service, and community initiatives such as blood donation drives — all designed to strengthen the hospitality community.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "Membership details, including any applicable fees, are shared during the application process. Reach out to our team for the most current information.",
  },
  {
    question: "Does HSMAN offer training and skill-building programs?",
    answer:
      "Yes. We regularly organize workshops covering digital marketing, branding, customer service, and revenue management, led by industry experts and experienced practitioners.",
  },
  {
    question: "How does HSMAN support Nepal's tourism industry?",
    answer:
      "HSMAN promotes Nepal as a premier travel destination through joint sales missions, collaborative marketing campaigns, participation in international travel fairs, and partnerships with tourism boards and government bodies.",
  },
  {
    question: "How can I stay updated on HSMAN news and events?",
    answer:
      "Visit our News & Events page for the latest updates, or follow our official social media channels for announcements on upcoming programs and initiatives.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <FAQBanner />

      <div className="w-full font-sans bg-white">
        {/* Header */}
        <section className="px-4 sm:px-10 lg:px-16 pt-32 sm:pt-32 pb-12 sm:pb-16 text-center">
          <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-6">
            FAQ
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 max-w-2xl mx-auto leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Everything you need to know about HSMAN, membership, and how we
            support Nepal's hospitality industry.
          </p>
        </section>

        {/* FAQ list + side image */}
        <section className="px-4 sm:px-10 lg:px-0 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Side image panel */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/logo.jpeg"
                  alt="HSMAN"
                  className="w-full h-auto object-cover bg-[#007DCC]/5"
                />
              </div>
              <div className="mt-6 bg-[#007DCC]/5 border border-[#007DCC]/15 rounded-2xl p-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Can't find what you're looking for? Our team is happy to
                  help with anything related to membership, events, or
                  partnerships.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#007DCC] font-medium text-sm mt-4 hover:underline"
                >
                  Get in touch →
                </a>
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="lg:col-span-8 flex flex-col border-t border-gray-200">
              {faqs.map((faq, index) => {
                const isOpen = index === openIndex;
                return (
                  <div key={faq.question} className="border-b border-gray-200">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left"
                    >
                      <span
                        className={`text-base sm:text-lg font-medium transition-colors ${
                          isOpen ? "text-[#007DCC]" : "text-gray-900"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#007DCC] text-white rotate-45"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <Plus size={16} />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-400 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed pb-5 sm:pb-6 pr-10">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-10 lg:px-16 pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto bg-[#007DCC] rounded-2xl px-6 sm:px-12 py-10 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Still have questions?
              </h2>
              <p className="text-white/80 text-sm sm:text-base mt-1">
                Reach out and our team will get back to you.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 transition-colors text-[#007DCC] font-semibold px-6 py-3 rounded-full text-sm sm:text-base whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
}