import React, { useEffect, useRef } from "react";
import ARZmap from "../assets/ARZ-map.png";
import ARZphone from "../assets/ARZ-phone.png";
import ARZbrk from "../assets/ARZ-brk.png";
import ARZlogo from "../assets/logo.png";
import "../styles/About.css";
import ARZLocation from "../assets/ARZ-location.png";
import ARZPhonePC from "../assets/ARZ-phone-PC.png";
import ARZbrk from "../assets/ARZ-brk.png";

const About = () => {
    const containerRef = useRef(null);
    const mapRef = useRef(null);
    const phoneRef = useRef(null);
    const brkRef = useRef(null);
    const gridRef = useRef(null);
    useEffect(() => {
        const paragraphList = [
            "ARZ Web Concept est une agence de développement web basée à Strasbourg spécialisée dans la création de sites web et d'applications web sur mesure. Nous accompagnons nos clients dans la réalisation de leurs projets web en leur proposant des solutions adaptées à leurs besoins.",
            "Notre équipe est composée de développeurs web passionnés par leur métier et qui mettent tout en œuvre pour satisfaire les besoins de nos clients. Nous sommes à l'écoute de nos clients et nous les accompagnons tout au long de leur projet pour leur garantir un résultat de qualité.",
            "Nous mettons notre expertise à votre service pour vous aider à concrétiser vos projets web. Que vous soyez une entreprise, une association ou un particulier, nous vous accompagnons dans la réalisation de votre projet web."
        ];

        const paragraphImgList = [ ARZLocation, ARZPhonePC, ARZbrk ]; // Add images as needed

        const handleScroll = () => {
            const container = containerRef.current;
            const map = mapRef.current;
            const phone = phoneRef.current;
            const brk = brkRef.current;
            const containerPos = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            console.log(containerPos, windowHeight);
            
            if (containerPos < windowHeight) {
                map.classList.remove("inactive");
                map.classList.add("active");
                phone.classList.remove("active");
                phone.classList.add("inactive");
            }
            if (containerPos < windowHeight / 2 - 800) {
                phone.classList.remove("inactive");
                phone.classList.add("active");
                brk.classList.remove("active");
                brk.classList.add("inactive");
            }
            if (containerPos < windowHeight / 2 - 1800) {
                brk.classList.remove("inactive");
                brk.classList.add("active");
            }

            gridRef.current.style.top = `${windowHeight/5}px`;

        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="arz-about" id="about">
            <div ref={containerRef} className="arz-about-content">
                <h2 className="sticky">Qui sommes-nous ?</h2>
                <div ref={gridRef} className="arz-about-grid">
                    <div ref={mapRef} className="arz-about-map inactive">
                        <img className="ARZ-logo" src={ARZlogo} alt="logo" />
                        <p>ARZ Web Concept est une agence de <b>développement web</b> basée à <b>Strasbourg</b><br />🥨</p>
                        <img className="ARZ-map" src={ARZmap} alt="map" />
                    </div>
                    <div ref={phoneRef} className="arz-about-phone inactive">
                        <img className="ARZ-logo" src={ARZlogo} alt="logo" />
                        <p>ARZ Web Concept est  spécialisée dans la <b>création de sites web</b> et <b>d'applications web</b> sur mesure</p>
                        <img className="ARZ-phone" src={ARZphone} alt="phone" />
                    </div>
                    <div ref={brkRef} className="arz-about-brk inactive">
                        <img className="ARZ-logo" src={ARZlogo} alt="logo" />
                        <p>Nous mettons notre <b>expertise à votre service</b> pour vous aider à <b>concrétiser vos projets web.</b> Que vous soyez une entreprise, une association ou un particulier, <b>nous vous accompagnons</b> dans la <b>réalisation de votre projet web.</b></p>
                        <img className="ARZ-brk" src={ARZbrk} alt="brk" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
