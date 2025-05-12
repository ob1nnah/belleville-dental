import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
//media
import HeroImage from '/1BG.png';
import WhiteStore from '/store-icon.png';



const ProductButton = () => {
    return (

        <Link to={`/products`} className="heroproduct-btn fw-semibold c-shadow align-items-center">
            <img src={WhiteStore} alt="White Box" className="p-icon" />
            Check out our Products</Link>
        // <button className="heroproduct-btn fw-semibold c-shadow align-items-center">
        //     <img src={WhiteStore} alt="White Box" className="p-icon" />
        //     Check out our Products
        // </button>
    );
}


const HeroSection = () => {
    return (
        <div className="hero-container d-flex align-items-center">
            <div className="hero-text pe-5">
                <h1 className="lh-0p72 fw-bold">
                    <span className="txtcolor3 t-fontsize">SMILE</span><br />
                    <span className="txtcolor2 st-fontsize">BRIGHTER</span>
                </h1>
                <p className="fw-medium text-muted mt-4 p-fontsize p-color">
                    Experience gentle, professional care that gives you confidence to smile.
                    Progressive dental solutions for your entire family.
                </p>
                <ProductButton />
            </div>
            <img draggable="false" className="hero-image imgfx" src={HeroImage} alt="" />
        </div>
    );
};

export default HeroSection;
