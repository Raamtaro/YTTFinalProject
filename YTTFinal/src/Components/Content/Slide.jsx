import React from 'react'
import './ContentStyling/SlideRules.css'

function Slide({text1, text2, image}) {
  return (
    <div className="slide">
      <div className="slide__content">
      {image &&         
          <div className="slide__img">
              <img src={image} alt={null} />
            </div>}
        <div className="slider__text">
          <div className="slider__text-line">{text1}</div>
          <div className="slider__text-line">{text2}</div>
        </div>
      </div>

    </div>


  )
}

export default Slide