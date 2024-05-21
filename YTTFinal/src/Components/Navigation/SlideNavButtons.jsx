import React from 'react'
import { useSlide } from '../../Contexts/SlideContext'
import { useSection } from '../../Contexts/SectionContext'
import gsap from 'gsap'
import { useDrag } from '@use-gesture/react'

const SlideNavButtons = ({handleNextSlide, handlePrevSlide}) => {
    const {currentSlide, goToNextSlide, goToPrevSlide} = useSlide()
    const {bullets} = useSection()

    

    return (
      <>
          {currentSlide > 0 && (<button className="nav-button prev-button" onClick={handlePrevSlide}>Prev</button>)}
          {currentSlide < bullets - 1  && (<button className="nav-button next-button" onClick={handleNextSlide}>Next</button>)}
      </>
    )
}

export default SlideNavButtons