import About from '@/MainComponent/About'
import Blog from '@/MainComponent/Blog'
import Causes from '@/MainComponent/Causes'
import CtaBanner from '@/MainComponent/Ctabanner'

import Hero from '@/MainComponent/Hero'

import PopularDestination from '@/MainComponent/PopularDestination'
import Services from '@/MainComponent/Services'
import Testimonial from '@/MainComponent/Testimonial'

import React from 'react'

const HomePage = () => {
  return (
   <>

   <Hero/>
   <About/>
    <Services/>
     <PopularDestination/>
   <Causes/>
 
   <Testimonial/>
   
   <Blog/>
   <CtaBanner/>
   
   </>
  )
}

export default HomePage