import React from 'react'
import Slide from '../Content/Slide.jsx'
import SlideScroller from './SlideScroller.jsx'
import { useSlide } from '../../Contexts/SlideContext.jsx';
import imgPaths from '../../data/imgPaths.js';

const Poses = () => {
  const {currentSlide } = useSlide()
  const slidesData = [
    { text1: "Slide 1", text2: "Whoa", image: imgPaths.poses[0] },
    { text1: "Slide 2", text2: "Bro", image: imgPaths.poses[1] },
    { text1: "Slide 3", text2: "Slow", image: imgPaths.poses[2] },
    { text1: "Slide 4", text2: "Down", image: imgPaths.poses[3] },
    { text1: "Slide 5", text2: "Bro", image: imgPaths.poses[4]}
  ];

  return (

    <Slide
      text1={slidesData[currentSlide]?.text1}
      text2={slidesData[currentSlide]?.text2}
      image = {slidesData[currentSlide]?.image}
      

    />
  )
}

export default Poses