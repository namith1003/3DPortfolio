import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Computers from '../models/Computer';
import { useFrame } from '@react-three/fiber';
import create from 'zustand';
import './Home.css';  // Ensure correct import

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

const getPeriodOfDay = (hours) => {
  if (hours >= 5 && hours < 8) return 'dawn';
  if (hours >= 8 && hours < 12) return 'park';
  if (hours >= 12 && hours < 17) return 'warehouse';
  if (hours >= 17 && hours < 20) return 'sunset';
  return 'night';
};

const Home = () => {
  const setPosition = useStore((state) => state.setPosition);
  const [isLoading, setIsLoading] = useState(true);
  const isDelayOver = useMinimumDelay(2000); // 2 seconds delay
  const [showValue, showFunction] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [periodOfDay, setPeriodOfDay] = useState(getPeriodOfDay(currentTime.getHours()));

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      const newTime = new Date();
      setCurrentTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        <Suspense fallback={<Loader />}>
          {!isLoading && isDelayOver ? (
            <>
              <directionalLight />
              <ambientLight intensity={0} />
              <Computers showDetails={showFunction} periodOfDay={periodOfDay}/>
            </>
          ) : (
            <Loader />
          )}
        </Suspense>
      </Canvas>

      {!isLoading && isDelayOver && showValue && (
        <div className="absolute bottom-0 right-0 m-4 z-10 flex items-end">
          {/* Content */}
          <div className="space-y-2">
            <div className="bg-black text-white p-2 text-3xl font-bold text-center rounded-md">Namith Nimlaka</div>
            {/* New row with clock and period of day */}
            <div className="flex space-x-2">
              <div className="flex-1 bg-black text-white trex font-bold p-2 text-lg flex items-center justify-between rounded-md">
                <span className="pl-2">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).split(' ')[0]}</span>
                <span className="pr-2">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).split(' ')[1]}</span>
              </div>
              <div className="flex-1 bg-black text-white p-2 text-lg relative rounded-md">
                <select
                  value={periodOfDay}
                  onChange={(e) => setPeriodOfDay(e.target.value)}
                  className="bg-black text-white appearance-none outline-none w-full pl-4 pr-6 rounded-md"
                >
                  <option value="dawn">Dawn</option>
                  <option value="park">Morning</option>
                  <option value="warehouse">Evening</option>
                  <option value="sunset">Dusk</option>
                  <option value="night">Night</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-black text-white p-2 text-lg rounded-md">Software Engineer</div>
              <div className="bg-black text-white p-2 text-lg rounded-md">
                <a href="#" className="text-white">Dummy Links</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isLoading && isDelayOver && showValue && (
        <div className="absolute top-0 left-0 flex justify-start items-start z-10">
          <div className="pulsing-text">
            Click the PC...
          </div>
        </div>
      )}

    </section>
  );
};

export default Home;
