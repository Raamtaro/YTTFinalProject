import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SlideScroller = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Ensure the container is fully ready
        if (!containerRef.current) return;

        // Setting up ScrollTrigger for each slide
        gsap.utils.toArray('.slide').forEach((panel, index) => {
            ScrollTrigger.create({
                trigger: panel,
                scroller: containerRef.current, // ensure ScrollTrigger listens to our container
                start: "top top", // trigger animation when the top of the slide hits the top of the viewport
                end: "bottom top", // end when the bottom of the slide goes above the top of the viewport
                onEnter: () => gsap.to(panel, { autoAlpha: 1, duration: 1 }),
                onLeave: () => gsap.to(panel, { autoAlpha: 0, duration: 1 }),
                onEnterBack: () => gsap.to(panel, { autoAlpha: 1, duration: 1 }),
                onLeaveBack: () => gsap.to(panel, { autoAlpha: 0, duration: 1 }),
                markers: true // This is for debugging
            });
        });

        // Update ScrollTrigger on load and resize
        ScrollTrigger.addEventListener("refresh", () => {
            gsap.set(containerRef.current, { scrollTop: 0 });
        });
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    

    return (
        <div ref={containerRef} className='slide-container'>
            {children}
        </div>
    );
};

export default SlideScroller;
