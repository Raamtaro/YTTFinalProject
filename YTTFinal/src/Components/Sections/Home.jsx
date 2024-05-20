import React from 'react'
import Slide from '../Content/Slide.jsx'
import SlideScroller from './SlideScroller.jsx';
import { useSlide } from '../../Contexts/SlideContext.jsx';

const Home = () => {
  const {currentSlide } = useSlide()
  const slidesData = [
    { text1: "Slide 1", text2: "Whoa" },
    { text1: "Slide 2", text2: "Bro" },
    { text1: "Slide 3", text2: "Slow" },

  ];

  if (currentSlide >= slidesData.length) {
          return null; // or show a loading indicator or error message
      }

      return (
          <Slide
              text1={slidesData[currentSlide].text1}
              text2={slidesData[currentSlide].text2}
          />
      );
}

export default Home