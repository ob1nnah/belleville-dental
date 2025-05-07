import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link, NavLink } from 'react-router-dom'; 


const Navbar = () => {
    return (
        <header className="header sticky-top">
           <Link to={`/`} className="logo-title-div">
                <img src="logo.svg" alt="Belleville Dental Logo" className="logo" />
                <span className="title fw-bold txtcolor3" >Belleville Dental</span>
            </Link>
            <nav className="navbar-span">  
            <NavLink to={`/research`} className={({isActive}) => isActive ? "fw-semibold nav-link active" : "fw-semibold nav-link"}>RESEARCH</NavLink>
                <NavLink to={`/aboutus`} className={({isActive}) => isActive ? "fw-semibold nav-link active" : "fw-semibold nav-link"}>ABOUT US</NavLink>
                <NavLink to={`/education`} className={({isActive}) => isActive ? "fw-semibold nav-link active" : "fw-semibold nav-link"}>EDUCATION</NavLink>
                <NavLink to={`products`} className={({isActive}) => isActive ? "fw-semibold nav-link redbtn active" : "fw-semibold nav-link redbtn"}>PRODUCTS</NavLink>
            </nav>
        </header>
    );
}

export default Navbar;
//The navigation bar includes a logo, title, and several links.