import React, { forwardRef, useMemo } from 'react';
import * as THREE from 'three';
import helloFragment from './Shaders/fragment.glsl';
import helloVertex from './Shaders/vertex.glsl';
import { extend } from '@react-three/fiber';

console.log(helloFragment)
console.log(helloVertex)

const BackgroundPlaneShaderMaterial = forwardRef((props, ref) => {
    const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
        vertexShader: helloVertex,
        fragmentShader: helloFragment,
        uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2() }
        }
    }), []);

    return <primitive object={shaderMaterial} ref={ref} attach="material" {...props} />;
});

extend({ BackgroundPlaneShaderMaterial });

export default BackgroundPlaneShaderMaterial;