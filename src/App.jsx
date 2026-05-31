import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Services from './pages/Services'
import About from './pages/About'
import NotFound from './pages/NotFound'

const pageTitles = {
  '/':         'EAK Pustak — Smart Learn Tablet System',
  '/product':  'Product — EAK Pustak',
  '/services': 'Services — EAK Pustak',
  '/about':    'About — EAK Pustak',
}

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'EAK Pustak'
  }, [pathname])

  return null
}

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ScrollToHash />
      <PageTitle />
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/product"  element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about"    element={<About />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/917978290345"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <FaWhatsapp className="text-2xl shrink-0" />
        <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  )
}

export default App
