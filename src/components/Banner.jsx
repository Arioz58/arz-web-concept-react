import React from 'react';
import '../styles/Banner.css';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import {motion} from 'framer-motion';


const heading = "ARZ Web Concept";
const headingDesc = "Web Development | Web Design | SEO";
const slogan = 'Votre Vision, Notre Création';

const charVariants = {
    hidden: {
        display: 'inline-block',
        opacity: 0,
        filter: 'blur(5px)',
        position: 'relative',
        transform: 'translateY(10px)',
        willChange: 'filter, opacity, transform'
    },
    visible: {
        display: 'inline-block',
        opacity: 1,
        filter: 'blur(0px)',
        position: 'relative',
        transform: 'translateY(0px)',
        willChange: 'filter, opacity, transform'
    }
}

const Banner = () => {
    const headingChars = splitStringUsingRegex(heading);
    const headingDescChars = splitStringUsingRegex(headingDesc);
    const sloganChars = splitStringUsingRegex(slogan);
  return (
    <section className="arz-banner" id='home'>
        <div className="arz-banner-content">
            <motion.h1 initial='hidden' whileInView='visible' transition={{staggerChildren: 0.05}}>
                {headingChars.map((char, index) => (
                    <motion.span key={index} transition={{duration: 0.25}} variants={charVariants}>
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.p initial='hidden' whileInView='visible' transition={{staggerChildren: 0.05}}>
                {headingDescChars.map((char) => (
                    <motion.span key={char} transition={{duration: 0.25}} variants = {charVariants}>
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.p>
            <motion.p initial='hidden' whileInView='visible' transition={{staggerChildren: 0.05}}  className="main-text-top">
                {sloganChars.map((char) => (
                    <motion.span key={char} transition={{duration: 0.25}} variants = {charVariants}>
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.p>
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
            <button className='arz-form-btn'><b>Parlons-en !</b>💬<span className="material-symbols-outlined">
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