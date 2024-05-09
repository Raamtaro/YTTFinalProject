import React, {useState, useEffect} from 'react'
import { useSection } from '../../Contexts/SectionContext.jsx'
import './NavStyles/SectionNav.css'

const SectionNav = () => {
  const { setActiveSection } = useSection();

  const handleSectionChange = (section) => {
    setActiveSection(section)
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