import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ReactFullpage from '@fullpage/react-fullpage';
import { useSlide } from '../../Contexts/SlideContext';
import throttle from '../../utils/throttle';
import SlideNavButtons from '../Navigation/SlideNavButtons';




const SlideScroller = ({ children }) => {
    const containerRef = useRef(null)
    const {goToNextSlide, goToPrevSlide, currentSlide} = useSlide()

    // useEffect(()=>{
    //   const handleScroll = throttle(()=> {
    //     console.log("Scroll Handle Triggered")
    //     const slides = containerRef.current.children;
    //     console.log("slides:", slides)
    //     Array.from(slides).forEach((slide, index)=> {
          
    //       const rect = slide.getBoundingClientRect();
    //       console.log('Slide index:', index, 'Rect:', rect);

    //       if (rect.top < window.innerHeight && rect.bottom > 0) {
    //         console.log('Slide in view:', index);
    //         if (index > currentSlide) {
    //           console.log("next Triggered")
    //           goToNextSlide()
    //         }
    //         else {
    //           console.log("previous triggered")
    //           goToPrevSlide
    //         }
    //       }
    //     })
    //   }, 500)
    //   const container = containerRef.current;
    //   container.addEventListener('scroll', handleScroll)
    //   return () => {
    //     container.removeEventListener('scroll', handleScroll)
    //   }
    // }, [currentSlide])

  return (
    <div className="slide-container" ref={containerRef}>
      {children}
      
    </div>
  )
};


export default SlideScroller;