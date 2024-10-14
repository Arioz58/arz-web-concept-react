import React from 'react';
import '../styles/Banner.css';
import { useEffect } from 'react';

const Banner = () => {
  return (
    <div className="arz-banner">
        <div className="circles">
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
        </div>
    </div>
    );
}

export default Banner;