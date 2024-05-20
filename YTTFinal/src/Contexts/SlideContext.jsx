import React, { createContext, useContext, useState, useEffect, Children } from 'react';
import { useTextures} from './TextureLoaderContext';
import { useSection } from './SectionContext';


const SlideContext = createContext()

export const useSlide = () => useContext(SlideContext)

export const SlideProvider = ( {children}) => {

    const { activeSection } = useSection()
    const { textures, loading } = useTextures()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [nextTexture, setNextTexture] = useState(null)
    const [currentTexture, setCurrentTexture] = useState(null)


    //If we change either the active Section, current Slide, or the textures themselves, then we'll have to re-render the page and set the appropriate Texture as well as the next
    useEffect(()=>{
        if (!loading && activeSection) {
            setCurrentSlide(0)
            console.log('Resetting currentSlide to 0');
        }
    }, [activeSection, loading])


    useEffect(()=>{
        // //Debug Logs
        // console.log('useEffect triggered');
        // console.log('Loading:', loading);
        // console.log('Active Section:', activeSection);
        // console.log('Textures:', textures);
        //******  */
        if (!loading && activeSection && textures[activeSection.toLowerCase()]) {
            // //Debug log
            // console.log("Initialising variables")
            // //****** */
            const initialTexture = textures[activeSection.toLowerCase()][currentSlide] || null;
            const nextTexture = textures[activeSection.toLowerCase()][currentSlide + 1] || null;
            // //Debug logs
            // console.log("Variables Initialised")
            // console.log('Initial Texture:', initialTexture);
            // console.log('Next Texture:', nextTexture);
            // //******  */
            setCurrentTexture(initialTexture);
            setNextTexture(nextTexture);

        }
    },[activeSection, currentSlide, textures, loading])





    //We need to travel to the next slide or the previous Slide
    const goToNextSlide = () => {
        setCurrentSlide((prev) => prev + 1)
    }

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0)) //If we're at zero, remain at zero
    }

    return (
        <SlideContext.Provider value = {
            {
                currentSlide,
                nextTexture,
                currentTexture,
                goToNextSlide,
                goToPrevSlide
            }
        }>
            {children}
        </SlideContext.Provider>
    )
}   