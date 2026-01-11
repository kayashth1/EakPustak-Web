import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
const Navbar = () => {
  const [showMobileMenu,setshowMobileMenu]=useState(false)

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return()=>{
      document.body.style.overflow='auto'
    };
  },[showMobileMenu])

  return (
    <div className='w-full z-10 bg-[#fbfafa]'>
      <div className='contanier mx-auto w-full flex justify-between items-center py-4 px-8 bg-transparent'>
        <img src={assets.logo} alt="Logo" className='w-[150px]'  />
        <ul className=' hidden md:flex gap-7 text-black font-semibold'>
          <a href="#Home" className='cursor-pointer hover:text-indigo-700'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-indigo-700'>About</a>
          <a href="#Product" className='cursor-pointer hover:text-indigo-700'>Product</a>
          <a href="#Contact" className='cursor-pointer hover:text-indigo-700'>Contact</a>
        </ul>
        <a
  href="tel:8118009161"
  className="hidden md:block bg-indigo-600 px-8 py-2 rounded-full font-semibold text-white hover:bg-indigo-50 hover:text-black transition"
>
  Call Now
</a>        <img onClick={()=>setshowMobileMenu(true)} src={assets.menuicon} className='md:hidden w-7 cursor-pointer text-black' alt="" />
      </div>
      {/* --------- mobile-menu ---------- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full': 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=>setshowMobileMenu(false)} src={assets.cross_icon} className='w-6 text-black' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=>setshowMobileMenu(false)} href="#Home" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=>setshowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=>setshowMobileMenu(false)} href="#Info" className='px-4 py-2 rounded-full inline-block'>Info</a>
          <a onClick={()=>setshowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar