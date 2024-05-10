import React from 'react'

import sharkScene from '../assets/3d/shark.glb'
import { useGLTF } from '@react-three/drei';

const Shark = () => {
    const {scene, animations} = useGLTF(sharkScene);
  return (
    <mesh>
        <primitive object={scene} />
    </mesh>
  )
}

export default Shark