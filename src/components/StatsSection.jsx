import React from "react";
import { FaTabletAlt, FaHeadset, FaLayerGroup, FaUniversity } from "react-icons/fa";

const stats = [
  {
    icon: <FaUniversity className="text-3xl" />,
    value: "IIT (ISM)",
    label: "Dhanbad Initiative",
    accent: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: <FaTabletAlt className="text-3xl" />,
    value: "NEP 2020",
    label: "Compliant Device",
    accent: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FaLayerGroup className="text-3xl" />,
    value: "All-in-One",
    label: "Website · ERP · Tablet",
    accent: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: <FaHeadset className="text-3xl" />,
    value: "6 Months",
    label: "Free Post-Setup Support",
    accent: "bg-violet-50 text-violet-600",
  },
];

const steps = [
  {
    step: "01",
    title: "Choose a Plan",
    desc: "Pick the solution that fits your school — website, ERP, or the smart tablet.",
  },
  {
    step: "02",
    title: "We Set It Up",
    desc: "Our team handles the full onboarding, configuration, and training — zero hassle.",
  },
  {
    step: "03",
    title: "Go Live & Grow",
    desc: "Your school goes digital. 6 months of free support to ensure a smooth transition.",
  },
];

export default function StatsSection() {
  return (
    <>
      {/* ── Numbers bar ── */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition"
              >
                <div className={`w-14 h-14 rounded-2xl ${s.accent} flex items-center justify-center mb-4`}>
                  {s.icon}
                </div>
                <div className="text-xl font-extrabold text-slate-900">{s.value}</div>
                <div className="text-slate-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              How It Works
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Getting your school on the EAK Pustak ecosystem is simple — we handle the heavy lifting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-px bg-indigo-100" />

            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center relative z-10">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-extrabold text-white mb-5 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)" }}
                >
                  {s.step}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
