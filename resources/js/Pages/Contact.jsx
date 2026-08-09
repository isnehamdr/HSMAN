import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import ContactBanner from "@/MainComponent/ContactBanner";

// Social Icons
const socialIconClassName = "w-[18px] h-[18px] text-white";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={socialIconClassName}>
      <path d="M14 8.5V6.75c0-.5.4-.9.9-.9h1.6V3h-2.4C11.4 3 10 4.6 10 7.1v1.4H8v3h2V21h3.2v-9.5h2.4l.4-3H13.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={socialIconClassName}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={socialIconClassName}>
      <path d="M6.5 8.8H3.7V20h2.8V8.8ZM5.1 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 5.1 4ZM20.3 13.7c0-3-1.6-5-4.2-5-1.3 0-2.3.6-2.9 1.5V8.8h-2.8V20h2.8v-6.1c0-1.7.9-2.7 2.2-2.7s2 1 2 2.7V20h2.9v-6.3Z" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+977 9764596097",
    href: "tel:+977-9764596097",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hsman.2078@gmail.com",
    href: "mailto:hsman.2078@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Kathmandu, Nepal",
    href: "#map",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) element.focus();
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setShowToast(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
<>
<ContactBanner/>

    <div className="w-full font-sans bg-white min-h-screen">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 max-w-sm w-full bg-green-50 border border-green-200 rounded-lg shadow-lg p-4 animate-in slide-in-from-top-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800">Message Sent!</p>
              <p className="text-sm text-green-700 mt-0.5">We'll get back to you soon.</p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="text-green-600 hover:text-green-800"
              aria-label="Dismiss notification"
            >
              <span className="text-xl leading-none">&times;</span>
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-16 pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-12 lg:pb-16 text-center">
        <span className="inline-flex items-center gap-2 border border-[#007DCC]/30 bg-[#007DCC]/5 text-[#007DCC] text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-4 sm:px-5 py-2 rounded-full mb-4 sm:mb-6">
          Contact Us
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-2xl mx-auto leading-tight">
          Let's Start a Conversation
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-3 sm:mt-4 max-w-xl mx-auto px-4">
          Questions about membership, events, or partnerships? Reach out and
          our team will get back to you shortly.
        </p>
      </section>

      {/* Contact info cards */}
      <section className="px-4 sm:px-6 lg:px-16 mb-8 sm:mb-12 lg:mb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center text-center gap-4 border border-gray-100 rounded-2xl px-4 sm:px-6 py-6 sm:py-8 hover:border-[#007DCC]/30 hover:bg-[#007DCC]/5 transition-all duration-300 hover:shadow-md"
              >
                <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#007DCC]/10 flex items-center justify-center group-hover:bg-[#007DCC]/20 transition-colors">
                  <Icon size={20} strokeWidth={1.5} className="text-[#007DCC] sm:w-6 sm:h-6" />
                </span>
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-gray-900 font-medium mt-1 text-sm sm:text-base">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Form + side info */}
      <section className="px-4 sm:px-6 lg:px-16 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#007DCC]/5 border border-[#007DCC]/15 rounded-2xl p-8 sm:p-10 text-center">
                <span className="w-14 h-14 rounded-full bg-[#007DCC] flex items-center justify-center mx-auto mb-5">
                  <Send size={22} className="text-white" />
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Thanks for reaching out — we'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#007DCC] hover:text-[#0066a8] font-medium text-sm transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={`border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#007DCC] focus:ring-[#007DCC]'} rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-all duration-200`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={`border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#007DCC] focus:ring-[#007DCC]'} rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-all duration-200`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                    className={`border ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#007DCC] focus:ring-[#007DCC]'} rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-all duration-200`}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us more..."
                    className={`border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#007DCC] focus:ring-[#007DCC]'} rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-all duration-200 resize-y min-h-[120px]`}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-[#007DCC] hover:bg-[#0066a8] disabled:bg-[#007DCC]/70 transition-colors text-white font-semibold px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base w-full sm:w-fit min-h-[48px]"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Side info panel - FIXED BACKGROUND ATTACHMENT */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden mb-6 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=70"
                alt="HSMAN community gathering"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                loading="lazy"
              />
            </div>

            {/* Fixed background attachment on the blue card */}
            <div 
              className="rounded-2xl p-6 sm:p-7 lg:p-8 text-white relative overflow-hidden"
              style={{
                backgroundImage: 'linear-gradient(135deg, #007DCC 0%, #005a94 100%)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-[#007DCC]/90 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-5">
                  Office Hours
                </h3>
                <div className="flex flex-col gap-3 text-white/90 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Sunday – Friday</span>
                    <span className="font-medium">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>

                <div className="h-px bg-white/20 my-6" />

                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
                    aria-label="Follow us on Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#instagram"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#linkedin"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
                    aria-label="Follow us on LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                </div>

                <div className="h-px bg-white/20 my-6" />

                <div className="text-white/80 text-sm">
                  <p className="font-medium text-white">Quick Response</p>
                  <p className="mt-1">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="px-4 sm:px-6 lg:px-16 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe
            title="HSMAN Location - Kathmandu, Nepal"
            src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed&z=13"
            className="w-full h-64 sm:h-72 lg:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>

    </>
  );
}