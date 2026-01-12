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
      className="py-16 sm:py-20 md:py-24 text-white"
      style={{
        background:
          "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3">
              THE DIFFERENTIATOR
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              A Distraction-Free Software Layer
            </h2>

            <p className="text-indigo-200 text-base sm:text-lg mb-8 max-w-xl">
              Standard Android tablets are gateways to distraction. Eak Pustak runs
              a custom launcher that restricts access to learning tools only.
            </p>

            {/* DESKTOP TABLE */}
            <div className="hidden sm:block bg-white/10 rounded-xl overflow-hidden backdrop-blur border border-white/10">
              <div className="grid grid-cols-3 px-6 py-4 text-sm font-semibold bg-white/10">
                <div>Feature</div>
                <div className="text-red-300 text-center">Normal Tablet</div>
                <div className="text-green-400 text-center">
                  Eak Pustak Tablet
                </div>
              </div>

              <Row label="Social Media" left="Open" right="Blocked" />
              <Row label="YouTube / Games" left="Open" right="Blocked" />
              <Row label="App Install" left="User Control" right="School Control" />
            </div>

            {/* MOBILE TABLE */}
            <div className="sm:hidden space-y-4">
              <MobileRow
                label="Social Media"
                left="Open"
                right="Blocked"
              />
              <MobileRow
                label="YouTube / Games"
                left="Open"
                right="Blocked"
              />
              <MobileRow
                label="App Install"
                left="User Control"
                right="School Control"
              />
            </div>
          </div>

          {/* RIGHT SIDE — TABLET */}
          <div className="flex justify-center">
            <div className="bg-[#0f172a] rounded-[28px] p-3 shadow-2xl w-full max-w-xs sm:max-w-md">
              <div
                className="bg-[#1e293b] rounded-[22px]
                px-6 py-6
                w-full
                aspect-[16/10]
                flex flex-col items-center justify-center gap-6"
              >
                {/* TIME */}
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">
                    09:41
                  </div>
                  <div className="text-[10px] tracking-widest text-slate-400 mt-1">
                    STUDY TIME ACTIVE
                  </div>
                </div>

                {/* APPS */}
                <div className="grid grid-cols-3 gap-4 w-full">
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
      </div>
    </section>
  );
};

export default StudentOSSection;

/* ---------- COMPONENTS ---------- */

const Row = ({ label, left, right }) => (
  <div className="grid grid-cols-3 px-6 py-4 text-sm border-t border-white/5">
    <div className="text-indigo-200">{label}</div>
    <div className="text-center text-red-300 flex items-center justify-center gap-1">
      <FaCheck /> {left}
    </div>
    <div className="text-center text-green-400 flex items-center justify-center gap-1">
      <FaLock /> {right}
    </div>
  </div>
);

const MobileRow = ({ label, left, right }) => (
  <div className="bg-white/10 rounded-lg p-4 border border-white/10">
    <div className="font-semibold mb-3 text-indigo-200">
      {label}
    </div>

    <div className="grid grid-cols-2 gap-4 text-sm">
      <div>
        <div className="text-xs uppercase tracking-wide text-red-300 mb-1">
          Normal Tablet
        </div>
        <div className="flex items-center gap-1 text-red-300">
          <FaCheck /> {left}
        </div>
      </div>

      <div>
        <div className="text-xs uppercase tracking-wide text-green-400 mb-1">
          Eak Pustak Tablet
        </div>
        <div className="flex items-center gap-1 text-green-400">
          <FaLock /> {right}
        </div>
      </div>
    </div>
  </div>
);

const App = ({ icon, label, bg, locked }) => (
  <div
    className={`${bg} h-16 sm:h-20 rounded-xl flex flex-col items-center justify-center gap-1 relative ${
      locked ? "opacity-50" : ""
    }`}
  >
    {icon}
    <span className="text-[9px] sm:text-[10px]">{label}</span>
    {locked && (
      <FaLock className="absolute top-2 right-2 text-xs text-red-400" />
    )}
  </div>
);
