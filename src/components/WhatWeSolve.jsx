import React from "react";

const SolveCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition">
    <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default function WhatWeSolve() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            From Fragmentation to Focused Learning
          </h2>
          <p className="text-slate-600 text-lg">
            EAK Pustak is designed to eliminate the everyday chaos schools face
            by unifying learning, administration, and discipline into one
            controlled digital ecosystem.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left narrative */}
          <div className="space-y-6 text-slate-700 text-base leading-relaxed">
            <p>
              Schools today rely on a mix of registers, messaging apps, generic
              tablets, and disconnected software. This creates confusion,
              distraction, and unnecessary workload for teachers and
              administrators.
            </p>

            <p>
              EAK Pustak replaces this fragmented setup with a
              <strong> purpose-built digital system</strong> where every tool
              has a clear role and every user operates within defined boundaries.
            </p>

            <p>
              Instead of adapting education to consumer technology, we’ve built
              technology specifically for education.
            </p>
          </div>

          {/* Right solution cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SolveCard
              title="One Device, One Purpose"
              description="A dedicated learning tablet that replaces books, notebooks, diaries, and multiple apps—without the distractions of a regular Android device."
            />

            <SolveCard
              title="Unified School Ecosystem"
              description="Attendance, academics, homework, communication, and analytics all work together in real time from a single system."
            />

            <SolveCard
              title="Controlled Digital Environment"
              description="Social media, games, and irrelevant apps are blocked by design, ensuring students remain focused during study time."
            />

            <SolveCard
              title="Role-Based Experience"
              description="Admins, teachers, and students each get interfaces designed specifically for their responsibilities—nothing unnecessary, nothing missing."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
