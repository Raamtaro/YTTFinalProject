import React, { forwardRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import helloFragment from './Shaders/fragment.glsl';
import helloVertex from './Shaders/vertex.glsl';
import { extend } from '@react-three/fiber';

const BackgroundPlaneShaderMaterial = forwardRef((props, ref) => {
    const { texture, dataTexture} = props

    const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
        vertexShader: helloVertex,
        fragmentShader: helloFragment,
        uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector4() },
            uMouse: { value: new THREE.Vector2()},
            uTexture: {value: texture},
            uDataTexture: {value: dataTexture}
        }
    }), [texture, dataTexture]);

    return <primitive object={shaderMaterial} ref={ref} attach="material" {...props} />;
});

extend({ BackgroundPlaneShaderMaterial });

export default BackgroundPlaneShaderMaterial;