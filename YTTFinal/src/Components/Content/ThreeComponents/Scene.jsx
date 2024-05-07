import React, {useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import BackgroundPlane from './BackgroundPlane.jsx'



function Scene() {


  // useEffect(() => {
  //   const canvas = document.querySelector('canvas');
  //   const gl = canvas.getContext('webgl');
  
  //   gl.clearColor(0, 0, 0, 1);
  //   gl.clear(gl.COLOR_BUFFER_BIT);
  // }, []);
  return (
    <Canvas
      
      style={{ width: '100%', height: '100vh' }}
      gl={{clearColor: '#333333', alpha: false, clearAlpha: 1}}
      // camera={{ position: [0, 0, 5] }} 
    >
      <BackgroundPlane />
    </Canvas>
  )
}

export default Scene