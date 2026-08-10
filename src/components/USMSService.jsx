import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";

const freeTier = [
  "Fees Management (Offline & Online)",
  "Employee Management",
  "Salary Management",
  "Attendance (Online)",
  "Notice (300 per year)",
  "Instruction (350/year/teacher)",
  "Doubt Groups & Discussion (20–30 chats visible)",
  "Material Upload (2 MB/doc)",
  "Website Integration (CMS)",
  "Leave Management",
  "Id Card (Fixed templates)",
  "Class & Teacher Timetable",
  "Alumni Database (up to 2 years)",
  "Easy Class Promotion",
];

const premiumTier = [
  "Homework Management",
  "Exam Management & Real-Time Tracking",
  "Vehicle Route Tracking",
  "AI Integration",
  "WhatsApp Integration",
  "Id Card (Customized templates)",
  "Material Upload (25 MB/file) — Multimedia supported",
  "Alumni Database (lifetime)",
];

const subscriptions = [
  {
    name: "Starter Plan",
    members: "Upto 250 Members",
    bestFor: "Small schools taking their first step into digital management.",
    highlight: false,
  },
  {
    name: "Growth Plan",
    members: "Upto 500 Members",
    bestFor: "Mid-sized schools ready for a fully integrated management system.",
    highlight: true,
  },
  {
    name: "Enterprise Plan",
    members: "Upto 1000 Members",
    bestFor: "Large institutions needing full-scale operations and analytics.",
    highlight: false,
  },
];

export default function USMSService() {
  return (
    <section
      id="usms-service"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef2ff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Service 02
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-3">
            USMS — School ERP System
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A Unified School Management System that connects administration, teachers, students,
            and parents on one powerful platform.
          </p>
        </div>

        {/* Free vs Premium features */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Free Tier */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Free Tier
              </span>
              <span className="text-slate-400 text-sm">Included in all plans</span>
            </div>
            <ul className="space-y-3">
              {freeTier.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                  <FaCheck className="text-indigo-500 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Tier */}
          <div
            className="rounded-3xl p-8 text-white shadow-lg"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
                <FaStar className="text-yellow-700" /> Premium Tier
              </span>
              <span className="text-indigo-300 text-sm">Advanced features</span>
            </div>
            <ul className="space-y-3">
              {premiumTier.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-indigo-100">
                  <FaCheck className="text-cyan-300 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Subscription Plans
          </h3>
          <p className="text-slate-500 mt-2 text-sm">
            Choose the plan that fits your school's size — contact us for pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptions.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.highlight
                  ? "border-transparent text-white"
                  : "bg-white border-slate-200 text-slate-800"
              }`}
              style={
                plan.highlight
                  ? { background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)" }
                  : {}
              }
            >
              {plan.highlight && (
                <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3">
                  Most Popular
                </div>
              )}
              <div className="font-bold text-lg mb-1">{plan.name}</div>
              <div className={`text-xl font-extrabold mb-3 ${plan.highlight ? "text-cyan-300" : "text-indigo-900"}`}>
                {plan.members}
              </div>
              <p className={`text-sm mb-6 leading-relaxed ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}>
                {plan.bestFor}
              </p>
              <a
                href="tel:+917815040068"
                className={`block w-full text-center text-sm transition ${
                  plan.highlight ? "text-indigo-300 hover:text-white" : "text-slate-500 hover:text-indigo-700"
                }`}
              >
                📞 +91 78150 40068
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
