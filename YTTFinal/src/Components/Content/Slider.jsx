import React from 'react'
// import Slide from './Slide.jsx'
import SlideNav from '../Navigation/SlideNav.jsx'
import Home from '../Sections/Home.jsx'
import Poses from '../Sections/Poses.jsx'
import Reflections from '../Sections/Reflections.jsx'
import './ContentStyling/SliderRules.css'
//Overarching parent component which controls which slide(s) to load within each section

const Slider = () => {
  return (
    <div className = "Slider">
      <Home />{/**Instead of directly returning a slide,  */}
      <SlideNav />
    </div>
  )
}

export default Slider