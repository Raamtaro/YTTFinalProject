import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ReactFullpage from '@fullpage/react-fullpage';
import { useSlide } from '../../Contexts/SlideContext';
import throttle from '../../utils/throttle';




const SlideScroller = ({ children }) => {
    const containerRef = useRef(null)
    const {goToNextSlide, goToPrevSlide, currentSlide} = useSlide()

    useEffect(()=>{
      const handleScroll = () => {
        const slides = containerRef.current.children;
        Array.from(slides).forEach((slide,index) => {
          const rect = slide.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (index > currentSlide) {
              goToNextSlide();
            } else if (index < currentSlide) {
              goToPrevSlide();
            }
          }
        })
      }
      const container = containerRef.current;
      container.addEventListener('scroll', handleScroll)
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }, [currentSlide])

  return (
    <div className="slide-container" ref={containerRef}>
      {children}
    </div>
  )
};


export default SlideScroller;