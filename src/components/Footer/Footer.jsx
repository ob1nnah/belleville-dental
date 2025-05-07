import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HashLink } from 'react-router-hash-link';

const Ticker = () => {
    const [locationText, setLocationText] = useState('Locating…');
    const [dateTime, setDateTime] = useState(new Date());
  
    //  date/time format
    const formatDateTime = (dt) => {
      return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`;
    };
  
    // Geolocation code
    useEffect(() => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            try {
              const resp = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
              );
              const data = await resp.json();
              const addr = data.address || {};
              const city = addr.city || addr.town || addr.village || addr.county || '';
              const country = addr.country || '';
              setLocationText(
                city && country ? `${city}, ${country}` : country || 'Unknown location'
              );
            } catch (err) {
              console.error(err);
              setLocationText('Location unavailable');
            }
          },
          (err) => {
            console.error(err);
            setLocationText('Location permission denied');
          }
        );
      } else {
        setLocationText('Geolocation not supported');
      }
    }, []);
  
    // Time updater
    useEffect(() => {
      const interval = setInterval(() => setDateTime(new Date()), 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="position-fixed bottom-0 start-0 w-100 bg-dark txtcolor1 d-flex align-items-center overflow-hidden" style={{ height: '1.5em', zIndex: 1050 }}>
        <div id="ticker" className="ticker-text">
          {formatDateTime(dateTime)} | {locationText}
        </div>
      </div>
    );
  };

const Footer = () => {
    return (
        <>
            <footer className="text-white pt-5 mt-5">
                <section className="footer-container">
                    <div className="row">
                        <div className="col-md-3 sitemp">
                            <Link to={`/#`} className="logo-title-div footer">
                                <img src="logowhite.svg" alt="Belleville Dental Logo" className="logo" />
                                <span className="fw-bold txtcolor1" >Belleville Dental</span>
                            </Link>
                            <p className="footercaption fw-light">Professional dental care for your perfect smile</p>
                        </div>
                        <div className="col-md-3 mb-4 sitemp">
                            <span className="fw-bold"><HashLink smooth to={`/#`} className="txtcolor1">Home</HashLink></span>
                            <ul>
                                <li><HashLink smooth to={`/#gallery`} className="txtcolor1 sitemp-links">Gallery</HashLink></li>
                                <li><HashLink smooth to={`/aboutus/#`} className="txtcolor1 sitemp-links">About Us</HashLink></li>
                                <li><HashLink smooth to={`/#faq`} className="txtcolor1 sitemp-links">FAQ</HashLink></li>
                                <li><HashLink smooth to={`/#contactus`} className="txtcolor1 sitemp-links">Contact Us</HashLink></li>

                                {/* <li><a href="#" className="txtcolor1 sitemp-links text-decoration-none">Home</a></li>
                                <li><a href="#" className="txtcolor1 sitemp-links text-decoration-none">About Us</a></li> */}
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4 sitemp">
                            <span className="fw-bold"><HashLink smooth to={`/research/#`} className="txtcolor1">Research</HashLink></span>
                            <ul>
                                <li><a href="#" className="txtcolor1 sitemp-links text-decoration-none">Clinical Studies</a></li>
                                <li><a href="#" className="txtcolor1 sitemp-links text-decoration-none">Innovation in Technology</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4 sitemp">
                        <span className="fw-bold"><HashLink smooth to={`/education/#`} className="txtcolor1">Education</HashLink></span>
                            <ul>
                                <li><a href="#" className="txtcolor1 sitemp-links text-decoration-none">Professional Education</a></li>
                                <li><a href="#" className="txtcolor1 sitemp-links text-decoration-none">Patient Education</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4 sitemp">
                            <span className="fw-bold">Connect With Us</span>
                            <div className="d-flex gap-3 mt-2">
                                <a className="txtcolor1" href="https://facebook.com"><FaFacebook size={24} /></a>
                                <a className="txtcolor1" href="https://x.com"><FaXTwitter size={24} /></a>
                                <a className="txtcolor1" href="https://instagram.com"><FaInstagram size={24} /></a>
                                <a className="txtcolor1" href="https://linkedin.com"><FaLinkedin size={24} /></a>
                            </div>
                        </div>
                    </div>
                    <hr className="border-light" /> {/* Footer links separator */}
                    <div className="text-center">
                        &copy; 2025 Bellevielle Dental™. All rights reserved.
                    </div>
                    <br />
                <Ticker />
                </section>
            </footer>

        </>
    )
}

export default Footer
