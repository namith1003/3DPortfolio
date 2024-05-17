import {Html, Environment, PresentationControls, useGLTF, CameraShake} from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {FirstPersonControls} from 'three/examples/jsm/controls/FirstPersonControls.js';
import gsap from 'gsap';
import React, { Suspense, useState, useEffect, useRef } from 'react';

import computerScene from '../assets/3d/bedroom.glb';

import About from '../pages/About';

export default function Computer() {
    const {nodes, materials} = useGLTF(computerScene);
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const { scene } = useGLTF(computerScene);
    const [position, setPosition] = useState([0, 0, 0]);
    const [targetPosition, setTargetPosition] = useState([0, 0, 0]);

    const controlsRef = useRef();

    // Function to handle mesh clicks
    const handleMeshClick = (newPosition) => {
        setTargetPosition(newPosition);
    };

    useEffect(() => {
        console.log('position', position);
        if (controlsRef.current) {
          gsap.to(controlsRef.current.position, { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2], duration: 1 });
        }
      }, [targetPosition]);
    

    return (
        <>
            <Environment preset='warehouse'/>
            <PresentationControls global polar={[-0.1,0.1]} azimuth={[-0.1,0.1]} rotation={[0.3,-0.9,0]} >
            <group ref={controlsRef} onClick={() => handleMeshClick([1, 1, 1])}>
                    <Html wrapperClass='monitor' position={[-1.9065,1.246,-0.47]} transform rotation={[1.56, 1.66, -1.56]} distanceFactor={0.241} >
                        <iframe src= "https://treshan.me"/>
                    </Html>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={1.147}>
                    <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_Material_0.geometry}
                        material={materials.Material}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[200, 500, 200]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_Material017_0.geometry}
                        material={materials['Material.017']}
                        position={[-186.548, 66.479, 53.676]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[2.82, 27.101, 57.812]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere_Material016_0.geometry}
                        material={materials['Material.016']}
                        position={[-182.724, 65.012, 29.885]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={2.337}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_Material001_0.geometry}
                        material={materials['Material.001']}
                        position={[85.603, 157.079, -161.953]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[48.513, 11.904, 14.731]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003_Material012_0.geometry}
                        material={materials['Material.012']}
                        position={[78.787, 25.838, -71.783]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[63.494, 90.594, 7.459]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube004__0.geometry}
                        material={materials['Cube.004__0']}
                        position={[79.084, 35.333, -73.599]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[59.992, 89.019, 2.127]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube005_Material003_0.geometry}
                        material={materials['Material.003']}
                        position={[0.954, 0, -91.695]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube006_Material013_0.geometry}
                        material={materials['Material.013']}
                        position={[-0.541, -4.141, -121.957]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[102.425, 18.302, 115.772]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube007_Material011_0.geometry}
                        material={materials['Material.011']}
                        position={[111.009, 41.708, -150.872]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[24.989, 10.918, 5.374]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008_Material010_0.geometry}
                        material={materials['Material.010']}
                        position={[47.094, 41.708, -150.872]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[24.989, 10.918, 5.374]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube009_Material018_0.geometry}
                        material={materials['Material.018']}
                        position={[167.524, 26.957, -147.569]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={18.794}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube010_Material006_0.geometry}
                        material={materials['Material.006']}
                        position={[-151.435, 57.371, -82.081]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[35.812, 74.826, 1.39]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube011_Material009_0.geometry}
                        material={materials['Material.009']}
                        position={[-122.201, 31.805, -13.913]}
                        rotation={[-Math.PI / 2, 0.128, 0]}
                        scale={[0.77, 0.763, 24.607]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube012_Material009_0.geometry}
                        material={materials['Material.009']}
                        position={[-122.201, 31.805, -150.567]}
                        rotation={[-Math.PI / 2, 0.128, 0]}
                        scale={[0.77, 0.763, 24.607]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube013_Material009_0.geometry}
                        material={materials['Material.009']}
                        position={[-178.355, 31.805, -150.567]}
                        rotation={[-Math.PI / 2, -0.128, -Math.PI]}
                        scale={[0.77, 0.763, 24.607]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_Material009_0.geometry}
                        material={materials['Material.009']}
                        position={[-178.355, 31.805, -10.063]}
                        rotation={[-Math.PI / 2, -0.128, -Math.PI]}
                        scale={[0.77, 0.763, 24.607]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube015_Material005_0.geometry}
                        material={materials['Material.005']}
                        position={[458.185, 86.41, -72.675]}
                        rotation={[-Math.PI / 2, -0.099, 0]}
                        scale={[1.143, 32.389, 19.896]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube016_Material020_0.geometry}
                        material={materials['Material.020']}
                        position={[-152.305, 50.124, -127.51]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[35.812, 18.766, 5.555]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere001_Material016_0.geometry}
                        material={materials['Material.016']}
                        position={[-116, 50.235, -127.632]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={1.339}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube017_Material004_0.geometry}
                        material={materials['Material.004']}
                        position={[-155.062, 78.67, -134.159]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[20.776, 8.169, 19.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube018_Material007_0.geometry}
                        material={materials['Material.007']}
                        position={[-138.826, 58.987, -72.257]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[9.881, 25.314, 0.722]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019_Material018_0.geometry}
                        material={materials['Material.018']}
                        position={[-95.216, 122.701, -156.004]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[43.951, 11.188, 1.359]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube020_Material021_0.geometry}
                        material={materials['Material.021']}
                        position={[-131.92, 133.821, -156.683]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[2.425, 9.766, 9.766]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube021_Material022_0.geometry}
                        material={materials['Material.022']}
                        position={[-126.599, 133.821, -156.683]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[2.425, 9.766, 9.766]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube022_Material023_0.geometry}
                        material={materials['Material.023']}
                        position={[-121.361, 133.821, -156.683]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[2.425, 9.766, 9.766]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube023_Material043_0.geometry}
                        material={materials['Material.043']}
                        position={[-114.793, 132.322, -156.683]}
                        rotation={[-Math.PI / 2, -0.266, 0]}
                        scale={[2.071, 8.34, 8.34]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube024_Material024_0.geometry}
                        material={materials['Material.024']}
                        position={[-93.498, 126.56, -156.683]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[2.425, 9.766, 9.766]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube025_Material021_0.geometry}
                        material={materials['Material.021']}
                        position={[-93.498, 131.709, -156.683]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[2.425, 9.766, 9.766]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube026_Material023_0.geometry}
                        material={materials['Material.023']}
                        position={[-93.498, 136.851, -156.683]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[2.425, 9.766, 9.766]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_Material019_0.geometry}
                        material={materials['Material.019']}
                        position={[-66.319, 129.448, -154.161]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={5.739}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Icosphere_Material020_0.geometry}
                        material={materials['Material.020']}
                        position={[-65.831, 130.041, -156.284]}
                        rotation={[-1.834, 0.423, -0.349]}
                        scale={0.591}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_Material044_0.geometry}
                        material={materials['Material.044']}
                        position={[-107.432, 36.706, -90.177]}
                        rotation={[-Math.PI / 2, 0, 0.5]}
                        scale={[18.608, 19.096, 1.655]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_Material025_0.geometry}
                        material={materials['Material.025']}
                        position={[-107.444, 33.388, -90.384]}
                        rotation={[-Math.PI / 2, 0, 0.5]}
                        scale={[9.638, 9.638, 1.74]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube028_Material044_0.geometry}
                        material={materials['Material.044']}
                        position={[-92.385, 63.879, -100.177]}
                        rotation={[0, Math.PI / 2 + 0.5, 0]}
                        scale={[18.608, 23.729, 1.655]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere002_Material026_0.geometry}
                        material={materials['Material.026']}
                        position={[122.398, 37.019, 122.064]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={35.853}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_Material015_0.geometry}
                        material={materials['Material.015']}
                        position={[-172.286, 20.975, 6.082]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={13.202}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube029_Material008_0.geometry}
                        material={materials['Material.008']}
                        position={[-139.029, 58.355, -72.257]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[9.881, 25.314, 0.722]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube030_Material014_0.geometry}
                        material={materials['Material.014']}
                        position={[-137.976, 59.234, -108.636]}
                        rotation={[-Math.PI / 2, 0, 0.261]}
                        scale={[4.944, 3.24, 1.212]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder003_Material027_0.geometry}
                        material={materials['Material.027']}
                        position={[167.724, 53.006, -149.46]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={7.715}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_Material028_0.geometry}
                        material={materials['Material.028']}
                        position={[167.925, 64.412, -149.386]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={5.539}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube031__0.geometry}
                        material={materials['Cube.004__0']}
                        position={[-185.504, 13.977, 130.019]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[1.659, 49.178, 6.265]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube032__0.geometry}
                        material={materials['Cube.004__0']}
                        position={[-185.504, 13.977, -70.195]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[1.659, 96.279, 6.265]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube033__0.geometry}
                        material={materials['Cube.004__0']}
                        position={[8.121, 13.977, -166.206]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={[1.659, 191.6, 6.265]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane001_Material042_0.geometry}
                        material={materials['Material.042']}
                        position={[3.682, 8.263, 2.634]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[196.791, 176.291, 186.209]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere003_Material029_0.geometry}
                        material={materials['Material.029']}
                        position={[122.617, 147.343, -149.443]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.798}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane002_Material030_0.geometry}
                        material={materials['Material.030']}
                        position={[-132.077, 143.092, -157.045]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[2.204, 8.965, 8.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane003_Material031_0.geometry}
                        material={materials['Material.031']}
                        position={[-126.706, 143.092, -157.045]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[2.204, 8.965, 8.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_Material032_0.geometry}
                        material={materials['Material.032']}
                        position={[-121.351, 143.092, -157.045]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[2.204, 8.965, 8.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane005_Material033_0.geometry}
                        material={materials['Material.033']}
                        position={[-116.986, 140.109, -156.697]}
                        rotation={[-Math.PI / 2, -0.269, 0]}
                        scale={[1.948, 7.927, 7.927]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane006_Material034_0.geometry}
                        material={materials['Material.034']}
                        position={[-84.331, 136.909, -156.489]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[2.204, 8.965, 8.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane007_Material035_0.geometry}
                        material={materials['Material.035']}
                        position={[-84.331, 131.567, -156.489]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[2.204, 8.965, 8.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane008_Material036_0.geometry}
                        material={materials['Material.036']}
                        position={[-84.331, 126.57, -156.489]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[2.204, 8.965, 8.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane011_Material039_0.geometry}
                        material={materials['Material.039']}
                        position={[-102.337, 136.909, -156.489]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[2.204, 8.965, 8.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane010_Material038_0.geometry}
                        material={materials['Material.038']}
                        position={[-102.337, 131.567, -156.489]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[2.204, 8.965, 8.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane009_Material037_0.geometry}
                        material={materials['Material.037']}
                        position={[-102.337, 126.57, -156.489]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[2.204, 8.965, 8.965]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane012_Material041_0.geometry}
                        material={materials['Material.041']}
                        position={[-134.526, 66.31, -134.777]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={1.071}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane013_Material045_0.geometry}
                        material={materials['Material.045']}
                        position={[-165.863, 89.249, -72.952]}
                        rotation={[-Math.PI / 2, 1.473, 0]}
                        scale={[19.37, 31.37, 23.37]}
                    />
                    </group>
                </group>
                </group>
            </PresentationControls>
            {/* Circular Button */}
            
        </>
    )
}
