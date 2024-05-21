import React from 'react'
import { useSlide } from '../../Contexts/SlideContext.jsx'

const SlideNav = ({bullets}) => {
  const {currentSlide} = useSlide()
  const bulletElements = Array.from( { length: bullets}, (_, index) => (
    <div className="slider-bullet" key={index}>
      <span className="slider-bullet__text">{(index + 1).toString().padStart(2, '0')}</span>
      <span className={`slider-bullet__line ${currentSlide === index ? 'active' : ''}`}></span>
    </div>
  ))
  return (
  <nav className="slider__nav">
    {bulletElements}
  </nav>
  )
}

export default SlideNav