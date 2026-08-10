import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const navLinks = [
  { name: "Home",     to: "/",         isRoute: true },
  { name: "About",    to: "/about",    isRoute: true },
  { name: "Product",  to: "/product",  isRoute: true },
  { name: "Services", to: "/services", isRoute: true },
  { name: "Contact",  to: "/#Contact", isRoute: false },
];

const desktopActive   = "text-white underline underline-offset-4 decoration-cyan-400";
const desktopInactive = "text-indigo-200 hover:text-white transition";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  // close mobile menu whenever the route changes
  useEffect(() => {
    setShowMobileMenu(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [showMobileMenu]);

  return (
    <div className="w-full sticky top-0 z-40 bg-[linear-gradient(135deg,_#1e1b4b_0%,_#312e81_50%,_#1e1b4b_100%)] shadow-lg">
      <div className="mx-auto w-full flex justify-between items-center py-4 px-8">

        {/* Logo */}
        <Link to="/">
          <img src={assets.light_logo} alt="EAK Pustak" className="w-[150px]" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-7 text-base font-semibold">
          {navLinks.map((item) =>
            item.isRoute ? (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive ? desktopActive : desktopInactive
                }
              >
                {item.name}
              </NavLink>
            ) : (
              <a
                key={item.name}
                href={item.to}
                className={desktopInactive}
              >
                {item.name}
              </a>
            )
          )}
        </ul>

        {/* CTA */}
        <a
          href="tel:+917815040068"
          className="hidden md:block px-7 py-2 rounded-full font-semibold text-sm
            bg-[linear-gradient(135deg,_#312e81_0%,_#4338ca_50%,_#312e81_100%)]
            hover:bg-[linear-gradient(135deg,_#4338ca_0%,_#6366f1_50%,_#4338ca_100%)]
            text-white transition"
        >
          Call Now
        </a>

        {/* Hamburger */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menuicon}
          className="md:hidden w-7 cursor-pointer invert"
          alt="Menu"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 overflow-hidden transition-all duration-300
          bg-[linear-gradient(135deg,_#1e1b4b_0%,_#312e81_50%,_#1e1b4b_100%)]
          ${showMobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-5">
          <img src={assets.light_logo} alt="EAK Pustak" className="w-[140px]" />
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 invert cursor-pointer"
            alt="Close"
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col items-center gap-4 mt-10 px-5 text-lg font-semibold text-white">
          {navLinks.map((item) =>
            item.isRoute ? (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-6 py-3 rounded-full w-48 text-center transition
                  ${isActive
                    ? "bg-white text-indigo-900"
                    : "bg-[linear-gradient(135deg,_#312e81_0%,_#4338ca_50%,_#312e81_100%)] hover:bg-[linear-gradient(135deg,_#4338ca_0%,_#6366f1_50%,_#4338ca_100%)]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ) : (
              <a
                key={item.name}
                href={item.to}
                className="px-6 py-3 rounded-full w-48 text-center
                  bg-[linear-gradient(135deg,_#312e81_0%,_#4338ca_50%,_#312e81_100%)]
                  hover:bg-[linear-gradient(135deg,_#4338ca_0%,_#6366f1_50%,_#4338ca_100%)]
                  transition"
              >
                {item.name}
              </a>
            )
          )}
        </ul>

        {/* Call Now */}
        <div className="flex justify-center mt-10">
          <a
            href="tel:+917815040068"
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
