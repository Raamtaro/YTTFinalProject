import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import BackgroundPlaneShaderMaterial from './BackgroundPlaneMaterial.jsx';
import { useTextures } from '../../../Contexts/TextureLoaderContext.jsx';

const BackgroundPlane = () => {
    const { size, viewport } = useThree();
    const materialRef = useRef();
    const planeRef = useRef();
    const { textures, loading } = useTextures();

    // const [texture, setTexture] = useState(textures.home[0]);
    // const [nextTexture, setNextTexture] = useState(textures.home[1]); //This is set up to account for slide transitioning, which comes further down the line

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



