import React from "react";
import { FaCheck } from "react-icons/fa";

const websiteFeatures = [
  "Dynamic HomePage",
  "Vision & Mission",
  "Principal's Message",
  "School Highlights",
  "History & Affiliation",
  "Management Committee",
  "School Curriculum",
  "Classes Details",
  "Faculty Details",
  "Fee Structure Page (Optional)",
  "Events & Notice Board",
  "Dynamic Updates",
  "Photo Gallery",
  "Contact Page",
  "Google Map",
  "Call & WhatsApp Button",
  "Online Admission Inquiry",
  "Mobile Responsive Design",
  "Basic Search Engine Optimization",
  "High-Speed Hosting",
  "Chatbot Integration",
  "Optional UI Customization",
  "6-Month Free of cost service",
];

const plans = [
  {
    name: "Standard Plan",
    tag: null,
    bestFor: "Ideal for smaller schools getting online for the first time.",
    highlights: ["Upto 5 Pages", "Static Landing Page", "Email Support"],
    dark: false,
  },
  {
    name: "Premium Plan",
    tag: "Most Popular",
    bestFor: "Perfect for established schools that need dynamic, updatable content.",
    highlights: ["Upto 10 Pages", "Dynamic Features", "Call / WhatsApp Support"],
    dark: true,
  },
];

export default function WebsiteService() {
  return (
    <section id="website-service" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Service 01
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-3">
            School Website Designing
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A fully featured, mobile-responsive school website — built fast, hosted reliably,
            and maintained for the first 6 months free of cost.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Feature list */}
          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">
              Everything included in every plan
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {websiteFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                  <FaCheck className="text-blue-600 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing cards */}
          <div className="flex flex-col gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.dark
                    ? "text-white border-transparent"
                    : "bg-blue-50 border-blue-100 text-slate-800"
                }`}
                style={
                  plan.dark
                    ? { background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)" }
                    : {}
                }
              >
                {plan.tag && (
                  <span className="absolute top-5 right-6 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.tag}
                  </span>
                )}
                <div className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">
                  {plan.name}
                </div>
                <p className={`text-sm mb-5 leading-relaxed ${plan.dark ? "text-indigo-200" : "text-slate-500"}`}>
                  {plan.bestFor}
                </p>
                <ul className="space-y-2">
                  {plan.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <FaCheck className={plan.dark ? "text-cyan-300" : "text-blue-600"} />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+917815040068"
                  className={`mt-4 block w-full text-center text-sm transition ${
                    plan.dark ? "text-indigo-300 hover:text-white" : "text-slate-500 hover:text-indigo-700"
                  }`}
                >
                  📞 +91 78150 40068
                </a>
              </div>
            ))}
            <p className="text-xs text-slate-400 text-center px-2">
              * Other costs such as personal domain name &amp; maintenance cost after 6 months are not included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
