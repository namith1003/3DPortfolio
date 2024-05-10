import React from 'react'

import sharkScene from '../assets/3d/shark.glb'
import { useGLTF } from '@react-three/drei';

const Shark = () => {
    const {scene, animations} = useGLTF(sharkScene);
  return (
    <mesh position = {[0.5,0.5,2]} scale = {[1,1,1]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Shark