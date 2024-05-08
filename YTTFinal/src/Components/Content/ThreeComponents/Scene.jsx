import React, {useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import BackgroundPlane from './BackgroundPlane.jsx'



function Scene() {
  return (
    <Canvas  
      style={{ width: '100%', height: '100vh' }}
      gl={{clearColor: '#333333', alpha: false, clearAlpha: 1}}
    >
      <BackgroundPlane />
    </Canvas>
  )
}

export default Scene