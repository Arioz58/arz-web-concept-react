import React, { useEffect, useRef } from "react";
import "../styles/About.css";

const About = () => {
    const firstParagraphRef = useRef(null);
    const secondParagraphRef = useRef(null);
    const thirdParagraphRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const firstParagraph = firstParagraphRef.current;
            const secondParagraph = secondParagraphRef.current;
            const thirdParagraph = thirdParagraphRef.current;

            const windowHeight = window.innerHeight;
            const firstParagraphPosition = firstParagraph.getBoundingClientRect().top ;
            const secondParagraphPosition = secondParagraph.getBoundingClientRect().top ;
            const thirdParagraphPosition = thirdParagraph.getBoundingClientRect().top ;

            if (firstParagraphPosition < windowHeight / 2 ) {
                firstParagraph.classList.add("visible");
            }

            if (secondParagraphPosition < windowHeight / 2 - 150) {
                secondParagraph.classList.add("visible");
                firstParagraph.classList.remove("visible");
                firstParagraph.classList.add("hidden");
            } else {
                secondParagraph.classList.remove("visible");
            }

            if (thirdParagraphPosition < windowHeight / 2 - 150 ) {
                thirdParagraph.classList.add("visible");
                secondParagraph.classList.remove("visible");
                secondParagraph.classList.add("hidden");
            }
            else {
                thirdParagraph.classList.remove("visible");
            }

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
                <p ref={firstParagraphRef} className="visible">
                    ARZ Web Concept est une agence de développement web basée à Strasbourg spécialisée dans
                    la création de sites web et d'applications web sur mesure. Nous
                    accompagnons nos clients dans la réalisation de leurs projets web en
                    leur proposant des solutions adaptées à leurs besoins.
                </p>
                <p ref={secondParagraphRef} className="hidden">
                    Notre équipe est composée de développeurs web passionnés par leur
                    métier et qui mettent tout en œuvre pour satisfaire les besoins de
                    nos clients. Nous sommes à l'écoute de nos clients et nous les
                    accompagnons tout au long de leur projet pour leur garantir un
                    résultat de qualité.
                </p>
                <p ref={thirdParagraphRef} className="hidden">
                    Nous mettons notre expertise à votre service pour vous aider à
                    concrétiser vos projets web. Que vous soyez une entreprise, une
                    association ou un particulier, nous vous accompagnons dans la
                    réalisation de votre projet web.
                </p>
            </div>
        </div>
    );
};

export default About;