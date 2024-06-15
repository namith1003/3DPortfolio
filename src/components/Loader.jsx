import React from 'react';
import { Html } from '@react-three/drei';
import './Loader.css';
import loaderImage from '../assets/images/loader.jpg';

const Loader = () => {
  return (

      <div className="loader-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${loaderImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
        ></div>
        <div className="loader-content" style={{zIndex: 9999}}>
          <div className="loader-icon">🏗️
          </div>
          <div className="loader-text">Building Your Home ...</div>
          <div className="copyright"> Created and Designed by Namith &copy; 2024 </div>
        </div>
        
      </div>

  );
};

export default Loader;