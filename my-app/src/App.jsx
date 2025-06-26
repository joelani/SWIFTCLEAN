import React from 'react'
import Header from './components/Header'
import About from './sections/About'
import Service from './sections/Service'
import WhyChooseUs from './sections/WhyChooseUs'
import Testimonials from './sections/Testimonials'
import BookingForm from './sections/BookingForm'
import Footer from './sections/Footer'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='relative'>
      <ToastContainer />
      <Header/>
      <About/>
      <Service/>
      <WhyChooseUs/>
      <Testimonials/>
      <BookingForm/>
      <Footer/>
    </div>
  )
}

export default App
