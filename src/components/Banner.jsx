import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section className="arz-banner" id='home'>
        <div className="arz-banner-content">
            <h1>ARZ Web Concept</h1>
            <p>Web Development | Web Design | SEO</p>
            <p className="main-text-top">Votre <b>Vision</b>, Notre <b>Création</b></p>
            <div className="arz-online">
                <div className="arz-online-ping"></div>
                <div className="arz-online-ping two"></div>
                <p>en ligne pour de nouveaux projets !</p>
            </div>
            <div className="arz-banner-info">
                <p>Un projet, besoin d'aide ou d'informations supplémentaires ? <br />
                    Cliquez sur le bouton ci-dessous <br />et notre équipe se fera un plaisir de répondre 
                    à toutes vos questions.</p>
            </div>
            <button className='arz-form-btn'><b>Parlons-en !</b><span className="material-symbols-outlined">
            arrow_downward</span></button>
        </div>
        <div className="circles">
            <div className="noise"></div>
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
        </div>
    </section>
    );
}

export default Banner;