import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Computers from '../models/Computer';
import { useFrame } from '@react-three/fiber';
import create from 'zustand';
import './Home.css';  // Ensure correct import
import logo from '../assets/icons/clock.gif'
import githubLogo from '../assets/icons/github.png';
import linkedinLogo from '../assets/icons/linkedin.png';

function MyCameraReactsToStateChanges() {
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
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center z-50"
      style={{ zIndex: 9999 }}
    >
      <img src={logo} alt="loading..." style={{ width: '100px', height: '100px' }} />
      <span className="text-white text-3xl pt-5" style={{ fontFamily: 'retro' }}>Changing time ...</span>
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
    }, 4000);
  
    return () => clearTimeout(loadingTimer); // Cleanup the timeout on unmount
  }, []); // Dependency array with currentTime

  return (
        <section className="w-screen h-screen relative">
          {!isLoading? (
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

        {!isLoading && showValue && (
          <div className="absolute bottom-0 right-0 m-4 z-10 flex items-end">
            {/* Content */}
            <div className="space-y-2">
              <div className="bg-black text-white p-2 text-3xl text-center rounded-md" style={{ fontFamily: 'retro' }}>Namith Nimlaka</div>
              {/* New row with clock and period of day */}
              <div className="flex space-x-2">
                <div className="flex-1 bg-black text-white trex p-2 text-xl flex items-center justify-between rounded-md" style={{ fontFamily: 'retro' }}>
                  <span className="pl-2">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).split(' ')[0]}</span>
                  <span className="pr-2">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).split(' ')[1]}</span>
                </div>
                <div className="flex-1 bg-black text-white p-2 text-xl relative rounded-md">
                  <select
                    value={periodOfDay}
                    onChange={(e) => handlePeriodOfDayChange(e)}
                    className="bg-black text-white appearance-none outline-none w-full pl-4 pr-6 rounded-md"
                    style={{ fontFamily: 'retro' }}
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
                <div className="bg-black text-white pt-3 text-lg rounded-md pl-4 pr-4" style={{ fontFamily: 'retro' }}>Software Engineer</div>
                <div className="flex flex-row items-center">
                  <img src={githubLogo} alt="github" className="w-9 h-9" />
                  <img src={linkedinLogo} alt="linkedin" className="w-14 h-13" />
                </div>
              </div>
            </div>
          </div>
        )}

        {!isLoading && showValue && (
          <div className="absolute top-0 left-0 flex justify-start items-start z-10">
            <div className={`pulsing-text ${periodOfDay === 'night' ? 'text-white' : 'text-black'}`}>
              Click the PC...
            </div>
          </div>
        )}
      </section>
    
  );
};

export default Home;
