import { Environment, PresentationControls, useGLTF } from '@react-three/drei'
import React from 'react'

import matrixScene from '../assets/3d/sky.glb'

const Matrix = () => {
    const matrix = useGLTF(matrixScene);
    return (
    <mesh>
        <Environment preset='warehouse'/>
        <PresentationControls global polar={[-0.4,0.2]} azimuth={[-0.4,0.2]}>
            <primitive object={matrix.scene} position= {[0,-2,-2]}>
            </primitive> 
        </PresentationControls>
    </mesh>

    
  )
}

export default Matrix