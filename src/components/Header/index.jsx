import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.style.css';
import logo from '../../assets/logo.png';
import { FaTimes } from 'react-icons/fa';
import { GrAppsRounded } from 'react-icons/gr';

export function Header() {
    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle('responsive_nav');
        }   
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <Link to="/" className="logo" onClick={showNavbar}>
                <img src={logo} alt="Logo" />
            </Link>
            <nav ref={navRef}>
                <Link to="/" onClick={showNavbar}>Home</Link>
                <Link to="/" onClick={showNavbar}>Resumos</Link>
                <Link to="/" onClick={showNavbar}>Registros</Link>
                <Link to="/" onClick={showNavbar}>Comprar</Link>
                <Link to="/contato" onClick={showNavbar} id='botao-contato-header'>Entrar em Contato</Link>
                <button
                    className="nav_btn nav_close_btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav_btn"
                onClick={showNavbar}>
                <GrAppsRounded />
            </button>
        </header>
    );
}