import React from "react";
import { motion } from "framer-motion";
import { assets, testimonialsData } from "../assets/assets";

const Testimonails = () => {
  return (
    <section className="py-20 bg-slate-50" id="Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            What Educators Say
          </h2>
          <p className="text-slate-500 mt-3">
            Feedback from teachers, professors and advisors who've seen it firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <img key={i} src={assets.star_icon} alt="star" className="w-4 h-4" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonails;
