import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-slate-800 mb-2">
      {title}
    </h3>
    <p className="text-slate-500 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 px-4 bg-[#f4f0ff] font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
            What Schools Truly Need to Thrive
          </h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
            To foster an effective learning environment, schools need tools that
            reduce friction, improve focus, and connect every stakeholder in
            real time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<IconPen />}
            title="Lightweight & Portable"
            description="A device designed for daily student use—easy to carry, reducing physical burden while promoting mobility in learning."
          />

          <FeatureCard
            icon={<IconEcosystem />}
            title="Real-Time Unified Ecosystem"
            description="Academics, administration, attendance, and communication—all connected live through a single integrated platform."
          />

          <FeatureCard
            icon={<IconWorkload />}
            title="Reduced Non-Teaching Workload"
            description="Automation replaces registers and paperwork, allowing teachers to focus on what matters most: teaching."
          />

          <FeatureCard
            icon={<IconData />}
            title="Data-Driven Resource Allocation"
            description="Live insights help schools optimize staffing, budgeting, and infrastructure decisions with confidence."
          />

          <FeatureCard
            icon={<IconFocus />}
            title="Distraction-Free Focus"
            description="A controlled learning environment free from games, social media, and unnecessary digital noise."
          />

          {/* 🔁 REPLACED CARD */}
          <FeatureCard
            icon={<IconRoles />}
            title="Built for Every Role in School"
            description="A purpose-driven ecosystem with distinct experiences for Admins, Teachers, and Students—each role gets exactly what they need, nothing more, nothing less."
          />
        </div>
      </div>
    </section>
  );
}


const IconPen = () => (
  <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" d="M12 20h9" />
    <path strokeWidth="1.5" d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" />
  </svg>
);

const IconEcosystem = () => (
  <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="7" r="3" strokeWidth="1.5" />
    <circle cx="5" cy="17" r="3" strokeWidth="1.5" />
    <circle cx="19" cy="17" r="3" strokeWidth="1.5" />
    <path strokeWidth="1.5" d="M12 10v4M9 14l-2 2M15 14l2 2" />
  </svg>
);

const IconWorkload = () => (
  <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" d="M4 7h16M4 12h10M4 17h7" />
  </svg>
);

const IconData = () => (
  <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
  </svg>
);

const IconFocus = () => (
  <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
  </svg>
);

const IconRoles = () => (
  <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="8" r="3" strokeWidth="1.5" />
    <path strokeWidth="1.5" d="M4 20c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);
