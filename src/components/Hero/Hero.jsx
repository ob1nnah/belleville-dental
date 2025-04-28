import React from 'react';
import './Hero.css';


const ProductButton = () => {
    return (

        <button className="product-btn fw-semibold c-shadow align-items-center">
            <img src="store-icon.png" alt="White Box" className="icon"/>
            Check out our Products
        </button>
    );
}


const HeroSection = () => {
    return (
        <div className="hero-container c-pad d-flex align-items-center">
            <div className="hero-text pe-5">
                <h1 className="lh-0p72 fw-bold">
                    <span className="txtcolor3 t-fontsize">SMILE</span>{' '}<br />
                    <span className="txtcolor2 st-fontsize">BRIGHTER</span>
                </h1><br />
                <p className="fw-medium text-muted mt-3 p-fontsize">
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
            <img draggable="false" className="hero-image imgfx"  src="1BG.png" alt="" />
        </div>
    );
};

export default HeroSection;
