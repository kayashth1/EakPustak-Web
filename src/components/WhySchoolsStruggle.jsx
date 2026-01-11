import React from "react";
import {
  FaLayerGroup,
  FaFileInvoice,
  FaGamepad,
  FaEyeSlash
} from "react-icons/fa";

const WhySchoolsStruggle = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Schools Struggle Today
          </h2>
          <p className="text-slate-500 mt-2">
            The current ecosystem is fragmented and distracting.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <Card
            icon={<FaLayerGroup />}
            title="Fragmented Systems"
            description="Attendance in books, marks in Excel, notices on WhatsApp. Chaos."
            bg="bg-red-100"
            iconColor="text-red-600"
          />

          <Card
            icon={<FaFileInvoice />}
            title="Paper Overload"
            description="Teachers spend 20%-30% of class time managing paper instead of teaching."
            bg="bg-orange-100"
            iconColor="text-orange-600"
          />

          <Card
            icon={<FaGamepad />}
            title="Digital Distraction"
            description="Standard tablets are gateways to games and social media."
            bg="bg-blue-100"
            iconColor="text-blue-600"
          />

          <Card
            icon={<FaEyeSlash />}
            title="Poor Data Visibility"
            description="Principals and parents don't know a student is struggling until it's too late."
            bg="bg-purple-100"
            iconColor="text-purple-600"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySchoolsStruggle;

const Card = ({ icon, title, description, bg, iconColor }) => {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
      <div
        className={`w-12 h-12 ${bg} ${iconColor} rounded-xl flex items-center justify-center mb-4 text-xl`}
      >
        {icon}
      </div>

      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
};
