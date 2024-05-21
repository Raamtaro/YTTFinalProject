import React from 'react'
import Slide from '../Content/Slide.jsx'
import SlideScroller from './SlideScroller.jsx'
import { useSlide } from '../../Contexts/SlideContext.jsx';
import imgPaths from '../../data/imgPaths.js';

const Poses = () => {
  const {currentSlide } = useSlide()
  const slidesData = [
    { text1: "Uttihita Hasta Padangustasana", text2: "This is a set of balancing poses.", text3: "These poses are considred key for the strength and concentration required to maintain balance for 15 breaths in a row, without transition.", text4: "This is also a foundation for balancing poses found in the advanced A series, such as Dancer's Pose.", image: imgPaths.poses[0] },
    { text1: "Marichyasana D", text2: "This is the last in a set of intense twists", text3: "This is a key pose because of the obstacle that the practitioner needs to overcome in order to bind. The combination of half lotus and the drawn in heel creates a quite significant barrier when attempting to bind.", text4: "It's also commonly considered as a direct gatekeeper to the first pose in intermediate series: Pasasana", image: imgPaths.poses[1] },
    { text1: "Supta Kurmasana", text2: "Ashtanga uses this pose to introduce the technique of legs behind the shoulders, then head, and eventually the neck.", text3: "This directly gatekeeps a series of specific poses which expand on the technique in the Intermediate series.", text4: "It's also worth noting that this pose is a great way to remind the practitioner to roll their shoulders forward when binding their arms behind their back. This is a crucial technique when approaching certain twists in Intermediate and Advanced series.", image: imgPaths.poses[2] },
    { text1: "Urdhva Dhanurasana", text2: "This is a deep backbend and inversion which happens during the finishing sequence in any practice, whether primary or above.", text3: "Full wheel is one of the most commonly known gatekeepers.", text4: "Being able to perform dropbacks while unassisted is a typical criteria that instructors use before letting their students move on to Intermediate series. Personally, I disagree with this, but more on that shortly. :)", image: imgPaths.poses[3] },
    { text1: "Honorable Mention: Baddha Konasana", text2: "There's a combination of movement here: external rotation of the thighs to keep the hips grounded, straightening out of the back, and using the elbows to drive your knees toward the ground.", text3: "This pose prepares you for virtually EVERYTHING, including the aforementioned poses. I'm not kidding.", text4: "In my practice, I've noticed more markedly elevation in my jump backs and jump throughs immediately after coming out of this pose. Every single time.", image: imgPaths.poses[4]}
  ];

  return (

    <Slide
      text1={slidesData[currentSlide]?.text1}
      text2={slidesData[currentSlide]?.text2}
      text3={slidesData[currentSlide]?.text3}
      text4={slidesData[currentSlide]?.text4}
      image = {slidesData[currentSlide]?.image}
      

    />
  )
}

export default Poses