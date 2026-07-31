import About from '@/MainComponent/About'
import Blog from '@/MainComponent/Blog'
import Causes from '@/MainComponent/Causes'
import CtaBanner from '@/MainComponent/Ctabanner'
import Footer from '@/MainComponent/Footer'
import Hero from '@/MainComponent/Hero'
import Navbar from '@/MainComponent/Navabar'
import Services from '@/MainComponent/Services'
import Testimonial from '@/MainComponent/Testimonial'
import UpcomingEvents from '@/MainComponent/Upcomingevents'
import React from 'react'

const HomePage = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
    <Services/>
    <UpcomingEvents/>
   <Causes/>
   <Testimonial/>
   <Blog/>
   <CtaBanner/>
   <Footer/>
   </>
  )
}

export default HomePage