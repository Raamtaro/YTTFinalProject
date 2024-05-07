import React from 'react';
import {useEffect, useRef} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import BackgroundPlaneShaderMaterial from './BackgroundPlaneMaterial.jsx';


function BackgroundPlane() {

    const { size, viewport} = useThree();
    const materialRef = useRef();
    const planeRef = useRef();

    useEffect(() => {
        materialRef.current.uniforms.uResolution.value.set(size.width, size.height/2)
    }, [size]);

    useFrame(({clock}) => {
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    });

    return (
        <mesh ref={planeRef} position={[0, 0, 0]}>
            <planeGeometry args={[viewport.width, viewport.height]} attach="geometry" />
            <BackgroundPlaneShaderMaterial ref={materialRef} />
            {/* <boxGeometry args={[1,1,1]} /> */}
            {/* <meshBasicMaterial color={"red"} /> */}
        </mesh>
    );
}

export default BackgroundPlane