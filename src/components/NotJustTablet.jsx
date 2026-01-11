import React from "react";

const NotJustTablet = () => {
  return (
    <section className="bg-slate-900 py-16 text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        EAK Pustak is{" "}
        <span className="text-blue-400 decoration-wavy underline">
          not just a tablet.
        </span>
      </h2>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        It is a full digital operating system for schools that replaces books,
        registers, homework diaries, and manual administration with a single
        smart platform.
      </p>
    </section>
  );
};

export default NotJustTablet;
