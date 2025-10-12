import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.16,
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FeatureCard = ({ icon, title, children }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
  >
    <div className="flex-shrink-0 text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{children}</p>
  </motion.div>
);

export default function WhyChooseUs() {
  return (
    <motion.section
      className="py-12 md:py-24 px-4 bg-gray-50 font-sans"
      id="why-choose-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Here’s What Makes EAK Pustak Worth It
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
          >
            We're not just building a tablet; we're building the future of education.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          // this inner div will inherit container variants for children stagger
        >
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            title="Innovative Solutions"
          >
            Born from the minds of IIT Dhanbad students, we create groundbreaking features that address the challenges of modern learning.
          </FeatureCard>

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            title="Student-Centric Design"
          >
            Every aspect is crafted with the student in mind. Our minimalist UI ensures maximum comfort and an intuitive learning experience.
          </FeatureCard>

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.75 4.09l.488 2.053a1 1 0 00.95.69h5.624a1 1 0 00.95-.69l.488-2.053M2.75 16h18.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
            }
            title="Eco-Friendly & Economical"
          >
            Significantly reduce your carbon footprint and save on the costs of physical books. A sustainable investment in your education.
          </FeatureCard>

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Optimized for Education"
          >
            Experience unparalleled performance for all academic tasks. Our hardware and software are fine-tuned for an efficient learning environment.
          </FeatureCard>

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" />
              </svg>
            }
            title="Dedicated Support"
          >
            Our expert support team is always ready to assist you, ensuring a smooth, uninterrupted, and productive educational journey.
          </FeatureCard>

          <FeatureCard
            icon={
              // simplified safe icon to avoid parsing errors
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            }
            title="Focused Learning"
          >
            Our core mission is to provide a distraction-free platform, empowering students to achieve their full academic potential.
          </FeatureCard>
        </motion.div>
      </div>
    </motion.section>
  );
}
