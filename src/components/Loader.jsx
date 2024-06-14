import React from 'react';
import { Html } from '@react-three/drei';
import './Loader.css';

const Loader = () => {
  return (
    <Html>
      <div className="loader-container">
        <div className="loader-icon">
          <svg viewBox="0 0 100 100" width="80" height="80">
            <path d="M50 15A35 35 0 1 1 15 50.5" stroke="black" strokeWidth="4" fill="none" />
          </svg>
        </div>
        <div className="loader-text">Welcome to my portfolio</div>
      </div>
    </Html>
  );
}

export default Loader;
