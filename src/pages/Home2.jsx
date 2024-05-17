import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Computers from '../models/Computer';
import * as THREE from 'three';
import { CameraControls, PerformanceMonitor } from '@react-three/drei';
import create from 'zustand';
import {useFrame, useThree} from '@react-three/fiber'

const useStore = create(set => ({
    position: [0, 0, 0],
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
