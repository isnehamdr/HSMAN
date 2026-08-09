'use client'

import About from '@/MainComponent/About'
import Blog from '@/MainComponent/Blog'
import Causes from '@/MainComponent/Causes'
import CtaBanner from '@/MainComponent/Ctabanner'
import Hero from '@/MainComponent/Hero'
import PopularDestination from '@/MainComponent/PopularDestination'
import Services from '@/MainComponent/Services'
import Testimonial from '@/MainComponent/Testimonial'
import AnimatedSection from '@/MainComponent/AnimatedSection'

import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero />

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Services />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <PopularDestination />
      </AnimatedSection>

      <AnimatedSection>
        <Causes />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonial />
      </AnimatedSection>

      <AnimatedSection>
        <Blog />
      </AnimatedSection>

      <AnimatedSection>
        <CtaBanner />
      </AnimatedSection>
    </>
  )
}

export default HomePage