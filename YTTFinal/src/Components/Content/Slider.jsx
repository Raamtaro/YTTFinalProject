import React, {useRef, useEffect} from 'react'
import { useSection } from '../../Contexts/SectionContext.jsx'
import SlideNav from '../Navigation/SlideNav.jsx'
import Home from '../Sections/Home.jsx'
import Poses from '../Sections/Poses.jsx'
import Reflections from '../Sections/Reflections.jsx'
import './ContentStyling/SliderRules.css'
import SlideScroller from '../Sections/SlideScroller.jsx'
import { useTextures } from '../../Contexts/TextureLoaderContext.jsx'
import SlideNavButtons from '../Navigation/SlideNavButtons.jsx'
import { useDrag } from '@use-gesture/react'
import gsap from 'gsap'
import { useSlide } from '../../Contexts/SlideContext.jsx'

//Overarching parent component which controls which slide(s) to load within each section

const Slider = () => {  

  const {loading} = useTextures()
  const {activeSection} = useSection()
  const {bullets} = useSection()
  const sliderRef = useRef(null)
  const {currentSlide, goToNextSlide, goToPrevSlide} = useSlide()
  

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />
      case 'Poses':
        return <Poses />
      case 'Reflections':
        return <Reflections />
      default:
        return null
    }
  }

  const handleNextSlide = () => {
    gsap.to(".slide__img img, .slider__text", {
      opacity: 0,
      duration: 0.75,
      onComplete: ()=> {
        goToNextSlide();
        gsap.to(
          ".slide__img img, .slider__text", 
          {
            opacity: 1,
            duration: 5.00,
            ease: "expoScale(0.5,7,none)"
          }
        )
      }
    })
  }

  const handlePrevSlide = () => {
    gsap.to(".slide__img img, .slider__text", {
      opacity: 0,
      duration: 0.75,
      onComplete: ()=> {
        goToPrevSlide();
        gsap.to(
          ".slide__img img, .slider__text", 
          {
            opacity: 1,
            duration: 5.00,
            ease: "expoScale(0.5,7,none)"
          }
        )
      }
    })
  }

  const bind = useDrag(({ down, movement: [mx] }) => {
    if (!down) {
      if (mx < -50 && currentSlide < bullets - 1) {
        handleNextSlide();
      } else if (mx > 50 && currentSlide > 0) {
        handlePrevSlide();
      }
    }
  });

  // useEffect(() => {
  //   const handleWheel = (event) => {
  //     if (event.deltaX < -50 && currentSlide < bullets - 1) {
  //       handleNextSlide();
  //     } else if (event.deltaX > 50 && currentSlide > 0) {
  //       handlePrevSlide();
  //     }
  //   };

  //   const container = sliderRef.current;
  //   container.addEventListener('wheel', handleWheel);

  //   return () => {
  //     container.removeEventListener('wheel', handleWheel);
  //   };
  // }, [currentSlide, bullets]);

  return (
          <>
          {!loading &&         
            <div className = "Slider" ref={sliderRef} {...bind()} style={{touchAction: 'none'}}>
              <SlideScroller>
                {renderSection()}
              </SlideScroller>
              <SlideNav bullets={bullets}/>
              <SlideNavButtons 
              handlePrevSlide={handlePrevSlide}
              handleNextSlide={handleNextSlide}
              />
            </div> 
        }
          </>
  )
}

export default Slider