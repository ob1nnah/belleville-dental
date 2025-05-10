import React from 'react'
import './LCard.css';

const LCard = ( {cimg, cimgalt, icon, iconalt, caption, subcaption, filename }) => {
    return (
        <>
            <div className="l-card d-flex flex-column mt-4 shadow-sm">
                <img draggable="false" className="lcardimage" src={cimg} alt={cimgalt} />
                <div className="lc-margin flex-column d-flex">
                    <img className="lcardlogo" src={icon} alt={iconalt} />
                    <span className="fw-bold lcardname txtcolor3">{caption}</span>
                    <p className="">{subcaption}</p>
                    <a href={filename} target="_blank" className="redbtn mt-3">Learn More</a>
                </div>
            </div>
        </>
    )
}


export default LCard
