import React from "react";
import { FaShieldAlt, FaTabletAlt, FaGraduationCap, FaBolt } from "react-icons/fa";

const stats = [
  { icon: <FaTabletAlt />, label: "10-inch Display", sub: "Eye-comfort panel" },
  { icon: <FaShieldAlt />, label: "Locked OS", sub: "School-controlled apps" },
  { icon: <FaGraduationCap />, label: "NEP 2020", sub: "Curriculum aligned" },
  { icon: <FaBolt />, label: "Long Battery", sub: "Full school-day use" },
];

const ProductHero = () => {
  return (
    <section
      className="pt-16 pb-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #1e1b4b 100%)",
      }}
    >
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-indigo-500/30 border border-indigo-400/40 text-indigo-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            The Device
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Eak Pustak Tablet
            </span>
          </h1>
          <p className="text-indigo-200 text-lg leading-relaxed">
            Purpose-built for Indian classrooms — distraction-free, durable, and
            deeply integrated with the school ecosystem. Available in Standard
            and Premium editions.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-4 mb-16">
          <a
            href="#Contact"
            className="bg-white text-indigo-900 px-7 py-3 rounded-lg font-bold hover:bg-indigo-50 transition shadow-lg"
          >
            Request a Demo
          </a>
          <a
            href="#Product"
            className="border border-white/30 text-white px-7 py-3 rounded-lg font-bold hover:bg-white/10 transition"
          >
            Compare Editions ↓
          </a>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/15 transition"
            >
              <div className="text-cyan-300 text-2xl mb-3">{s.icon}</div>
              <div className="font-bold text-sm">{s.label}</div>
              <div className="text-indigo-300 text-xs mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
