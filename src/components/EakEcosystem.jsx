import { useState } from "react";
import {
  FaTabletAlt,
  FaChalkboardTeacher,
  FaSchool,
  FaUserGraduate,
  FaBookOpen,
  FaDatabase,
  FaPenFancy
} from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";


export default function EakEcosystem() {
  const [hub, setHub] = useState({
    title: "Eak Pustak Tablet",
    status: "System Active",
    icon: <FaTabletAlt className="text-blue-600 text-5xl" />,
    color: "text-slate-800"
  });

  const reset = () => {
    setHub({
      title: "Eak Pustak Tablet",
      status: "System Active",
      icon: <FaTabletAlt className="text-blue-600 text-5xl" />,
      color: "text-slate-800"
    });
  };

  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center">

      {/* Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Rings */}
      <div className="absolute w-[340px] h-[340px] border border-slate-300 rounded-full"></div>
      <div className="absolute w-[280px] h-[280px] border border-dashed rounded-full animate-spin-slow"></div>

      {/* Center Hub */}
      <div className="relative z-10 bg-white w-44 h-44 rounded-3xl shadow-xl flex flex-col items-center justify-center border">
        {hub.icon}
        <p className={`font-bold mt-2 ${hub.color}`}>{hub.title}</p>
        <span className="text-xs text-gray-500">{hub.status}</span>
      </div>

      {/* Teacher */}
      <div
        onMouseEnter={() =>
          setHub({
            title: "Teacher",
            status: "Sending Lessons",
            icon: <FaBookOpen className="text-green-600 text-5xl" />,
            color: "text-green-600"
          })
        }
        onMouseLeave={reset}
        className="absolute top-5 right-5 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer hover:scale-110 transition"
      >
        <FaChalkboardTeacher className="text-green-600 text-xl" />
        <span className="text-sm font-bold">Teacher</span>
      </div>

      {/* Admin */}
      <div
        onMouseEnter={() =>
          setHub({
            title: "Admin",
            status: "Syncing Data",
            icon: <LuChartNoAxesCombined className="text-orange-600 text-5xl" />,
            color: "text-orange-600"
          })
        }
        onMouseLeave={reset}
        className="absolute bottom-10 left-0 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer hover:scale-110 transition"
      >
        <FaSchool className="text-orange-600 text-xl" />
        <span className="text-sm font-bold">Admin</span>
      </div>

      {/* Student */}
      <div
        onMouseEnter={() =>
          setHub({
            title: "Student",
            status: "Submitting Work",
            icon: <FaPenFancy className="text-purple-600 text-5xl" />,
            color: "text-purple-600"
          })
        }
        onMouseLeave={reset}
        className="absolute bottom-10 right-0 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer hover:scale-110 transition"
      >
        <FaUserGraduate className="text-purple-600 text-xl" />
        <span className="text-sm font-bold">Student</span>
      </div>
    </div>
  );
}