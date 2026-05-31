import React from "react";
import { assets } from "../assets/assets";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero band */}
      <div
        className="py-20 flex flex-col items-center justify-center text-white text-center px-4"
        style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #1e1b4b 100%)" }}
      >
        <img src={assets.light_logo} alt="EAK Pustak" className="w-44 mb-6" />
        <p className="text-indigo-300 text-sm font-semibold tracking-widest uppercase">
          Read Anywhere, Anytime
        </p>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-12">

        {/* Who we are */}
        <div>
          <h2 className="text-xl font-extrabold text-indigo-900 mb-3">Who We Are</h2>
          <p className="text-slate-600 leading-relaxed">
            EAK Pustak is an EdTech initiative by students of{" "}
            <span className="font-semibold text-slate-800">IIT (ISM) Dhanbad</span>,
            built to modernise how Indian schools teach, manage, and communicate.
            We believe every student deserves a focused, distraction-free learning
            environment — and every school deserves tools that actually work.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-slate-100" />

        {/* What we offer */}
        <div>
          <h2 className="text-xl font-extrabold text-indigo-900 mb-4">What We Offer</h2>
          <ul className="space-y-3">
            {[
              { label: "Smart Tablet", desc: "A NEP 2020-compliant learning device with a locked, distraction-free OS." },
              { label: "School Website", desc: "Mobile-responsive, SEO-ready school websites with 6 months free support." },
              { label: "USMS — School ERP", desc: "One platform for attendance, fees, exams, staff, and communication." },
            ].map((item) => (
              <li key={item.label} className="flex gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                <span className="text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800">{item.label}</span> — {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <hr className="border-slate-100" />

        {/* Contact */}
        <div>
          <h2 className="text-xl font-extrabold text-indigo-900 mb-4">Get in Touch</h2>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li className="flex items-center gap-3">
              <FaGlobe className="text-indigo-500 shrink-0" />
              <a href="https://www.eakpustak.com" className="hover:text-indigo-700 transition">www.eakpustak.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-indigo-500 shrink-0" />
              <a href="tel:+917978290345" className="hover:text-indigo-700 transition">+91 79782 90345</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500 shrink-0" />
              <a href="mailto:contact@eakpustak.com" className="hover:text-indigo-700 transition">contact@eakpustak.com</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
