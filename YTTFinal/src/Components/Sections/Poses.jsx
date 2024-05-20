import React from 'react'
import Slide from '../Content/Slide.jsx'
import SlideScroller from './SlideScroller.jsx'
import { useSlide } from '../../Contexts/SlideContext.jsx';

const Poses = () => {
  const {currentSlide } = useSlide()
  const slidesData = [
    { text1: "Slide 1", text2: "Whoa" },
    { text1: "Slide 2", text2: "Bro" },
    { text1: "Slide 3", text2: "Slow" },
    { text1: "Slide 4", text2: "Down" },
    { text1: "Slide 5", text2: "Pls" }
  ];

  return (

    <Slide
      text1={slidesData[currentSlide].text1}
      text2={slidesData[currentSlide].text2}
    />
  )
}

export default Poses