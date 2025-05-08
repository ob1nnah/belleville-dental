import React from 'react'
import './AboutUs.css'
import { motion } from 'framer-motion'
import { FaTooth } from 'react-icons/fa'
//media
import mission1 from '../../../public/mission1.png';
import mission2 from '../../../public/mission2.png';
import mission3 from '../../../public/mission3.png';
import mission4 from '../../../public/mission4.png'

const AboutUsCard = ({ audesc }) => {
    return (
        <>
            <div className="info-card">
                <div className="icon"><FaTooth /></div>
                <p className="card-title mt-2">{audesc}</p>
            </div>
        </>
    )
}

const MissionList = ({ missioncaption, missionimg, missionimgcaption }) => {
    return (
        <>
            <li className="missionlistcaption"><img draggable="false" className="mlistimg" src={missionimg} alt={missionimgcaption} />{missioncaption}</li>
        </>
    )
}

const Aboutus = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}   //same with motion.div in Products.jsx Research.jsx, App.jsx,  and Aboutus.jsx
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <section>
                    <div className="d-flex flex-column lh-1">
                        <span className="pgtitle fw-bold txtcolor3 mt-4 cm-width">OUR COMMITMENT</span>
                        <span className="pgsubtitle fw-normal txtcolor2">DENTAL EDUCATION FOR ALL</span>
                        <span className="mission-title txtcolor3 mt-4 mb-4">Our Mission</span>
                        <p className="customgrey mission-text">"Experience gentle, professional care the gives you confidence to smile. Progessive dental solutions for your family."</p>
                        <ul className="list-unstyled d-flex flex-column">
                            <MissionList missionimgcaption="doctor silhoutte" missionimg={mission1} missioncaption="Expert Team" />
                            <MissionList missionimgcaption="people silhoutte" missionimg={mission2} missioncaption="Family Focus" />
                            <MissionList missionimgcaption="badge" missionimg={mission3} missioncaption="Quality Care" />
                            <MissionList missionimgcaption="medical help" missionimg={mission4} missioncaption="Gentle Care" />
                        </ul>
                    </div>

                    <div className="text-center mt-5 mb-5">
                        <p className="mission-text2 txtcolor3">"To provide exceptional dental care with a commitment to comfort, quality, and lasting oral health."</p>

                        <div className="a-cards">
                            <AboutUsCard audesc="State-of-the-art Technology" />
                            <AboutUsCard audesc="Experienced Dentists" />
                            <AboutUsCard audesc="Comfortable Environment" />
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Aboutus
