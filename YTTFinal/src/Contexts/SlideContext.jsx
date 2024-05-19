import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTextures} from './TextureLoaderContext';
import { useSection } from './SectionContext';


const SlideContext = createContext()

export const useSlide = () => useContext(SlideContext)

export const SlideProvider = () => {

    const { activeSection } = useSection()
    const { textures } = useTextures()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [nextTexture, setNextTexture] = useState(null)
    const [currentTexture, setCurrentTexture] = useState(null)


    //If we change either the active Section, current Slide, or the textures themselves, then we'll have to re-render the page and set the appropriate Texture as well as the next

    useEffect(()=>{
        if (activeSection && textures[activeSection]) {
            setCurrentTexture(textures[activeSection][currentSlide])
            setNextTexture(textures[activeSection][currentSlide + 1] || null)
        }
    },[activeSection, currentSlide, textures])

    
}   