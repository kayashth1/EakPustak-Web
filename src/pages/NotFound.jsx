import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <div className="text-8xl font-extrabold text-indigo-100 select-none">404</div>
      <h1 className="text-2xl font-bold text-slate-800 mt-2 mb-3">Page not found</h1>
      <p className="text-slate-500 mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-7 py-3 rounded-lg font-bold text-white transition"
        style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)" }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
