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
                <a className="text-decoration-none" href=""><span className="title fw-bold txtcolor3" >Belleville Dental</span></a>
            </div>
            <nav className="navbar-span">
                <a href="#research" className="fw-semibold nav-link">RESEARCH</a>
                <a href="#about-us" className="fw-semibold nav-link">ABOUT US</a>
                <a href="#education" className="fw-semibold nav-link">EDUCATION</a>
                <a href="#products" className="fw-semibold nav-link productbtn">PRODUCTS</a>


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