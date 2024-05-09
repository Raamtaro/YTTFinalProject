import React, {Children, createContext, useContext, useState, useEffect} from 'react'

const SectionContext = createContext()

export const useSection = () => useContext(SectionContext);

export const SectionProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('Home');
    const [bullets, setBullets] = useState(0)

    const sectionToBullets = {
        Home: 3,
        Poses: 5,
        Reflections: 4
    }

    useEffect(() => {
        setBullets(sectionToBullets[activeSection])
    }, [activeSection])

    return (
        <SectionContext.Provider value={{activeSection, setActiveSection, bullets}}>
            {children}
        </SectionContext.Provider>
    )
}