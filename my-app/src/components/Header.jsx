import React from 'react'
import Navbar from './Navbar'
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'

const Header = () => {
  return (
    <div className='min-h-lvh '>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Header
