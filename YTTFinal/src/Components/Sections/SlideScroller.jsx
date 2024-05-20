import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ReactFullpage from '@fullpage/react-fullpage';
import { useSlide } from '../../Contexts/SlideContext';




const SlideScroller = ({ children }) => {
    const sectionRef = useRef(null)
    const {goToNextSlide, goToPrevSlide} = useSlide()

    // useEffect(()=>{
    //   const handleWheel = (event) => {
    //     if (event.deltaY > 0) {
    //       // console.log('I am being triggered')
    //       goToNextSlide();
    //     } else if (event.deltaY < 0) {
    //       // console.log('So am I')
    //       goToPrevSlide();
    //     }
    //   }
    //   window.addEventListener('wheel', handleWheel);
    //   return () => {
    //     window.removeEventListener('wheel', handleWheel);
    //   }
      
    // }, []) //NOTE: Keeping the dependency array empty as I am confident that goToNext and goToPrev are not going to change while the user is using the app

    return (
        <ReactFullpage
          licenseKey={'895M9-77MS8-TIH37-B8J3J-MAWYP'}
          
          scrollingSpeed={2500}
          easingcss3={'cubic-bezier(0.265, 0.825, 0.795, 0.245)'}
          credits='false'
          
          
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                {children}

              </ReactFullpage.Wrapper>
            );
          }}
        />
      );
};


export default SlideScroller;