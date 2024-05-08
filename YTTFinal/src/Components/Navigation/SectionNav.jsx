import React, {useState, useEffect} from 'react'
import './NavStyles/SectionNav.css'

const SectionNav = () => {
  const [active, setActive] = useState(true)

  return (
    <nav className="nav">
      <ul>
        <li>
        <span>Home</span>
        </li>
        <li>
        <span>Deep Dive</span>
        </li>
        <li>
        <span>Closing Thoughts</span>
        </li>
      </ul>
    </nav>
  )
}

export default SectionNav