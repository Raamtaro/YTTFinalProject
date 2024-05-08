import React from 'react'
import Slide from './Slide.jsx'
import SlideNav from '../Navigation/SlideNav.jsx'
import './ContentStyling/SliderRules.css'
//Overarching parent component which controls which slide(s) to load within each section

const Slider = () => {
  return (
    <div className = "Slider">
      <Slide />
      <SlideNav />
    </div>
  )
}

export default Slider