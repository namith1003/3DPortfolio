import React from 'react';
import './Loader.css';
import loaderImage from '../assets/images/loader.jpg';
import homeLogo from '../assets/icons/home.gif';

const Loader = () => {
  return (

    <div className="loader-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${loaderImage})`,
        }}
      ></div>
      <div className="loader-content">
        <img
          src={homeLogo}
          alt="loading..."
          style={{ width: '50px', height: '50px' }}
        />
        <div className="loader-text">Building Your Home ...</div>
        <div className="copyright pb-2">Created and Designed by Namith &copy; 2024</div>
      </div>
    </div>

  );
};

export default Loader;