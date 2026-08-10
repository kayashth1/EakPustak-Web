import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden ' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          {/* <img src={assets.logo} alt="" /> */}
          {/* <h2 className='text-2xl text-white'>EakPustak</h2> */}
          <img src={assets.light_logo} alt="" className='w-1/2'/>
          <p className='text-gray-400 mt-4'>The student e-tablet designed for focused learning. An initiative by the students of IIT Dhanbad to make education more accessible and effective.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <Link to="/" className='hover:text-white'>Home</Link>
            <Link to="/about" className='hover:text-white'>About</Link>
            <Link to="/product" className='hover:text-white'>Product</Link>
            <Link to="/services" className='hover:text-white'>Services</Link>
            <a href="/#Contact" className='hover:text-white'>Contact</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Contact Us</h3>
          <ul className='flex flex-col gap-3 text-gray-400 text-sm'>
            <li>🌐 <a href="https://www.eakpustak.com" className='hover:text-white ml-1'>www.eakpustak.com</a></li>
            <li>📞 <a href="tel:+917815040068" className='hover:text-white ml-1'>+91 78150 40068</a></li>
            <li>✉️ <a href="mailto:contact@eakpustak.com" className='hover:text-white ml-1'>contact@eakpustak.com</a></li>
          </ul>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2026 EakPustak. All Right Reserved.
      </div>
    </div>
  )
}

export default Footer