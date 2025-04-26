import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom'; 

// The Navbar component represents the navigation bar at the top of the page.

// const NavbarLink = ({ to, title }) => {
//   return (
//     <Link to={to} className="px-4 py-2 text-blue-600 hover:underline">{title}</Link>
//   );
// };



const Navbar = () => {
    return (
        <header className="header">
            <div className="logo-title-div">
                <img src="logo.svg" alt="Belleville Dental Logo" className="logo" />
                <span className="title fw-bolder">Belleville Dental</span>
            </div>
            <nav className="navbar-span">
                <a href="#research" className="nav-link fw-semibold">RESEARCH</a>
                <a href="#about-us" className="nav-link fw-semibold">ABOUT US</a>
                <a href="#education" className="nav-link fw-semibold">EDUCATION</a>
                <a href="#products" className="nav-link fw-semibold red">PRODUCTS</a>


{/* trying the navbar link as a compnonent *isnt working*
                <NavbarLink to="/home" title="Home" />
                <NavbarLink to="/blog" title="Blog" />
                <NavbarLink to="/contact" title="Contact Us" /> */}
            </nav>
        </header>
    );
}

export default Navbar;
//The navigation bar includes a logo, title, and several links.