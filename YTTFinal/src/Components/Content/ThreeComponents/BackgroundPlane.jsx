import React from 'react'
import * as THREE from 'three'
import {useState, useEffect, useRef} from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import BackgroundPlaneShaderMaterial from './BackgroundPlaneMaterial.jsx'
import { useTextures } from '../../../Contexts/TextureLoaderContext.jsx'
import GUI from 'lil-gui'

const BackgroundPlane = () => {
    const { size, viewport } = useThree()
    const materialRef = useRef()
    const planeRef = useRef()
    const { textures, loading } = useTextures()
    const [dataTexture, setDataTexture] = useState(null)

    // const [texture, setTexture] = useState(textures.home[0]);
    // const [nextTexture, setNextTexture] = useState(textures.home[1]); //This is set up to account for slide transitioning, which comes further down the line

    const mouse = useRef({x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0})
    const settings = useRef({
        grid: 64,
        mouse: 0.25,
        strength: .15,
        relaxation: 0.9,
    })

    useEffect(()=>{
        const gui = new GUI();
        gui.add(settings.current, 'grid', 2, 1000, 1).onFinishChange(()=> {
            createDataTexture()
        }) //come back to add .onFinishChange(()=>{}) callback to createDataTexture()
        gui.add(settings.current, 'mouse', 0, 1, 0.01)
        gui.add(settings.current, 'strength', 0, 1, 0.01)
        gui.add(settings.current, 'relaxation', 0, 1, 0.01)

        return () => gui.destroy()
    }, [])

    const createDataTexture = () => {
        const width = settings.current.grid
        const height = settings.current.grid
        const size = width * height
        const data = new Float32Array(3 * size)

        for (let i = 0; i < size ; i++) {
            const stride = i * 3;
            data[stride] = Math.random() * 255 - 125;
            data[stride + 1] = Math.random() * 255 - 125;
            data[stride + 2] = Math.random() * 255 - 125;
        }

        const texture = new THREE.DataTexture(data, width, height, THREE.RGBFormat, THREE.FloatType)
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        texture.needsUpdate = true

        setDataTexture(texture)
        console.log(texture)
    }

    useEffect(() => {
      if (!loading) {
        let imageAspect = 1.0 / 1.5;
        let a1, a2;
        if (size.height / size.width > imageAspect) {
          a1 = (size.width / size.height) * imageAspect;
          a2 = 1;
        } else {
          a1 = 1;
          a2 = (size.height / size.width) / imageAspect;
        }
        materialRef.current.uniforms.uResolution.value.set(size.width, size.height / 2, a1, a2);
      }
    }, [size, loading]);
  
    useFrame(({ clock }) => {
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      }
    });

  
    return (
      <>
        {loading ? (
          <div className="loading-screen">
            <div className="loading-progress">
              Loading...
            </div>
          </div>
        ) : (
          <mesh ref={planeRef} position={[0, 0, 0]}>
            <planeGeometry args={[viewport.width, viewport.height]} attach="geometry" />
            <BackgroundPlaneShaderMaterial ref={materialRef} texture={textures.home[0]} />
          </mesh>
        )}
      </>
    );
  };

export default BackgroundPlane



