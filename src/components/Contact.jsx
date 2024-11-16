import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="arz-contact">
            <div className="slider">
                <div className="slide slide1"> 
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                </div>
                <div className="slide slide2"> 
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                    <p>CONTACTEZ-NOUS&nbsp;&nbsp;-&nbsp;&nbsp;</p>
                </div>
            </div>
            <div className="contact-info">
                <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <span>07 82 85 19 77</span>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <span>arzwebconcept@gmail.com</span>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                    <span>@arz.webconcept</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;