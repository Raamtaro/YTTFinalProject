import React from 'react'
import { useSlide } from '../../Contexts/SlideContext'
import { useSection } from '../../Contexts/SectionContext'
import gsap from 'gsap'

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

    return (
      <>
          {currentSlide > 0 && (<button className="nav-button prev-button" onClick={handlePrevSlide}>Prev</button>)}
          {currentSlide < bullets - 1  && (<button className="nav-button next-button" onClick={handleNextSlide}>Next</button>)}
      </>
    )
}

export default SlideNavButtons