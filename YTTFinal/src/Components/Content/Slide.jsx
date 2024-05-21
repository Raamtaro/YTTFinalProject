import React, {useEffect, useRef} from 'react'
import './ContentStyling/SlideRules.css'
import gsap from 'gsap';
import { useSlide } from '../../Contexts/SlideContext';

function Slide({text1, text2, text3, text4, image}) {
  const textRef = useRef();
  const {currentSlide, goToNextSlide, goToPrevSlide} = useSlide()

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 2.0,
        ease: "power2.out"
      }
    );
  }, [text1, text2, text3, text4]);
  return (
    <div className="slide">
      <div className="slide__content">
      {image &&         
          <div className="slide__img">
              <img src={image} alt={null} />
            </div>}
        <div className="slider__text" ref={textRef}>
          {text1 && <div className="slider__text-line">{text1}</div>}
          {text2 && <div className="slider__text-line">{text2}</div>}
          {text3 && <div className="slider__text-line">{text3}</div>}
          {text4 && <div className="slider__text-line">{text4}</div>}
        </div>
      </div>

    </div>


  )
}

export default Slide