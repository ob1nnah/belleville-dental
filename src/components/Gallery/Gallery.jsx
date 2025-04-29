import React from 'react'
import './Gallery.css'

const GalleryCard = ({ gimg, galt }) => {
    return (
        <div className="g-card col-sm-4">
            <img src={gimg} alt={galt} className="gallery-image c-shadow" />
        </div>
    );
}

const Gallery = () => {
    return (
        <div>
            <section className="gallery-container mt-5">
                <div className="d-flex flex-column m lh-1">
                    <span className="pgtitle fw-bold txtcolor3 mt-4 cm-width m-auto">OUR GALLERY</span>
                    <span className="pgsubtitle fw-normal txtcolor2 mt-4 m-auto">A glimpse into our practice</span>
                </div>
                <div className="row mt-4 g-card ">
                    <GalleryCard gimg="gallery/1.png" caption="Office and Observation Room" />
                    <GalleryCard gimg="gallery/2.png" caption="Dental Lab" />
                    <GalleryCard gimg="gallery/3.png" caption="Staff Working" />
                </div>
                <div className="row mt-4 g-card ">
                    <GalleryCard gimg="gallery/4.png" caption="Toothbrush" />
                    <GalleryCard gimg="gallery/5.png" caption="Dentist Chair" />
                    <GalleryCard gimg="gallery/6.png" caption="Operation" />
                </div>
            </section>
        </div>
    )
}

export default Gallery
