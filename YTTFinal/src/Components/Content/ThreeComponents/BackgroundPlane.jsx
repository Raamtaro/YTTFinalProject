import React from 'react';
import {useEffect, useRef} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import BackgroundPlaneShaderMaterial from './BackgroundPlaneMaterial.jsx';


 const BackgroundPlane = () => {

    const { size, viewport, gl} = useThree();
    const materialRef = useRef();
    const planeRef = useRef();

    useEffect(() => {
        materialRef.current.uniforms.uResolution.value.set(size.width, size.height/2)
    }, [size]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.clientX / window.innerWidth;
            const y = 1.0 - (event.clientY / window.innerHeight);
            materialRef.current.uniforms.uMouse.value.set(x, y);
            console.log(x,y);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    useFrame(({clock}) => {
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    });

    return (
        <mesh ref={planeRef} position={[0, 0, 0]}>
            <planeGeometry args={[viewport.width, viewport.height]} attach="geometry" />
            <BackgroundPlaneShaderMaterial ref={materialRef} />

            
            {/* <boxGeometry args={[1,1,1]} />
            <meshBasicMaterial color={"red"} /> */}
        </mesh>
    );
}

export default BackgroundPlane