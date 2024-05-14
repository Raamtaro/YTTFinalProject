import React, { forwardRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import helloFragment from './Shaders/fragment.glsl';
import helloVertex from './Shaders/vertex.glsl';
import { extend, useLoader } from '@react-three/fiber';
import { useSection } from '../../../Contexts/SectionContext.jsx';
import texturePaths from '../../../data/texturePaths.js';




// console.log(helloFragment)
// console.log(helloVertex)

const BackgroundPlaneShaderMaterial = forwardRef((props, ref) => {
    // const {activeSection} = useSection()
    // const textures = useSectionTextures(activeSection)
    // console.log(typeof(textures))
    const texture = useLoader(THREE.TextureLoader, texturePaths.home[0])
    
    

    useEffect(() => {
        if (texture) {
            texture.magFilter = texture.minFilter = THREE.LinearFilter
            texture.needsUpdate = true
        }
    }, [texture])
    const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
        vertexShader: helloVertex,
        fragmentShader: helloFragment,
        uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector4() },
            uMouse: { value: new THREE.Vector2()},
            uTexture: {value: texture}
        }
    }), []);

    return <primitive object={shaderMaterial} ref={ref} attach="material" {...props} />;
});

extend({ BackgroundPlaneShaderMaterial });

export default BackgroundPlaneShaderMaterial;