import React, {useRef, useEffect} from 'react'
import { useSection } from '../../Contexts/SectionContext.jsx'
import SlideNav from '../Navigation/SlideNav.jsx'
import Home from '../Sections/Home.jsx'
import Poses from '../Sections/Poses.jsx'
import Reflections from '../Sections/Reflections.jsx'
import './ContentStyling/SliderRules.css'


//Overarching parent component which controls which slide(s) to load within each section

const Slider = () => {
  const {activeSection} = useSection()
  const {bullets} = useSection()
  const sliderRef = useRef(null)
  

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />
      case 'Poses':
        return <Poses />
      case 'Reflections':
        return <Reflections />
      default:
        return null
    }
  }

  return (
    <div className = "Slider" ref={sliderRef}>
      {renderSection()}
      <SlideNav bullets={bullets}/>
    </div>
  )
}

export default Slider