import React from 'react'
import './ContentStyling/SlideRules.css'

function Slide({text1, text2, lines}) {
  return (
    <div className="slide section">
      {/* <div className="slide__content">
        <figure className="slide__img">
          <img src={img1Path} alt="Img to Display" />
        </figure>
        <figure className="slide__img">
          <img src={img1Path} alt="Img to Display" />
        </figure>
      </div> */}
      <div className="slider__text">
        <div className="slider__text-line">{text1}</div>
        <div className="slider__text-line">{text2}</div>
      </div>
    </div>


  )
}

export default Slide