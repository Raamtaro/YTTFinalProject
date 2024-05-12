import React from 'react'
import Slide from '../Content/Slide.jsx'
import SlideScroller from './SlideScroller.jsx';

const Home = () => {
  const slidesData = [
    { text1: "Slide 1", text2: "Whoa" },
    { text1: "Slide 2", text2: "Bro" },
    { text1: "Slide 3", text2: "Slow" },

  ];

  return (

    <SlideScroller>
      {slidesData.map((slide, index) => (
          <Slide key={index} text1={slide.text1} text2={slide.text2} />
      ))}
    </ SlideScroller>
  )
}

export default Home