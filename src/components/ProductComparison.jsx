import React from "react";

const Feature = ({ text, color = "text-white" }) => (
  <li className="flex items-start gap-2 text-l transition-all duration-300 hover:translate-x-1">
    <span className={`${color} mt-1 transition-transform duration-300 group-hover:scale-110`}>
      ✓
    </span>
    <span className="opacity-90">{text}</span>
  </li>
);

export default function ProductComparison() {
  return (
    <section id="Product" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* STANDARD VERSION */}
          <div className="group bg-blue-100 rounded-3xl p-6 shadow-sm border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Standard Version
            </h3>

            <div className="flex items-center justify-center mb-8 overflow-hidden">
              <img
                className="w-[60%] transition-transform duration-500 group-hover:scale-105"
                src="./standard_tab.png"
                alt=""
              />
            </div>

            <ul className="space-y-3 mb-6">
              <Feature color="text-blue-700" text="10-inch tablet with 4GB RAM and 64GB internal storage" />
              <Feature color="text-blue-700" text="Long-lasting battery with a durable, student-friendly build" />
              <Feature color="text-blue-700" text="Eye-comfort display designed for extended study sessions" />
              <Feature color="text-blue-700" text="4-month access to USMS Lite learning platform" />
              <Feature color="text-blue-700" text="Curriculum-aligned books from the default publisher" />
              <Feature color="text-blue-700" text="Full access to the digital library and learning resources" />
            </ul>
          </div>

          {/* PREMIUM VERSION */}
          <div
            className="group relative rounded-3xl p-6 text-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)"
            }}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            <span className="absolute top-6 right-6 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Most Popular
            </span>

            <h3 className="text-xl font-bold mb-6 relative z-10">
              Premium Version
            </h3>

            <div className="flex items-center justify-center mb-8 overflow-hidden relative z-10">
              <img
                className="w-[50%] transition-transform duration-500 group-hover:scale-110"
                src="./premium_tab.png"
                alt=""
              />
            </div>

            <ul className="space-y-3 mb-10 relative z-10">
              <Feature text="Advanced tablet with palm-rejection for seamless writing" />
              <Feature text="Academic content from two leading publishers" />
              <Feature text="1½ academic year subscription to USMS Pro" />
              <Feature text="Admin-level feature control & UI customization" />
              <Feature text="Includes Active Stylus and Premium Protective Cover" />
              <Feature text="Priority updates with early access to beta features" />
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
