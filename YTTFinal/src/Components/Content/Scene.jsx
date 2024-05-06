import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'


function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Box position = {[0, 0, 0]}>
        <meshBasicMaterial attach="material" color="red"/>
      </Box>
    </Canvas>
  )
}

export default Scene