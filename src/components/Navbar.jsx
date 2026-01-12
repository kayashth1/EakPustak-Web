import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="w-full z-10 bg-[linear-gradient(135deg,_#1e1b4b_0%,_#312e81_50%,_#1e1b4b_100%)]">
      <div className="contanier mx-auto w-full flex justify-between items-center py-4 px-8 bg-transparent">
        <img src={assets.light_logo} alt="Logo" className="w-[150px]" />
        <ul className=" hidden md:flex gap-7 text-lg text-white font-semibold">
          <a href="#Home" className="cursor-pointer hover:text-indigo-700">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-indigo-700">
            About
          </a>
          <a href="#Product" className="cursor-pointer hover:text-indigo-700">
            Product
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-indigo-700">
            Contact
          </a>
        </ul>
        <a
          href="tel:8118009161"
          className="hidden md:block px-8 py-2 rounded-full font-semibold     bg-[linear-gradient(135deg,_#312e81_0%,_#4338ca_50%,_#312e81_100%)]
    hover:bg-[linear-gradient(135deg,_#4338ca_0%,_#6366f1_50%,_#4338ca_100%)] text-white transition"
        >
          Call Now
        </a>{" "}
        <img
          onClick={() => setshowMobileMenu(true)}
          src={assets.menuicon}
          className="md:hidden w-7 cursor-pointer invert"
          alt=""
        />
      </div>
      {/* --------- mobile-menu ---------- */}

<div
  className={`md:hidden ${
    showMobileMenu ? "fixed w-full h-full" : "h-0 w-0"
  } right-0 top-0 bottom-0 overflow-hidden 
  bg-[linear-gradient(135deg,_#1e1b4b_0%,_#312e81_50%,_#1e1b4b_100%)]
  transition-all duration-300 z-50`}
>
  {/* Top bar: Logo + Close */}
  <div className="flex items-center justify-between px-6 py-5">
    <img
      src={assets.light_logo}
      alt="Logo"
      className="w-[140px]"
    />
    <img
      onClick={() => setshowMobileMenu(false)}
      src={assets.cross_icon}
      className="w-6 invert cursor-pointer"
      alt="Close"
    />
  </div>

  {/* Navigation links */}
  <ul className="flex flex-col items-center gap-4 mt-10 px-5 text-lg font-semibold text-white">
    {[
      { name: "Home", link: "#Home" },
      { name: "About", link: "#About" },
      { name: "Product", link: "#Product" },
      { name: "Contact", link: "#Contact" },
    ].map((item) => (
      <a
        key={item.name}
        href={item.link}
        onClick={() => setshowMobileMenu(false)}
        className="px-6 py-3 rounded-full w-48 text-center
        bg-[linear-gradient(135deg,_#312e81_0%,_#4338ca_50%,_#312e81_100%)]
        hover:bg-[linear-gradient(135deg,_#4338ca_0%,_#6366f1_50%,_#4338ca_100%)]
        transition"
      >
        {item.name}
      </a>
    ))}
  </ul>

  {/* Call Now button */}
  <div className="flex justify-center mt-10">
    <a
      href="tel:8118009161"
      className="px-10 py-3 rounded-full font-semibold text-white
      bg-[linear-gradient(135deg,_#312e81_0%,_#4338ca_50%,_#312e81_100%)]
      hover:bg-[linear-gradient(135deg,_#4338ca_0%,_#6366f1_50%,_#4338ca_100%)]
      transition"
    >
      Call Now
    </a>
  </div>
</div>

    </div>
  );
};

export default Navbar;
