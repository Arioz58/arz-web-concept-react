import React, { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import ARZLocation from "../assets/ARZ-location.png";
import ARZPhonePC from "../assets/ARZ-phone-PC.png";
import ARZbrk from "../assets/ARZ-brk.png";

const About = () => {
    const paragraphRef = useRef(null);
    const containerRef = useRef(null);
    const paragraphContentRef = useRef(null);
    const imgRef = useRef(null);
    const [newImgSrc, setNewImgSrc] = useState("");

    useEffect(() => {
        const paragraphList = [
            "ARZ Web Concept est une agence de développement web basée à Strasbourg spécialisée dans la création de sites web et d'applications web sur mesure. Nous accompagnons nos clients dans la réalisation de leurs projets web en leur proposant des solutions adaptées à leurs besoins.",
            "Notre équipe est composée de développeurs web passionnés par leur métier et qui mettent tout en œuvre pour satisfaire les besoins de nos clients. Nous sommes à l'écoute de nos clients et nous les accompagnons tout au long de leur projet pour leur garantir un résultat de qualité.",
            "Nous mettons notre expertise à votre service pour vous aider à concrétiser vos projets web. Que vous soyez une entreprise, une association ou un particulier, nous vous accompagnons dans la réalisation de votre projet web."
        ];

        const paragraphImgList = [ ARZLocation, ARZPhonePC, ARZbrk ]; // Add images as needed

        const handleScroll = () => {
            const paragraphContent = paragraphContentRef.current;
            const paragraph = paragraphRef.current;
            const container = containerRef.current;
            const img = imgRef.current;
            const containerPos = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            let newContent = "";
            let newImgSrc = "";

            paragraph.style.position = "sticky";
            paragraph.style.top = `${windowHeight / 2 - 120}px`;

            if (containerPos < windowHeight) {
                newContent = paragraphList[0];
                newImgSrc = paragraphImgList[0];
                img.style.border = "3px solid #a1a1a180";
                img.style.boxShadow = "0 0 30px #000";
                img.style.filter = "none";
                img.style.transition = "all 0.5s";
            }
            if (containerPos < windowHeight / 2 - 600) {
                newContent = paragraphList[1];
                newImgSrc = paragraphImgList[1];
                img.style.border = "none";
                img.style.boxShadow = "none";
                img.style.filter = "drop-shadow(0 0 20px #000)";
            }
            if (containerPos < windowHeight / 2 - 1200) {
                newContent = paragraphList[2];
                newImgSrc = paragraphImgList[2];
            }

            if (paragraphContent.innerHTML !== newContent) {
                paragraphContent.classList.remove("fade");
                void paragraphContent.offsetWidth;
                paragraphContent.classList.add("fade");
                paragraphContent.innerHTML = newContent;
            }

            if (img.src !== "http://localhost:3000" + newImgSrc) {
                console.log(img.src, newImgSrc);
                img.classList.remove("fade");
                void img.offsetWidth; 
                img.classList.add("fade");
                img.src = newImgSrc;
            }

            setNewImgSrc(newImgSrc);
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
                <div ref={paragraphRef} className="arz-grid">
                    <p ref={paragraphContentRef} className="arz-about-paragraph"></p>
                    <img ref={imgRef} src={newImgSrc} alt="paragrpah-img" className="arz-paragraph-img"/>
                </div>
            </div>
        </div>
    );
};

export default About;
