import React from "react";
import {
  FaChalkboardTeacher,
  FaSchool,
  FaUsers
} from "react-icons/fa";
import EakEcosystem from "./EakEcosystem";


const Header = () => {
  return (
    <section id="Home" className="pt-10 pb-20 hero-gradient relative overflow-hidden bg-[#fbfafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center ">

        {/* LEFT CONTENT — unchanged */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Compliant with NEP 2020
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            The Complete{" "}
<span className="bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] bg-clip-text text-transparent">
  Digital School System
</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            A powerful education platform delivered through secure learning
            tablets—connecting students, teachers and schools in one
            unified ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<a
  href="#contact"
  className="
    bg-[linear-gradient(135deg,_#1e1b4b_0%,_#312e81_50%,_#1e1b4b_100%)]
    hover:bg-[linear-gradient(135deg,_#312e81_0%,_#4338ca_50%,_#312e81_100%)]
    text-white px-8 py-4 rounded-lg font-bold text-lg
    transition shadow-lg inline-block text-center
  "
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
        <div className="flex justify-center md:w-1/2">
          <EakEcosystem />
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
