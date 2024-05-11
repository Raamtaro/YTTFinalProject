import React from 'react'
import Slide from '../Content/Slide.jsx'
import SlideScroller from './SlideScroller.jsx'

const Poses = () => {
  const slidesData = [
    { text1: "Slide 1", text2: "Whoa" },
    { text1: "Slide 2", text2: "Bro" },
    { text1: "Slide 3", text2: "Slow" },
    { text1: "Slide 4", text2: "Down" },
    { text1: "Slide 5", text2: "Pls" }
  ];

  return (

    <SlideScroller>
      {slidesData.map((slide, index) => (
          <Slide key={index} text1={slide.text1} text2={slide.text2} />
      ))}
    </SlideScroller>
  )
}

export default Poses