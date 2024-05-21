import React from 'react'
import Slide from '../Content/Slide.jsx'
import SlideScroller from './SlideScroller.jsx';
import { useSlide } from '../../Contexts/SlideContext.jsx';


const Home = () => {
  const {currentSlide } = useSlide()
  const slidesData = [
    { text1: `Hey, I'm Raam \u{1F44B}`, text2: "Let's talk about Gatekeeper Poses in Ashtanga!" },
    { text1: "What the heck is a gatekeeper?", text2: "Gatekeeper poses are Asanas which determine whether or not you are ready to move on to a new pose.", text3: "These poses appear all throughout the Ashtanga practice.", text4: "Ashtanga is organized into subsets of poses, each of which focuses on a particular technique. Throughout each series in Ashtanga, these subsets are recurring, and become progressively more difficult. Hence, Gatekeeper poses act as milestones to determine progress." },
    { text1: "But are these Gatekeepers strict requirements?", text2: "In my opinion, no.", text3: "But first, let's take a look at 4 poses which Yogapedia designates as the key poses of the Ashtanga Primary Series.", text4: "Plus, one bonus pose ;)" }

  ];

  if (currentSlide >= slidesData.length) {
          return null; // or show a loading indicator or error message
      }

      return (
          <Slide
              text1={slidesData[currentSlide].text1}
              text2={slidesData[currentSlide].text2}
              text3 = {slidesData[currentSlide].text3 ? slidesData[currentSlide].text3 : null}
              text4 = {slidesData[currentSlide].text4 ? slidesData[currentSlide].text4 : null}
          />
      );
}

export default Home