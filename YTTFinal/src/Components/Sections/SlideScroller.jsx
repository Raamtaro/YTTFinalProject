import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const SlideScroller = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        console.log("container before GSAP manipulation:", containerRef.current)
        const triggers = gsap.to(containerRef.current.children, {
            yPercent: -100 * (React.Children.count(children) - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: true,
                snap: 1 / (React.Children.count(children) - 1),
                start: "top top",
                end: () => "+=" + containerRef.current.offsetWidth
            }
        })

        console.log("GSAP ScrollTrigger applied:", triggers.scrollTrigger)
        return () => {
            if (triggers.scrollTrigger) {
                triggers.scrollTrigger.kill();
            }
            triggers.kill()
        }

    }, [children])
    
    return (
        <div className='slide-container' ref={containerRef}>
            {children}
        </div>
    )
}

export default SlideScroller