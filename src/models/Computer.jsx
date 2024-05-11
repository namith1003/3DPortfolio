import {Html, Environment, PresentationControls, useGLTF} from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'

import computerScene from '../assets/3d/computers.glb';

export default function Computer() {
    const {camera} = useThree()
    const {scene, animations} = useGLTF(computerScene)

    return (
        <>
            <Environment preset='warehouse'/>
            <PresentationControls global polar={[-0.4,0.2]} azimuth={[-0.4,0.2]}>
                <primitive object={scene} position= {[0,-3,-2]}>
                    <Html>
                        <iframe src= "https://treshan.me"/>
                    </Html>
                </primitive> 
            </PresentationControls>
        </>
    )
}
