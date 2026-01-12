import React, { useState } from "react";
import {
  FaChartPie,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaCheck,
  FaUsers,
  FaMagic,
  FaBroadcastTower,
  FaPenNib,
  FaBookOpen,
  FaWifi,
  FaBook,
  FaPen,
  FaCalendarAlt,
  FaLock
} from "react-icons/fa";

const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState("admin");

  const tabBase =
    "px-8 py-4 font-semibold text-sm transition-all flex items-center gap-2 border-b-2";
  const active =
    "border-blue-600 text-blue-600";
  const inactive =
    "border-transparent text-slate-500 hover:text-slate-800";

  return (
    <section id="About" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl text-slate-900">
            Tailored Interfaces for Every Role
          </h2>
          <p className="text-slate-500 mt-2">
            Three Pillers of the Eak Pustak Ecosystem
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("admin")}
            className={`${tabBase} ${activeTab === "admin" ? active : inactive}`}
          >
            <FaChartPie /> Principal & Admin
          </button>

          <button
            onClick={() => setActiveTab("teacher")}
            className={`${tabBase} ${activeTab === "teacher" ? active : inactive}`}
          >
            <FaChalkboardTeacher /> Teacher
          </button>

          <button
            onClick={() => setActiveTab("student")}
            className={`${tabBase} ${activeTab === "student" ? active : inactive}`}
          >
            <FaUserGraduate /> Student
          </button>
        </div>

        {/* ADMIN */}
        {activeTab === "admin" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                USMS Module
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Total Campus Visibility
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                The Unified School Management System (USMS) gives you a bird's-eye
                view of your institution.
              </p>

              <ul className="space-y-4">
                <Feature
                  icon={<FaCheck />}
                  title="Automated Records"
                  text="Attendance syncs from student tablets instantly."
                />
                <Feature
                  icon={<FaCheck />}
                  title="Insightful Analytics"
                  text="Manage school staff and send notices."
                />
              </ul>
            </div>

            <div className="">
            <img src="./Admin.png" alt="" />
            </div>
          </div>
        )}

        {/* TEACHER */}
        {activeTab === "teacher" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
            <div>
              <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                Content Delivery
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Teach More, Admin Less
              </h3>

              <p className="text-slate-600 mb-6">
                Push homework to multiple students with one click.
              </p>

              <ul className="space-y-4">
                <Feature
                  icon={<FaMagic />}
                  title="Teacher Instruction"
                  text="Manage instructions with ease."
                  color="pink"
                />
                <Feature
                  icon={<FaBroadcastTower />}
                  title="Doubt Solving Control"
                  text="Help whenever students ask doubts."
                  color="pink"
                />
                <Feature
                  icon={<FaBroadcastTower />}
                  title="Attendance Management"
                  text="Take attendance digitally."
                  color="pink"
                />
              </ul>
            </div>

            {/* <TeacherPanel /> */}
            <div className="flex justify-center items-center">
              <img className="w-[85%]" src="./teacher.png" alt="" />
            </div>
          </div>
        )}

        {/* STUDENT */}
        {activeTab === "student" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="">
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                Student Launcher
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Distraction-Free Zone
              </h3>

              <p className="text-slate-600 mb-6">
                A locked-down App that replaces conventional way of studying.
              </p>

              <ul className="space-y-4">
                <Feature
                  icon={<FaPenNib />}
                  title="Palm-Rejection Writing"
                  text="Natural handwriting experience."
                  color="blue"
                />
                <Feature
                  icon={<FaBookOpen />}
                  title="Access eBooks & Class Notes"
                  text="All study material in one place."
                  color="blue"
                />
              </ul>
            </div>

            <div className="flex justify-center items-center">
            <img className="w-[85%]" src="./student.png" alt="" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlatformSection;


const Feature = ({ icon, title, text, color = "green" }) => (
  <li className="flex items-start gap-3">
    <div
      className={`mt-1 w-6 h-6 bg-${color}-100 text-${color}-600 rounded-full flex items-center justify-center text-xs`}
    >
      {icon}
    </div>
    <div>
      <strong className="block text-slate-900">{title}</strong>
      <span className="text-sm text-slate-500">{text}</span>
    </div>
  </li>
);

const StatCard = () => (
  <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center border">
    <div>
      <div className="text-xs text-slate-400 uppercase font-bold">
        Today's Attendance
      </div>
      <div className="text-2xl font-bold text-slate-800">
        96.4% <span className="text-xs text-green-500">▲ 2%</span>
      </div>
    </div>
    <FaUsers className="text-indigo-600 text-xl" />
  </div>
);

const BarChart = () => (
  <div className="bg-white p-4 rounded shadow-sm border">
    <div className="text-xs text-slate-400 uppercase font-bold mb-2">
      Fee Collection Flow
    </div>
    <div className="flex items-end gap-2 h-24">
      {[40, 60, 30, 80, 95].map((h, i) => (
        <div
          key={i}
          className="w-full bg-blue-400 rounded-t"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  </div>
);

const TeacherPanel = () => (
  <div className="bg-slate-50 rounded-2xl p-8 border shadow-inner">
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex justify-between mb-6">
        <span className="font-bold">Class 9 – Physics</span>
        <button className="bg-pink-600 text-white px-3 py-1 text-xs rounded">
          Push Homework
        </button>
      </div>
    </div>
  </div>
);

const StudentOS = () => (
  <div className="bg-slate-50 rounded-2xl p-8 border shadow-inner flex justify-center">
    <div className="w-64 h-48 bg-white border-8 border-slate-800 rounded-xl shadow-xl p-4 relative">
      <FaWifi className="absolute top-2 right-2 text-slate-300 text-xs" />
      <div className="grid grid-cols-3 gap-2 mb-3">
        <FaBook />
        <FaPen />
        <FaCalendarAlt />
      </div>
      <div className="text-xs text-slate-400 text-center">
        <FaLock /> YouTube Blocked
      </div>
    </div>
  </div>
);
