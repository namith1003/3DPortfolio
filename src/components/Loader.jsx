import React, { useState, useEffect } from 'react';
import './Loader.css';
import loaderImage from '../assets/images/loader.jpg';
import loaderMobileImage from '../assets/images/loader-mobile.jpg'; // Import mobile image
import homeLogo from '../assets/icons/home.gif';

const Loader = () => {
  const [backgroundImage, setBackgroundImage] = useState(loaderImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage(loaderMobileImage);
      } else {
        setBackgroundImage(loaderImage);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="loader-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="loader-content">
        <img
          src={homeLogo}
          alt="loading..."
          style={{ width: '50px', height: '50px' }}
        />
        <div className="loader-text">Building Your Home ...</div>
        <div className="copyright pb-2 text-center">
          Created and Designed by Namith &copy; 2024
        </div>
      </div>
    </div>
  );
};

export default Loader;
