import React from 'react'
import './Gallery.css'

//media
import gallery1 from '/gallery/1.png'
import gallery2 from '/gallery/2.png'
import gallery3 from '/gallery/3.png'
import gallery4 from '/gallery/4.png'
import gallery5 from '/gallery/5.png'
import gallery6 from '/gallery/6.png'

const GalleryCard = ({ gimg, galt }) => {
    return (
        <div className="g-card col-sm-4">
            <img src={gimg} alt={galt} className="gallery-image c-shadow" />
        </div>
    );
}

const Gallery = () => {
    return (
        <div >
            <section id="gallery" className="mt-5">
                <div className="d-flex flex-column m lh-1">
                    <span className="pgtitle fw-bold txtcolor3  cm-width m-auto">OUR GALLERY</span>
                    <span className="pgsubtitle fw-normal txtcolor2 m-auto">A glimpse into our practice</span>
                </div>
                <div className="row mt-4 g-card ">
                    <GalleryCard gimg={gallery1} caption="Office and Observation Room" />
                    <GalleryCard gimg={gallery2} caption="Dental Lab" />
                    <GalleryCard gimg={gallery3} caption="Staff Working" />
                </div>
                <div className="row mt-4 g-card ">
                    <GalleryCard gimg={gallery4} caption="Toothbrush" />
                    <GalleryCard gimg={gallery5} caption="Dentist Chair" />
                    <GalleryCard gimg={gallery6} caption="Operation" />
                </div>
            </section>
        </div>
    )
}

export default Gallery
