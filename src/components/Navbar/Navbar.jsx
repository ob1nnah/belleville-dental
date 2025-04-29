import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom'; 


const Navbar = () => {
    return (
        <header className="header sticky-top">
           <div className="logo-title-div">
                <img src="logo.svg" alt="Belleville Dental Logo" className="logo" />
                <a className="text-decoration-none" href=""><span className="title fw-bold txtcolor3" >Belleville Dental</span></a>
            </div>
            <nav className="navbar-span">
                <a href="#research" className="fw-semibold nav-link">RESEARCH</a>
                <a href="#about-us" className="fw-semibold nav-link">ABOUT US</a>
                <a href="#education" className="fw-semibold nav-link">EDUCATION</a>
                <a href="#products" className="fw-semibold nav-link redbtn">PRODUCTS</a>
            </nav>
        </header>
    );
}

export default Navbar;
//The navigation bar includes a logo, title, and several links.