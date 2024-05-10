import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Computers from '../models/Computers'
import Matrix from '../models/Matrix'
import Shark from '../models/Shark'
import Plane from '../models/Plane'

const Home = () => {
const [isRotating, setIsRotating] = useState(false);

    const adjustComputersForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0,-4, 0];
        let rotation = [0,0,0];

        if(window.innerWidth < 768){
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    }

    const [computersScale, computersPosition, computersRotation] = adjustComputersForScreenSize();
  return (
    <section className='w-full h-screen relative'>
        {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            POPUP
        </div> */}

        <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near: 0.1, far: 1000}}>
            <Suspense fallback = {<Loader/>}>
                <directionalLight/>
                <ambientLight intensity = {1}/>

                <Shark/>
                <Matrix/>
                <Computers position = {computersPosition} scale = {computersScale} rotation = {computersRotation} isRotating={isRotating} setIsRotating={setIsRotating}/>
                <Plane/>

            </Suspense>

        </Canvas> 
    </section>
  )
}

export default Home