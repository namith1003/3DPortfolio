import { Environment, PresentationControls, useGLTF } from '@react-three/drei'
import React from 'react'

import matrixScene from '../assets/3d/spaces.glb'

const Matrix = () => {
    const matrix = useGLTF(matrixScene);
    return (
    <mesh scale={20}>
        <PresentationControls global polar={[-0.4,0.2]} azimuth={[-0.4,0.2]}>
            <primitive object={matrix.scene} position= {[0,-0.1,-0.1]}>
            </primitive> 
        </PresentationControls>
    </mesh>

    
  )
}

export default Matrix