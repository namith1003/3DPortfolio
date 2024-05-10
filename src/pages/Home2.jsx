import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Computers from '../models/Computers'

const Home = () => {
    const adjustComputersForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0,-4, -1];
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

        <Canvas className='w-full h-screen bg-transparent' camera={{near: 0.1, far: 1000}}>
            <Suspense fallback = {<Loader/>}>
                <directionalLight/>
                <ambientLight/>
                <Computers position = {computersPosition} scale = {computersScale} rotation = {computersRotation}/>
            </Suspense>

        </Canvas> 
    </section>
  )
}

export default Home