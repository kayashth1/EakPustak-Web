import React from 'react'
import Navbar from './Navbar'
import tablet from '../assets/tablet.png'
import home from '../assets/Home.jpg'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header
      id="Home"
      className="min-h-screen flex flex-col bg-[#f2f3fd] overflow-hidden"
      aria-labelledby="header-title"
    >
      <Navbar />

      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 flex-1 flex flex-wrap-reverse items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* IMAGE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center md:justify-end px-2"
          >
            <picture className="w-full max-w-md md:max-w-none">
              <source
                srcSet={`${tablet} 600w, ${home} 1200w`}
                sizes="(max-width: 767px) 90vw, (min-width: 768px) 50vw"
              />
              <motion.img
                src={home}
                srcSet={`${tablet} 600w, ${home} 1200w`}
                sizes="(max-width: 767px) 90vw, (min-width: 768px) 50vw"
                loading="lazy"
                alt="Students using a digital tablet — the Student e-Tablet"
                className="rounded-3xl w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[500px] object-cover shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://placehold.co/600x400/000000/FFD700?text=Innovation'
                  e.currentTarget.alt = 'Fallback placeholder image'
                }}
              />
            </picture>
          </motion.div>

          {/* TEXT ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 px-2"
          >
            <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
              <h1
                id="header-title"
                className="text-[3.2rem] sm:text-5xl md:text-[5 rem] font-extrabold text-gray-800 leading-tight"
              >
                The Student e-Tablet
              </h1>

              <motion.h2
                className="mt-3 text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Designed for Students. Trusted by Teachers.
              </motion.h2>

              <motion.p
                className="mt-6 text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                viewport={{ once: true }}
              >
                Fostered by the students of <strong>IIT Dhanbad</strong>, dedicated to writing
                the next chapter of digital education. Join us in building a smarter,
                more connected community.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition"
                  aria-label="Get Started"
                >
                  Get Started
                </motion.button>
{/* 
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-6 py-3 bg-white text-indigo-600 font-semibold border border-indigo-200 rounded-lg shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition"
                  aria-label="Learn More"
                >
                  Learn More
                </motion.button> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Header
