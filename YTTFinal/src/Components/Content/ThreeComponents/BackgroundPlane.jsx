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
    const { textures } = useTextures()
    const [dataTexture, setDataTexture] = useState(null)

    // const [texture, setTexture] = useState(textures.home[0]);
    // const [nextTexture, setNextTexture] = useState(textures.home[1]); //This is set up to account for slide transitioning, which comes further down the line

    //Settings and References
    const mouse = useRef({x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0})
    const settings = useRef({
        grid: 64,
        mouse: 0.25,
        strength: .15,
        relaxation: 0.9,
    })
    //*********************** */

    //GUI/Tweaks
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
    //*********************** */

    const createDataTexture = () => {
        const width = settings.current.grid
        const height = settings.current.grid
        const size = width * height
        const data = new Float32Array(4 * size)

        const color = new THREE.Color(0xffffff);

        // const r = Math.floor(color.r * 255);
        // const g = Math.floor(color.g * 255);
        // const b = Math.floor(color.b * 255);

        for (let i = 0; i < size ; i++) {
            let r = Math.random() - 0.49
            let r1 = Math.random() - 0.49
0
            const stride = i*4

            data[stride] = r;
            data[stride + 1] = r1;
            data[stride + 2] = r;
            data[stride + 3] = 1.0;
        }

        const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.FloatType)
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        // texture.generateMipmaps = true;
        texture.needsUpdate = true

        console.log('Created DataTexture:', texture)

        setDataTexture(texture)
        if (materialRef) {
            
            materialRef.current.uniforms.uDataTexture.value = texture;
            materialRef.current.uniforms.uDataTexture.value.needsUpdate = true;
            console.log("Assigned DataTexture to uniform:", texture)
        }
        
    }

    useEffect(()=> {
        createDataTexture()
    }, [])

    useEffect(()=> { //Have to console.log() the value in this way due to asynchronous nature of the useState() hook
        console.log(dataTexture)
        console.log(textures.home[0])
    }, [dataTexture])

    useEffect(() => {
      if (dataTexture) {
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
        materialRef.current.uniforms.uDataTexture.value = dataTexture;
        materialRef.current.uniforms.uDataTexture.value.needsUpdate = true;
        console.log('Updated uniforms with DataTexture:', dataTexture);
      }
    }, [size, dataTexture]);
  
    useFrame(({ clock }) => {
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      }
    });

  
    return (
      <>
          <mesh ref={planeRef} position={[0, 0, 0]}>
            <planeGeometry args={[viewport.width, viewport.height]} attach="geometry" />
            <BackgroundPlaneShaderMaterial ref={materialRef} texture={textures.home[0]} dataTexture={dataTexture} />
          </mesh>
      </>
    );
  };

export default BackgroundPlane