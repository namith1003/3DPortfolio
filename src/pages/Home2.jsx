import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Computers from '../models/Computer';
import { useFrame } from '@react-three/fiber';
import create from 'zustand';
import './Home.css';  // Make sure to import your CSS file

const useStore = create((set) => ({
  position: [0, 0, 0],
  setPosition: (position) => set({ position }),
}));

const useMinimumDelay = (delay) => {
  const [isDelayOver, setIsDelayOver] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayOver(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isDelayOver;
};

function MyCameraReactsToStateChanges() {
  const [x, y, z] = useStore((state) => state.position);
  useFrame((state) => {
    state.camera.position.set(0, 1, 0);
    state.camera.rotation.set(0, 0, 0);
  });
}

const Home = () => {
  const setPosition = useStore((state) => state.setPosition);
  const [isLoading, setIsLoading] = useState(true);
  const isDelayOver = useMinimumDelay(2000); // 2 seconds delay
  const [showValue, showFunction] = useState(true);

  useEffect(() => {
    // Simulate loading completion after 5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <section className="w-screen h-screen relative">
      <Canvas id="canvas" colorManagement={false}>
        <MyCameraReactsToStateChanges />
        <Suspense fallback={<Loader/>}>
          {!isLoading && isDelayOver ? (
            <>
              <directionalLight />
              <ambientLight intensity={1} />
              <Computers showDetails = {showFunction}/>
            </>
          ) : (
            <Loader />
          )}
        </Suspense>
      </Canvas>

      {!isLoading && isDelayOver && showValue &&(
        <div className="absolute bottom-0 right-0 m-4 z-10 flex items-end">
          {/* Content */}
          <div className="space-y-2">
            <div className="bg-black text-white p-2 text-3xl font-bold text-center">Namith Nimlaka</div>
            <div className="flex space-x-2">
              <div className="bg-black text-white p-2 text-lg">Software Engineer</div>
              <div className="bg-black text-white p-2 text-lg">
                <a href="#" className="text-white">Dummy Links</a>
              </div>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default Home;
