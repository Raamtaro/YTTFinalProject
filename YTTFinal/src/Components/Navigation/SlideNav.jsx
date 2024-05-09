import React from 'react'

const SlideNav = ({bullets}) => {
  const bulletElements = Array.from( { length: bullets}, (_, index) => (
    <div className="slider-bullet" key={index}>
      <span className="slider-bullet__text">{(index + 1).toString().padStart(2, '0')}</span>
      <span className="slider-bullet__line"></span>
    </div>
  ))
  return (
  <nav className="slider__nav">
    {bulletElements}
  </nav>
  )
}

export default SlideNav