import React from 'react'
import Navbar from './Navbar'
import tablet from '../assets/tablet.png'
import home from '../assets/home.jpg'
const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-[#f2f3fd]' id='Header'>
      <Navbar/>
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
              The Student e-Tablet
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl text-gray-700">
            Designed for Students. Trusted by Teachers.
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
Fostered by the students of <b> IIT Dhanbad</b>, dedicated to writing the next chapter of digital education. Join us in building a smarter, more connected community.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-indigo-600 font-semibold border border-indigo-200 rounded-lg shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center p-4">
            <img 
              src={home}
              alt="Abstract network of glowing golden lines representing technology and connectivity"
              className="rounded-3xl w-full max-w-md md:max-w-full"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/000000/FFD700?text=Innovation'; e.currentTarget.alt = 'Fallback placeholder image'; }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header