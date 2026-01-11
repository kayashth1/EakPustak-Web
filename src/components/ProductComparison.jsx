import React from "react";


const Feature = ({ text, color }) => (
  <li className="flex items-start gap-2 text-l text-white-600">
    <span className={`${color} mt-1`}>✓</span>
    <span>{text}</span>
  </li>
);

export default function ProductComparison() {
  return (
    <section id="Product" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* STANDARD VERSION */}
          <div className="bg-blue-100 rounded-3xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Standard Version
            </h3>

            {/* Image Placeholder */}
            <div className="flex items-center justify-center mb-8">
              <img className="w-[60%]" src="./standard_tab.png" alt="" />
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
          <div className="relative bg-gradient-to-br from-indigo-700 to-blue-700 rounded-3xl p-6 text-white shadow-lg">
            
            {/* Badge */}
            <span className="absolute top-6 right-6 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-xl font-bold mb-6">
              Premium Version
            </h3>

            {/* Image Placeholder */}
            <div className="flex items-center justify-center mb-8">
              <img className="w-[50%]" src="./premium_tab.png" alt="" />
            </div>

            <ul className="space-y-3 mb-10 text-white">
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
