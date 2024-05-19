import React from 'react'
import * as THREE from 'three'
import {useState, useEffect, useRef} from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import BackgroundPlaneShaderMaterial from './BackgroundPlaneMaterial.jsx'
import GUI from 'lil-gui'
import clamp from '../../../utils/clamp.js'
import { useSlide } from '../../../Contexts/SlideContext.jsx'

// /****Imported for debugging****************************************** */
// import { useTextures } from '../../../Contexts/TextureLoaderContext.jsx'
// import { useSection } from '../../../Contexts/SectionContext.jsx'
// /******************************************************************** */



const BackgroundPlane = () => {
    // //**Imported for debugging */
    // const {activeSection} = useSection() 
    // const { textures, loading } = useTextures()
    // //************************ */

    const { currentTexture, nextTexture, currentSlide } = useSlide()
    const { size, viewport } = useThree()
    const materialRef = useRef()
    const planeRef = useRef()
    const [dataTexture, setDataTexture] = useState(null)


    // useEffect(()=> { //Debug Logs
    //     // console.log(textures['home'][0])
    //     // console.log(currentSlide)
    //     // console.log(textures[activeSection.toLowerCase()][0]) //THIS IS RETURNING THE EXPECTED TEXTURE
    //     // console.log(textures[activeSection.toLowerCase()][currentSlide]) //THIS IS RETURNING THE EXPECTED TEXTURE
    //     console.log(currentTexture)
    //     console.log(currentSlide)
    //     console.log(nextTexture)

    // }, [currentTexture, nextTexture, currentSlide])


    //Settings and References
    const mouse = useRef({x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0})
    const settings = useRef({
        grid: 31,
        mouse: 0.41,
        strength: 0.01,
        relaxation: 0.98,
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

        for (let i = 0; i < size ; i++) {
            let r = Math.random() * 255 - 125 
            let r1 = Math.random() * 255 - 125

            const stride = i*4

            data[stride] = r;
            data[stride + 1] = r1;
            data[stride + 2] = r;
            data[stride + 3] = 255;
        }

        const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.FloatType)
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        texture.needsUpdate = true

        setDataTexture(texture)
        if (materialRef) {
            
            materialRef.current.uniforms.uDataTexture.value = texture;
            materialRef.current.uniforms.uDataTexture.value.needsUpdate = true;
            // console.log("Assigned DataTexture to uniform:", texture)
        }
        
    }

    const updateDataTexture = () => {
        if (!dataTexture) return;

        const data = dataTexture.image.data
        const width = settings.current.grid
        const height = settings.current.grid

        for (let i = 0; i < data.length; i += 4) {
            data[i] *= settings.current.relaxation;
            data[i + 1] *= settings.current.relaxation
        }

        const gridMouseX = width * mouse.current.x
        const gridMouseY = height * (1 - mouse.current.y)
        const maxDist = width * settings.current.mouse
        const aspect = size.height / size.width

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const distance = ((gridMouseX - i)**2) / aspect + (gridMouseY - j) ** 2;
                const maxDistSq = maxDist**2;

                if (distance < maxDistSq) {
                    let index = 4 * (i + width*j)
                    let power = maxDist / Math.sqrt(distance)
                    power = clamp(power, 0, 10)
                    data[index] += settings.current.strength * 100 * mouse.current.vX * power;
                    data[index+1] -= settings.current.strength * 100 * mouse.current.vY * power;
                }
            }
        }

        mouse.current.vX *= 0.9;
        mouse.current.vY *= 0.9;
        dataTexture.needsUpdate = true;


    }

    useEffect(()=> {
        createDataTexture()
    }, [])

    useEffect(()=>{
        const handleResize = () =>{
            createDataTexture()
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouse.current.x = event.clientX / window.innerWidth
            mouse.current.y = event.clientY / window.innerHeight
            mouse.current.vX = mouse.current.x - mouse.current.prevX
            mouse.current.vY = mouse.current.y - mouse.current.prevY
            mouse.current.prevX = mouse.current.x
            mouse.current.prevY = mouse.current.y
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // useEffect(()=> { //Have to console.log() the value in this way due to asynchronous nature of the useState() hook
    //     console.log(dataTexture)
    //     console.log(textures.home[0])
    // }, [dataTexture])

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
        // materialRef.current.uniforms.uDataTexture.value = dataTexture;
        // materialRef.current.uniforms.uDataTexture.value.needsUpdate = true;
        // console.log('Updated uniforms with DataTexture:', dataTexture);
      }
    }, [size, dataTexture]);

    useFrame(({ clock }) => {
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
        updateDataTexture();
      }
    });

    return (
      <>
          <mesh ref={planeRef} position={[0, 0, 0]}>
            <planeGeometry args={[viewport.width, viewport.height]} attach="geometry" />
            <BackgroundPlaneShaderMaterial ref={materialRef} texture={currentTexture} nextTexture={nextTexture} dataTexture={dataTexture} />
          </mesh>
      </>
    );
  };

export default BackgroundPlane