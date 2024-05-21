import React from 'react'
import { useSlide } from '../../Contexts/SlideContext'
import { useSection } from '../../Contexts/SectionContext'
import gsap from 'gsap'
import { useDrag } from '@use-gesture/react'

const SlideNavButtons = () => {
    const {currentSlide, goToNextSlide, goToPrevSlide} = useSlide()
    const {bullets} = useSection()

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

    return (
      <>
          {currentSlide > 0 && (<button className="nav-button prev-button" onClick={handlePrevSlide}>Prev</button>)}
          {currentSlide < bullets - 1  && (<button className="nav-button next-button" onClick={handleNextSlide}>Next</button>)}
      </>
    )
}

export default SlideNavButtons