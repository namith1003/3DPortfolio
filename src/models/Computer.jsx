import {Html, Environment, PresentationControls, useGLTF} from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'

import computerScene from '../assets/3d/bedroom.glb';

import About from '../pages/About';

export default function Computer() {
    const {camera} = useThree()
    const {scene, animations} = useGLTF(computerScene)

    return (
        <>
            <Environment preset='warehouse'/>
            <PresentationControls global polar={[-0.1,0.1]} azimuth={[-0.1,0.1]} rotation={[0.3,-0.9,0]}>
                <primitive object={scene} position= {[4,0.5,3]} >
                    <Html wrapperClass='monitor' position={[-1.91,1.245,-0.47]} transform rotation={[1.7, 1.65, -1.7]} distanceFactor={0.24}>
                        <iframe src= "https://treshan.me"/>
                    </Html>
                </primitive> 
            </PresentationControls>
        </>
    )
}
