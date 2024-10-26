import React, { useEffect, useRef } from "react";
import "../styles/About.css";

const About = () => {
    const paragraphRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const paragraphList = [
            "ARZ Web Concept est une agence de développement web basée à Strasbourg spécialisée dans la création de sites web et d'applications web sur mesure. Nous accompagnons nos clients dans la réalisation de leurs projets web en leur proposant des solutions adaptées à leurs besoins.",
            "Notre équipe est composée de développeurs web passionnés par leur métier et qui mettent tout en œuvre pour satisfaire les besoins de nos clients. Nous sommes à l'écoute de nos clients et nous les accompagnons tout au long de leur projet pour leur garantir un résultat de qualité.",
            "Nous mettons notre expertise à votre service pour vous aider à concrétiser vos projets web. Que vous soyez une entreprise, une association ou un particulier, nous vous accompagnons dans la réalisation de votre projet web."
        ];

        const handleScroll = () => {
            const paragraph = paragraphRef.current;
            const container = containerRef.current;
            const containerPos = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            let newContent = "";
            paragraph.style.position = "sticky";
            paragraph.style.top = `${windowHeight / 2 - 120}px`;

            if (containerPos < windowHeight) {
                newContent = paragraphList[0];
            }
            if (containerPos < windowHeight / 2 - 600) {
                newContent = paragraphList[1];
            }
            if (containerPos < windowHeight / 2 - 1200) {
                newContent = paragraphList[2];
            }

            // Apply animation if content has changed
            if (paragraph.innerHTML !== newContent) {
                paragraph.classList.remove("fade");
                void paragraph.offsetWidth; // Trigger reflow for animation
                paragraph.classList.add("fade");
                paragraph.innerHTML = newContent;
            }
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
                <p ref={paragraphRef} className="arz-paragraph">
                </p>
            </div>
        </div>
    );
};

export default About;
