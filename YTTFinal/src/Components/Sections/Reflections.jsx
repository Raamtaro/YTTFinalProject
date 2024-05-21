import React from 'react'
import Slide from '../Content/Slide'
import SlideScroller from './SlideScroller.jsx';
import { useSlide } from '../../Contexts/SlideContext.jsx';
import imgPaths from '../../data/imgPaths.js';


const Reflections = () => {
  const {currentSlide } = useSlide()
  const slidesData = [
    { text1: "With this in mind, we certainly can't deny the fact that certain poses do prepare you for others.", text2: "In the Ashtanga Series, every pose is deliberately placed.", text3: "However, I conclude that there is no such thing as `4 key poses` in the Ashtanga primary series, or any of its later  ones.", text4: "And that's because..." },
    { text1: "EVERY POSE IS A KEY POSE. YOU MUST BUILD YOUR TREE FROM THE GROUND UP.", text2: "" },
    { text1: "When in doubt, just practice.", text2: "We all have a different combination of body types, minds, personal values and priorities.", text3: "Likewise, the things we struggle with, like our 'Gatekeeper' asanas, will be unique to the individual.", text4: "Therefore, just get on the mat and start from the beginning. You'll get sorted from there."  },
    { text1: "Thank you :)", text2: "Questions?" }

  ];

  console.log('Current Slide:', currentSlide);
  console.log('Slides Data Length:', slidesData.length);
  console.log('Slide Data:', slidesData[currentSlide]);

  if (currentSlide >= slidesData.length) {
    console.error('Current slide index is out of range');
    return null; // or show a loading indicator or error message
  }

  return (

    <Slide
    text1={slidesData[currentSlide]?.text1}
    text2={slidesData[currentSlide].text2 ? slidesData[currentSlide].text2 : null}
    text3={slidesData[currentSlide].text3 ? slidesData[currentSlide].text3 : null}
    text4={slidesData[currentSlide].text4 ? slidesData[currentSlide].text4 : null}
      // image={slidesData[currentSlide]?.image}
    />
  )
}

export default Reflections