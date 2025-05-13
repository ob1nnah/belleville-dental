import React from 'react';
import './LCard.css';

const LCard = ({ cimg, cimgalt, icon, iconalt, caption, subcaption, filename }) => {
    return (
        <>
            <div className='flex flex-wrap '>
                <div className="l-card c-shadow" style={{ display: 'flex', flexDirection: 'column', marginTop: '1.5rem' }}>
                    <img draggable="false" className="lcardimage" src={cimg} alt={cimgalt} />
                    <div className="lc-margin d-flex" style={{ flexDirection: 'column' }}>
                        <img className="lcardlogo" src={icon} alt={iconalt} />
                        <span className="lcardname fw-bold txtcolor3">{caption}</span>
                        <p>{subcaption}</p>
                        <a href={filename} target="_blank" className="redbtn mt-1">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LCard;