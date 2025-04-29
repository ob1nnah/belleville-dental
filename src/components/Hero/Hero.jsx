import React from 'react';
import './Hero.css';


const ProductButton = () => {
    return (

        <button className="heroproduct-btn fw-semibold c-shadow align-items-center">
            <img src="store-icon.png" alt="White Box" className="icon"/>
            Check out our Products
        </button>
    );
}


const HeroSection = () => {
    return (
        <div className="hero-container d-flex align-items-center">
            <div className="hero-text pe-5">
                <h1 className="lh-0p72 fw-bold">
                    <span className="txtcolor3 t-fontsize">SMILE</span>{' '}<br />
                    <span className="txtcolor2 st-fontsize">BRIGHTER</span>
                </h1>
                <p className="fw-medium text-muted mt-4 p-fontsize p-color">
                    Experience gentle, professional care that gives you confidence to smile.
                    Progressive dental solutions for your entire family.
                </p>
                <ProductButton />
                {/* <div className="mt-3">
                    <a href="#" className="txtcolor2 mt-3 small text-decoration-none">
                        Try new patient special →
                    </a>
                </div> */}
            </div>
            <img draggable="false" className="hero-image imgfx"  src="1BG.png" alt="" />
        </div>
    );
};

export default HeroSection;
