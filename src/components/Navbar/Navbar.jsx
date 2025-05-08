import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
//images
import logo from '../../../public/logo.svg';

const Navbar = () => {
    return (
        <header className="header sticky-top">
            <motion.div //logo-title div animeation
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}>
                <Link to={`/#`} className="logo-title-div">
                    <img src={logo} alt="Belleville Dental Logo" className="logo" />
                    <span className="title fw-bold txtcolor3" >Belleville Dental</span>
                </Link>
            </motion.div>
            <motion.div //navbar animation
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
            >
                <nav className="navbar-span">
                    <NavLink to={`/research`} className={({ isActive }) => isActive ? "fw-semibold nav-link active" : "fw-semibold nav-link"}>RESEARCH</NavLink>
                    <NavLink to={`/aboutus`} className={({ isActive }) => isActive ? "fw-semibold nav-link active" : "fw-semibold nav-link"}>ABOUT US</NavLink>
                    <NavLink to={`/education`} className={({ isActive }) => isActive ? "fw-semibold nav-link active" : "fw-semibold nav-link"}>EDUCATION</NavLink>
                    <NavLink to={`products`} className={({ isActive }) => isActive ? "fw-semibold nav-link redbtn active" : "fw-semibold nav-link redbtn"}>PRODUCTS</NavLink>
                </nav>
            </motion.div>
        </header>
    );
}

export default Navbar;
//The navigation bar includes a logo, title, and several links.