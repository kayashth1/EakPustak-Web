import React from "react";
import {
  FaChalkboardTeacher,
  FaSchool,
  FaUsers
} from "react-icons/fa";
import { HiOutlineDeviceTablet } from "react-icons/hi";

const Header = () => {
  return (
    <section id="Home" className="pt-10 pb-20 hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

        {/* LEFT CONTENT — unchanged */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Compliant with NEP 2020
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            The Complete{" "}
            <span className="text-blue-600">Digital School System</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            A powerful education platform delivered through secure learning
            tablets—connecting students, teachers and schools in one
            unified ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<a
  href="#contact"
  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg inline-block text-center"
>
  Get Started
</a>

<a
  href="./Final_Broucher_EP.pdf"
  download
  className="bg-white text-blue-900 border-2 border-blue-100 px-8 py-4 rounded-lg font-bold text-lg hover:border-blue-300 transition inline-block text-center"
>
  Download Brochure
</a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="md:w-1/2 flex justify-center mt-16 md:mt-0">
          <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-square">

            {/* Outer circle */}
            <div className="absolute inset-0 rounded-full bg-white shadow-2xl" />

            {/* Dashed orbit (static) */}
            <svg className="absolute inset-0 w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="42%"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center">
                <HiOutlineDeviceTablet className="text-5xl text-blue-600 mb-2" />
                <p className="font-bold text-slate-800">EAK Pustak OS</p>
              </div>
            </div>

            {/* Icons with subtle float */}
            <OrbitItem angle={300}>
              <RoleCard
                icon={<FaChalkboardTeacher />}
                label="Teacher"
                bg="bg-green-100"
                text="text-green-800"
                iconColor="text-green-600"
                floatClass="float-slow"
              />
            </OrbitItem>

            <OrbitItem angle={210}>
              <RoleCard
                icon={<FaSchool />}
                label="School Admin"
                bg="bg-orange-100"
                text="text-orange-800"
                iconColor="text-orange-600"
                floatClass="float-medium"
              />
            </OrbitItem>

            <OrbitItem angle={30}>
              <RoleCard
                icon={<FaUsers />}
                label="Parents"
                bg="bg-purple-100"
                text="text-purple-800"
                iconColor="text-purple-600"
                floatClass="float-fast"
              />
            </OrbitItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;


const OrbitItem = ({ angle, children }) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        transform: `rotate(${angle}deg) translate(45%) rotate(-${angle}deg)`
      }}
    >
      {children}
    </div>
  );
};

const RoleCard = ({ icon, label, bg, text, iconColor, floatClass }) => {
  return (
    <div
      className={`${bg} ${floatClass} p-4 rounded-xl shadow-lg text-center`}
    >
      <div className={`${iconColor} text-xl mx-auto`}>{icon}</div>
      <p className={`text-xs font-bold ${text} mt-1`}>{label}</p>
    </div>
  );
};
