import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ReactFullpage from '@fullpage/react-fullpage';




const SlideScroller = ({ children }) => {
    const sectionRef = useRef(null)
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
