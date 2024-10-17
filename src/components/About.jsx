import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="arz-about" id="about">
            <div className="arz-about-content">
                <h2>Qui sommes-nous ?</h2>
                <p>
                    ARZ Web Concept est une agence de développement web basée à Strasbourg spécialisée dans
                    la création de sites web et d'applications web sur mesure. Nous
                    accompagnons nos clients dans la réalisation de leurs projets web en
                    leur proposant des solutions adaptées à leurs besoins.
                </p>
                <p>
                    Notre équipe est composée de développeurs web passionnés par leur
                    métier et qui mettent tout en œuvre pour satisfaire les besoins de
                    nos clients. Nous sommes à l'écoute de nos clients et nous les
                    accompagnons tout au long de leur projet pour leur garantir un
                    résultat de qualité.
                </p>
                <p>
                    Nous mettons notre expertise à votre service pour vous aider à
                    concrétiser vos projets web. Que vous soyez une entreprise, une
                    association ou un particulier, nous vous accompagnons dans la
                    réalisation de votre projet web.
                </p>
            </div>
        </div>
    );
}

export default About;