import { useState } from "react";
import {
  FaTabletAlt,
  FaChalkboardTeacher,
  FaSchool,
  FaUserGraduate,
  FaBookOpen,
  FaPenFancy
} from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";


export default function EakEcosystem() {
  const [hub, setHub] = useState({
    title: "Eak Pustak Tablet",
    status: "System Active",
    icon: <FaTabletAlt className="text-blue-600 text-4xl sm:text-5xl" />,
    color: "text-slate-800"
  });

  const reset = () => {
    setHub({
      title: "Eak Pustak Tablet",
      status: "System Active",
      icon: <FaTabletAlt className="text-blue-600 text-4xl sm:text-5xl" />,
      color: "text-slate-800"
    });
  };

  return (
    <div
      className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px]
      flex items-center justify-center mx-auto animate-fadeIn"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Static Ring */}
      <div
        className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px]
        border border-slate-300 rounded-full"
      ></div>

      {/* Rotating Ring (More Visible) */}
      <div
        className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px]
        border-2 border-dashed border-indigo-400/80
        rounded-full animate-spinSlow"
      ></div>

      {/* Center Hub */}
      <div
        className="relative z-10 bg-white w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44
        rounded-3xl shadow-xl flex flex-col items-center justify-center border
        animate-float transition-all duration-300"
      >
        {hub.icon}
        <p className={`font-bold mt-2 text-xs sm:text-sm ${hub.color}`}>
          {hub.title}
        </p>
        <span className="text-[10px] sm:text-xs text-gray-500">
          {hub.status}
        </span>
      </div>

      {/* Teacher */}
      <div
        onMouseEnter={() =>
          setHub({
            title: "Teacher",
            status: "Sending Lessons",
            icon: <FaBookOpen className="text-green-600 text-4xl sm:text-5xl" />,
            color: "text-green-600"
          })
        }
        onMouseLeave={reset}
        className="absolute top-2 right-2 sm:top-5 sm:right-5 bg-white
        px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-lg
        flex items-center gap-2 cursor-pointer
        hover:scale-110 hover:shadow-xl transition-all duration-300
        animate-float [animation-delay:0s]"
      >
        <FaChalkboardTeacher className="text-green-600 text-lg sm:text-xl" />
        <span className="text-xs sm:text-sm font-bold">Teacher</span>
      </div>

      {/* Admin */}
      <div
        onMouseEnter={() =>
          setHub({
            title: "Admin",
            status: "Syncing Data",
            icon: <LuChartNoAxesCombined className="text-orange-600 text-4xl sm:text-5xl" />,
            color: "text-orange-600"
          })
        }
        onMouseLeave={reset}
        className="absolute bottom-4 left-2 sm:bottom-10 sm:left-0 bg-white
        px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-lg
        flex items-center gap-2 cursor-pointer
        hover:scale-110 hover:shadow-xl transition-all duration-300
        animate-float [animation-delay:1.2s]"
      >
        <FaSchool className="text-orange-600 text-lg sm:text-xl" />
        <span className="text-xs sm:text-sm font-bold">Admin</span>
      </div>

      {/* Student */}
      <div
        onMouseEnter={() =>
          setHub({
            title: "Student",
            status: "Submitting Work",
            icon: <FaPenFancy className="text-purple-600 text-4xl sm:text-5xl" />,
            color: "text-purple-600"
          })
        }
        onMouseLeave={reset}
        className="absolute bottom-4 right-2 sm:bottom-10 sm:right-0 bg-white
        px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-lg
        flex items-center gap-2 cursor-pointer
        hover:scale-110 hover:shadow-xl transition-all duration-300
        animate-float [animation-delay:2.4s]"
      >
        <FaUserGraduate className="text-purple-600 text-lg sm:text-xl" />
        <span className="text-xs sm:text-sm font-bold">Student</span>
      </div>
    </div>
  );
}
