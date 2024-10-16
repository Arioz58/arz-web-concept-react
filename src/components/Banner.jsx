import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className="arz-banner">
        <div className="arz-banner-content">
            <h1>ARZ Web Concept</h1>
            <p>Web Development | Web Design | SEO</p>
            <p class="main_text_top">Votre <b>Vision</b>, Notre <b>Création</b></p>
        </div>
        <div className="circles">
            <div className="noise"></div>
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
        </div>
    </div>
    );
}

export default Banner;