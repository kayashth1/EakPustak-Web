import React from 'react';
import { motion } from 'framer-motion';
import tablet from '../assets/tableticon.png';

const containerVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  return (
    <motion.div
      className="py-12 md:py-24 px-4 bg-white font-sans"
      id="About"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left side: Tablet Image */}
          <motion.div className="flex justify-center" variants={imageVariants}>
            <div className="p-6 sm:p-8 rounded-3xl transform hover:scale-105 transition-transform duration-300">
              <motion.img
                src={tablet}
                alt="EAK Pustak Learning Tablet"
                className="w-full max-w-lg mx-auto"
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </motion.div>

          {/* Right side: Product Features */}
          <div className="text-center md:text-left">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-800 mb-10"
              variants={itemVariants}
            >
              Discover the EAK Pustak<br className="hidden md:block" /> Learning Tablet
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-10 max-w-lg mx-auto md:mx-0"
              variants={itemVariants}
            >
              The ultimate tool for focused, effective, and modern education.
            </motion.p>

            <motion.ul className="space-y-6 text-left max-w-lg mx-auto md:mx-0">
              {/* Feature 1: Distraction-Free */}
              <motion.li className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 text-orange-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m-12.728-12.728a9 9 0 0112.728 0M12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 12a3 3 0 100-6 3 3 0 000 6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.929 4.929l14.142 14.142" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Distraction-Free by Design</h3>
                  <p className="text-gray-600">
                    Our custom OS removes distracting apps and the internet, creating the perfect environment for deep concentration.
                  </p>
                </div>
              </motion.li>

              {/* Feature 2: Seamless Performance */}
              <motion.li className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 text-orange-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Seamless Performance for Study</h3>
                  <p className="text-gray-600">
                    With 4GB of RAM and an optimized OS, enjoy a smooth, lag-free experience for reading, writing, or multitasking.
                  </p>
                </div>
              </motion.li>

              {/* Feature 3: Secure & Private */}
              <motion.li className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 text-orange-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Secure & Private Learning</h3>
                  <p className="text-gray-600">
                    Keep your notes and academic progress safe. Our device is built to protect your data and ensure your work remains confidential.
                  </p>
                </div>
              </motion.li>

              {/* Feature 4: All Books in One */}
              <motion.li className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 text-orange-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-5.747-11.494v11.494M17.747 6.253v11.494M3.253 12h17.494" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5h-16.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">All Your Books in One Place</h3>
                  <p className="text-gray-600">
                    Carry your entire library in a 480gm tablet, pre-loaded with NCERT textbooks and essential reference books.
                  </p>
                </div>
              </motion.li>

              {/* Feature 5: Comfortable Reading */}
              <motion.li className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 text-orange-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Comfortable Reading, Day or Night</h3>
                  <p className="text-gray-600">
                    The 10.1" Anti-Glare screen reduces eye strain, allowing for long, comfortable study sessions.
                  </p>
                </div>
              </motion.li>
            </motion.ul>

            {/* CTA (commented out in your original) */}
            {/* <div className="mt-12 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 duration-300">
                Buy Now
              </button>
              <button className="px-8 py-3 bg-white text-orange-500 font-semibold border border-orange-300 rounded-lg shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 duration-300">
                See Details
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
