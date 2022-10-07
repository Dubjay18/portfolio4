import React, { Props } from 'react'
import { Steps, StepsProvider, useSteps } from 'react-step-builder'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SimpleSlider from './SimpleSlider'
import { SmoothScroll } from './SmoothScroll'

function Experience() {
  return (
    <div className="bg  flex min-h-screen items-center justify-center">
      <div className=" mb-20">
        <div className="my-20 flex  w-full items-center justify-center px-4">
          {' '}
          <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
          <h1 className="prose-lg xs:text-4xl prose text-2xl font-bold text-primary md:text-6xl">
            Experience
          </h1>{' '}
          <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
        </div>
      
        <div className="neumophic-card mx-auto w-[80vw] py-5 h-[600px]">
          <SmoothScroll/>
        </div>
      </div>
    </div>
  )
}

export default Experience
