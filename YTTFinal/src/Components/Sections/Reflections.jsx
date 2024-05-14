import React from 'react'
import Slide from '../Content/Slide'
import SlideScroller from './SlideScroller.jsx';

const Reflections = () => {
  const slidesData = [
    { text1: "Slide 1", text2: "Whoa" },
    { text1: "Slide 2", text2: "Bro" },
    { text1: "Slide 3", text2: "Slow" },
    { text1: "Slide 4", text2: "Down" }

  ];

  return (

    <>
      {slidesData.map((slide, index) => (
          <Slide key={index} text1={slide.text1} text2={slide.text2} />
      ))}
    </>
  )
}

export default Reflections