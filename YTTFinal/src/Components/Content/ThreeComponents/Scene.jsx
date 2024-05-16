import React, {useEffect} from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import BackgroundPlane from './BackgroundPlane.jsx'
import { useTextures } from '../../../Contexts/TextureLoaderContext.jsx'



function Scene() {
  const {loading} = useTextures()
  return (
    <>
    {loading ? (
      <div className="loading-screen">
        <div className="loading-progress">
          Loading...
        </div>
      </div>
    ) :(
      <Canvas  
      style={{ width: '100%', height: '100vh' }}
      gl={(canvas) => {
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x333333);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.physicallyCorrectLights = true;
        return renderer;
      }}
    >
      <BackgroundPlane />
    </Canvas>
    ) }
    </>

  )
}

export default Scene