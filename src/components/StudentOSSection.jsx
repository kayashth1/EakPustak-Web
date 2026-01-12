import React from "react";
import {
  FaCheck,
  FaLock,
  FaBook,
  FaPen,
  FaGamepad
} from "react-icons/fa";

const StudentOSSection = () => {
  return (
    <section
      id="student-os"
      className="py-24 text-white"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3">
            THE DIFFERENTIATOR
          </div>

          <h2 className="text-4xl font-bold mb-6">
            A Distraction-Free Software Layer
          </h2>

          <p className="text-indigo-200 text-lg mb-10 max-w-xl">
            Standard Android tablets are gateways to distraction. Eak Pustak runs
            a custom launcher that restricts access to learning tools only.
          </p>

          {/* TABLE */}
          <div className="bg-white/10 rounded-xl overflow-hidden backdrop-blur border border-white/10">
            <div className="grid grid-cols-3 px-6 py-4 text-sm font-semibold bg-white/10">
              <div>Feature</div>
              <div className="text-red-300 text-center">Normal Tablet</div>
              <div className="text-green-400 text-center">Eak Pustak   Tablet</div>
            </div>

            <Row
              label="Social Media"
              left={<span className="flex items-center justify-center gap-1"><FaCheck /> Open</span>}
              right={<span className="flex items-center justify-center gap-1"><FaLock /> Blocked</span>}
            />
            <Row
              label="YouTube / Games"
              left={<span className="flex items-center justify-center gap-1"><FaCheck /> Open</span>}
              right={<span className="flex items-center justify-center gap-1"><FaLock /> Blocked</span>}
            />
            <div className="grid grid-cols-3 px-6 py-4 text-sm">
              <div className="text-indigo-200">App Install</div>
              <div className="text-center text-red-300">User Control</div>
              <div className="text-center text-green-400">School Control</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — TABLET */}
        <div className="flex justify-center">
          <div className="bg-[#0f172a] rounded-[32px] p-4 shadow-2xl">
            <div className="bg-[#1e293b] rounded-[24px] px-10 py-8 w-[420px] h-[260px] flex flex-col items-center justify-center gap-8">

              {/* TIME */}
              <div className="text-center">
                <div className="text-4xl font-light tracking-wide">09:41</div>
                <div className="text-xs tracking-widest text-slate-400 mt-1">
                  STUDY TIME ACTIVE
                </div>
              </div>

              {/* APPS */}
              <div className="grid grid-cols-3 gap-6 w-full">
                <App icon={<FaBook />} label="Library" bg="bg-indigo-600" />
                <App icon={<FaPen />} label="Notes" bg="bg-cyan-600" />
                <App
                  icon={<FaGamepad />}
                  label="Games"
                  bg="bg-slate-700"
                  locked
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentOSSection;
const Row = ({ label, left, right }) => (
  <div className="grid grid-cols-3 px-6 py-4 text-sm border-t border-white/5">
    <div className="text-indigo-200">{label}</div>
    <div className="text-center text-red-300">{left}</div>
    <div className="text-center text-green-400">{right}</div>
  </div>
);

const App = ({ icon, label, bg, locked }) => (
  <div
    className={`${bg} h-20 rounded-xl flex flex-col items-center justify-center gap-2 relative ${
      locked ? "opacity-50" : ""
    }`}
  >
    {icon}
    <span className="text-[10px]">{label}</span>
    {locked && (
      <FaLock className="absolute top-2 right-2 text-xs text-red-400" />
    )}
  </div>
);
