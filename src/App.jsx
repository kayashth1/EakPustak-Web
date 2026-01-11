import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NotJustTablet from './components/NotJustTablet'
import WhySchoolsStruggle from './components/WhySchoolsStruggle'
import PlatformSection from './components/PlatformSection'
import StudentOSSection from './components/StudentOSSection'
import WhyChooseUs from './components/WhyChooseUs'
import ProductComparison from './components/ProductComparison'
import DemoRequestForm from './components/DemoRequestForm'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Header></Header>
      {/* <NotJustTablet></NotJustTablet> */}
      <WhySchoolsStruggle></WhySchoolsStruggle>
      
    <WhyChooseUs></WhyChooseUs>
      <PlatformSection></PlatformSection>
      <StudentOSSection></StudentOSSection>
      <ProductComparison></ProductComparison>
      <DemoRequestForm></DemoRequestForm>
      {/* <About></About> */}
      {/* <Testimonails></Testimonails> */}
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </div>
  )
}

export default App