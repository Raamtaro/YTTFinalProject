import './App.css'
import { SectionProvider } from './Contexts/SectionContext.jsx'
import { TextureProvider } from './Contexts/TextureLoaderContext.jsx'
import { SlideProvider } from './Contexts/SlideContext.jsx'
import Slider from './Components/Content/Slider.jsx'
import SectionNav from './Components/Navigation/SectionNav.jsx'
import Scene from './Components/Content/ThreeComponents/Scene.jsx'


function App() {
  

  return (
    <SectionProvider>
      <TextureProvider>
        <SlideProvider>
          <Scene />
          <SectionNav />
          <Slider />
        </SlideProvider>
      </TextureProvider>
    </SectionProvider>
  )
}

export default App
