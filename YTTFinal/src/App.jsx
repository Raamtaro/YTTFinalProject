import './App.css'
import { SectionProvider } from './Contexts/SectionContext.jsx'
import Slider from './Components/Content/Slider.jsx'
import SectionNav from './Components/Navigation/SectionNav.jsx'
import Scene from './Components/Content/ThreeComponents/Scene.jsx'


function App() {
  

  return (
    <SectionProvider>
      <Scene />
      <SectionNav />
      <Slider />
    </SectionProvider>
  )
}

export default App
