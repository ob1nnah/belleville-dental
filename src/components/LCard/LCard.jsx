import React from 'react';
import './LCard.css';

const LCard = ({ cimg, cimgalt, icon, iconalt, caption, subcaption, filename }) => {
    return (
        <>
        <div className='flex flex-wrap '>
            
        
            <div className="l-card" style={{ display: 'flex', flexDirection: 'column', marginTop: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                <img draggable="false" className="lcardimage" src={cimg} alt={cimgalt} />
                <div className="lc-margin" style={{ display: 'flex', flexDirection: 'column' }}>
                    <img className="lcardlogo" src={icon} alt={iconalt} />
                    <span className="lcardname" style={{ fontWeight: 'bold', color: '#333' }}>{caption}</span>
                    <p>{subcaption}</p>
                    <a href={filename} target="_blank" className="redbtn" style={{ marginTop: '1rem' }}>Learn More</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default LCard;