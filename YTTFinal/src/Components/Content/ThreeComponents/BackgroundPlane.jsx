import React from 'react';
import * as THREE from 'three'
import {useEffect, useRef} from 'react';
import {useFrame, useThree, useLoader} from '@react-three/fiber';
import BackgroundPlaneShaderMaterial from './BackgroundPlaneMaterial.jsx';
import { useSection } from '../../../Contexts/SectionContext.jsx';
import textures from '../../../data/texturePaths.js';
import { useTextures } from '../../../Contexts/TextureLoaderContext.jsx';



 const BackgroundPlane = () => {
    
    const { size, viewport, gl} = useThree();
    const materialRef = useRef();
    const planeRef = useRef();
    // const {textures, loading, progress} = useTextures()

    useEffect(() => {
        let imageAspect = 1. / 1.5
        let a1;
        let a2;
        if (size.height/size.width > imageAspect) {
            a1 = (size.width / size.height) * imageAspect
            a2 = 1
        } else {
            a1 = 1
            a2 = (size.height / size.width) / imageAspect
        }
        materialRef.current.uniforms.uResolution.value.set(size.width, size.height/2, a1, a2)
    }, [size]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.clientX / window.innerWidth;
            const y = 1.0 - (event.clientY / window.innerHeight);
            materialRef.current.uniforms.uMouse.value.set(x, y);
            // console.log(x,y);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    useFrame(({clock}) => {
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    });

    // useFrame(() => {
    //     if (materialRef.current) {
    //         materialRef.current.uniforms.uTexture.value = texture
    //         materialRef.current.uniforms.uTexture.value.needsUpdate = true
    //     }
    // })

    return (
        <mesh ref={planeRef} position={[0, 0, 0]}>
            <planeGeometry args={[viewport.width, viewport.height]} attach="geometry" />
            <BackgroundPlaneShaderMaterial ref={materialRef} texturePath={textures.home[0]}/>

            {/**Below is for debugging */}
            {/* <boxGeometry args={[1,1,1]} />
            <meshBasicMaterial color={"red"} /> */}
        </mesh>
    );
}

export default BackgroundPlane