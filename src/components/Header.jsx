import React, { useRef, useEffect, useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <header className={`arz-header ${isSticky ? 'sticky' : ''}`}>
            <a href="#home"><img src={logo} alt="Logo" className="arz-logo" /></a>
            <nav>
                <ul>
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
                    <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;