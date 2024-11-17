import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="arz-contact" id='contact'>
            <div className="slider">
                <div className="slide slide1"> 
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                </div>
                <div className="slide slide2"> 
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                </div>
            </div>
            <div className="contact-info">
                <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <a href="tel:+33782851977">07 82 85 19 77&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></a>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <a href="mailto:arzwebconcept@gmail.com">arzwebconcept@gmail.com&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></a>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                    <a href='https://www.instagram.com/arz.webconcept/' target="_blank" rel="noopener noreferrer">@arz.webconcept&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;