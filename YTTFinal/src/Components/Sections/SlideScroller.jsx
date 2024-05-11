import React, {useState, useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SlideScroller = ({ children }) => {
    const containerRef = useRef(null);
    const [totalHeight, setTotalHeight] = useState(0);

    useEffect(() => {
        let height = window.innerHeight * React.Children.count(children);
        setTotalHeight(height);  // Update state

        const triggers = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: true,
                snap: 1 / (React.Children.count(children) - 1),
                start: "top top",
                end: "+=" + height,
                markers: true
            }
        });

        return () => {
            if (triggers.scrollTrigger) {
                triggers.scrollTrigger.kill();
            }
            triggers.kill();
        };
    }, [children, totalHeight]);  // Including totalHeight to recalculate if it changes

    return (
        <div className='slide-container' ref={containerRef} style={{height: `${totalHeight}px`}}>
            {children}
        </div>
    );
};


export default SlideScroller