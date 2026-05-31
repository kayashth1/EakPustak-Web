import React from "react";
import { FaGlobe, FaServer, FaArrowRight } from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className="text-2xl" />,
    label: "School Website",
    desc: "Mobile-responsive, SEO-optimised school websites built and hosted end-to-end.",
    accent: "from-blue-500 to-cyan-400",
    href: "#website-service",
  },
  {
    icon: <FaServer className="text-2xl" />,
    label: "USMS — School ERP",
    desc: "Manage attendance, fees, exams, staff and more from one unified platform.",
    accent: "from-indigo-500 to-purple-500",
    href: "#usms-service",
  },
];

const stats = [
  { value: "20+", label: "Core Facilities" },
  { value: "NEP 2020", label: "Compliant" },
  { value: "6 Months", label: "Free Support" },
  { value: "24 / 7", label: "Assistance" },
];

export default function ServicesHero() {
  return (
    <section className="bg-white overflow-hidden">

      {/* ── Top band ── */}
      <div
        className="relative pt-16 pb-32 text-white"
        style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #1e1b4b 100%)" }}
      >
        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-400/10 blur-2xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — copy */}
          <div>
            <span className="inline-block bg-white/10 border border-white/20 text-indigo-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              What We Offer
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              End-to-End{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <br />for Indian Schools
            </h1>

            <p className="text-indigo-200 text-lg leading-relaxed mb-8 max-w-lg">
              Whether you need a school website or a full management system —
              EAK Pustak has a solution built specifically for your institution.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#website-service"
                className="bg-white text-indigo-900 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition shadow-lg"
              >
                Explore Services
              </a>
              <a
                href="/#Contact"
                className="border border-white/30 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Talk to Us
              </a>
            </div>
          </div>

          {/* RIGHT — service cards, vertically centred by parent items-center */}
          <div className="grid gap-4">
            {services.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-5
                           flex items-center gap-4 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent}
                                 flex items-center justify-center text-white shadow-lg`}>
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white text-sm">{s.label}</div>
                  <div className="text-indigo-300 text-xs mt-0.5 line-clamp-1">{s.desc}</div>
                </div>
                <FaArrowRight className="text-white/40 group-hover:text-white group-hover:translate-x-1
                                         transition-all duration-200 shrink-0 text-xs" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats strip (bridges the two backgrounds) ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-10 md:-mt-14">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {stats.map((s) => (
            <div key={s.label} className="py-5 px-6 text-center">
              <div className="text-2xl font-extrabold text-indigo-900">{s.value}</div>
              <div className="text-slate-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* spacer so the next section starts below the strip */}
      <div className="h-12" />
    </section>
  );
}
