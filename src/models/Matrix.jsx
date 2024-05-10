import { useGLTF } from '@react-three/drei'
import React from 'react'

import matrixScene from '../assets/3d/sky.glb'

const Matrix = () => {
    const matrix = useGLTF(matrixScene);
    return (
    <mesh>
        <primitive object={matrix.scene} />
    </mesh>
  )
}

export default Matrix