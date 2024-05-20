import React from 'react'
import { useSlide } from '../../Contexts/SlideContext'
import { useSection } from '../../Contexts/SectionContext'

const SlideNavButtons = () => {
    const {currentSlide, goToNextSlide, goToPrevSlide} = useSlide()
    const {bullets} = useSection()

  return (
    <>
        {currentSlide > 0 && (<button className="nav-button prev-button" onClick={goToPrevSlide}>Prev</button>)}
        {currentSlide < bullets - 1  && (<button className="nav-button next-button" onClick={goToNextSlide}>Next</button>)}
    </>
  )
}

export default SlideNavButtons