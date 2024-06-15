import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Computers from '../models/Computer';
import { useFrame } from '@react-three/fiber';
import create from 'zustand';
import './Home.css';  // Ensure correct import

const useStore = create((set) => ({
  position: [0, 1, 0],
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
  if (hours >= 5 && hours < 7) return 'sunset';
  if (hours >= 7 && hours < 12) return 'park';
  if (hours >= 12 && hours < 17) return 'warehouse';
  if (hours >= 17 && hours < 19) return 'dawn';
  return 'night';
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isDelayOver = useMinimumDelay(3000);
  const [showValue, showFunction] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [periodOfDay, setPeriodOfDay] = useState(getPeriodOfDay(currentTime.getHours()));

  const [changingTime, setChangingTime] = useState(false);

  const handlePeriodOfDayChange = (e) => {
    setChangingTime(true); // Set changingTime to true before the period of day change
    setPeriodOfDay(e.target.value);
  };

  useEffect(() => {
    let timeoutId;

    if (changingTime) {
      timeoutId = setTimeout(() => {
        setChangingTime(false);
      }, 2000); // Adjust this value as needed
    }

    return () => clearTimeout(timeoutId);
  }, [changingTime]);

  const ChangingTimeOverlay = () => (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50"
      style={{ zIndex: 9999 }}
    >
      <span className="text-white text-2xl">Changing time...</span>
    </div>
  );
  
  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      const newTime = new Date();
      setCurrentTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate loading completion after 3 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  
    return () => clearTimeout(loadingTimer); // Cleanup the timeout on unmount
  }, []); // Dependency array with currentTime

  useEffect(() => {
    // Simulate loading completion after 3 seconds
    const loadingTimer = setTimeout(() => {
      setIsCaching(true);
    }, 1000);
  
    return () => clearTimeout(loadingTimer); // Cleanup the timeout on unmount
  }, []); // Dependency array with currentTime


  return (
        <section className="w-screen h-screen relative">
        {!isLoading && isDelayOver ? (
        changingTime ? (
          <ChangingTimeOverlay />
        ) : (
          <Canvas id="canvas" colorManagement={false}>
            <MyCameraReactsToStateChanges />
            <directionalLight />
            <Computers showDetails={showFunction} periodOfDay={periodOfDay} />
          </Canvas>
        )
      ) : (
          <Loader />
      )}

        

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
                    onChange={(e) => handlePeriodOfDayChange(e)}
                    className="bg-black text-white appearance-none outline-none w-full pl-4 pr-6 rounded-md"
                  >
                    <option value="sunset">Dawn</option>
                    <option value="park">Morning</option>
                    <option value="warehouse">Evening</option>
                    <option value="dawn">Dusk</option>
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
