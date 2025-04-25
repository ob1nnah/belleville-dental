import React from 'react';
import './HeroSection.css';


const ProductButton = () => {
    return (

        <button className="product-btn fw-semibold">
            <img src="public/store-icon.png" alt="White Box" className="icon"/>
            Check out our Products
        </button>
    );
}


const HeroSection = () => {
    return (
        <div className="hero-container d-flex align-items-center">
            <div className="hero-text pe-5">
                <h1 className="display-4 fw-bold captiontitle">
                    <span className="txtcolor3 ft-160">SMILE</span>{' '}<br />
                    <span className="txtcolor2 ft-135">BRIGHTER</span>
                </h1>
                <p className="lead text-muted mt-3">
                    Experience gentle, professional care that gives you confidence to smile.
                    Progressive dental solutions for your entire family.
                </p>
                <br />
                <ProductButton />
                <div className="mt-3">
                    <a href="#" className="txtcolor2 small text-decoration-none">
                        Try new patient special →
                    </a>
                </div>
            </div>
            <img className="hero-image rounded shadow-sm"  src="public/1BG.png" alt="" />
        </div>
    );
};

export default HeroSection;
