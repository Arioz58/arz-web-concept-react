import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import ARZmap from "../assets/ARZ-map.png";
import ARZphone from "../assets/ARZ-phone.png";
import ARZbrk from "../assets/ARZ-brk.png";
import ARZlogo from "../assets/logo.png";

const About = () => {
    const gridRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const grid = gridRef.current;
            const windowHeight = window.innerHeight;
            const gridPosition = grid.getBoundingClientRect().top;

        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="arz-about" id="about">
            <div className="arz-about-content">
                <h2 className="sticky">Qui sommes-nous ?</h2>
                <div ref={gridRef} className="arz-about-grid">
                    <div className="arz-about-map">
                        <img className="ARZ-logo" src={ARZlogo} alt="logo" />
                        <p>ARZ Web Concept est une agence de <b>développement web</b> basée à <b>Strasbourg</b></p>
                        <img className="ARZ-map" src={ARZmap} alt="map" />
                    </div>
                    <div className="arz-about-phone">
                        <img className="ARZ-logo" src={ARZlogo} alt="logo" />
                        <p>ARZ Web Concept est  spécialisée dans la création de sites web et d'applications web sur mesure</p>
                        <img className="ARZ-phone" src={ARZphone} alt="phone" />
                    </div>
                    <div className="arz-about-brk">
                        <img className="ARZ-logo" src={ARZlogo} alt="logo" />
                        <p>Nous mettons notre expertise à votre service pour vous aider à concrétiser vos projets web. Que vous soyez une entreprise, une association ou un particulier, nous vous accompagnons dans la réalisation de votre projet web.</p>
                        <img className="ARZ-brk" src={ARZbrk} alt="brk" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;