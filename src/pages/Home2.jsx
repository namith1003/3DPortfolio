import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Computers from '../models/Computer';
import * as THREE from 'three';
import { CameraControls, PerformanceMonitor } from '@react-three/drei';
import create from 'zustand';
import {useFrame, useThree} from '@react-three/fiber'

const useStore = create(set => ({
    position: [0, 0, 10],
    setPosition: position => set({ position })
}))

function MyCameraReactsToStateChanges() {
    const [x, y, z] = useStore(state => state.position)
    useFrame(state => {
        state.camera.lookAt(0, 0, 0)
    })
}

const Home = () => {
    const setPosition = useStore(state => state.setPosition)

    return (
        <section className='w-full h-screen relative'>

            <Canvas id="canvas" colorManagement={false} className={`w-full h-screen bg-transparent`}>
                <MyCameraReactsToStateChanges />
                <Suspense fallback={<Loader />}>
                        <directionalLight />
                        <ambientLight intensity={1} />
                        <Computers/>
                </Suspense>
            </Canvas>

            <div className="absolute bottom-0 right-0 m-4 z-10 flex items-end">
                {/* Circular Button */}
                <button className="bg-black text-white rounded-full w-24 h-24 flex items-center justify-center mr-2" onClick={() => setPosition([0, 100, 200])}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 5a1 1 0 011-1h3.586a1 1 0 01.707.293l4.707 4.707a1 1 0 010 1.414l-4.707 4.707a1 1 0 01-1.414-1.414L9.086 11H7a1 1 0 01-1-1V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Content */}
                <div className="space-y-2">
                    <div className="bg-black text-white p-2 text-xl font-bold text-center">
                        Namith Nimlaka
                    </div>
                    <div className="flex space-x-2">
                        <div className="bg-black text-white p-2 text-sm">
                            Software Engineer
                        </div>
                        <div className="bg-black text-white p-2 text-sm">
                            <a href="#" className="text-white">Dummy Links</a>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    );
}

export default Home;
