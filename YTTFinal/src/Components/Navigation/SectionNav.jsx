import React, {useState, useEffect} from 'react'
import { useSection } from '../../Contexts/SectionContext.jsx'
import './NavStyles/SectionNav.css'
import gsap from 'gsap'

const SectionNav = () => {
  const { setActiveSection } = useSection();

  const handleSectionChange = (section) => {
    gsap.to(".Slider", {
      opacity: 0,
      duration: 0.75,
      onComplete: () => {
        setActiveSection(section)

        gsap.to(".Slider", {
          opacity: 1,
          duration: 2.0
        })
      }
    })
  }

  return (
    <nav className="nav">
      <ul>
        <li onClick={() => handleSectionChange('Home')}>
        <span>Home</span>
        </li>
        <li onClick={() => handleSectionChange('Poses')}>
        <span>Deep Dive</span>
        </li>
        <li onClick={() => handleSectionChange('Reflections')}>
        <span >Closing Thoughts</span>
        </li>
      </ul>
    </nav>
  )
}

export default SectionNav