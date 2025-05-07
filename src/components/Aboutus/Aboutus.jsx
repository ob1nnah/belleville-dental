import React from 'react'
import './AboutUs.css'
import { motion } from 'framer-motion'
import { FaTooth } from 'react-icons/fa'

const AboutUsCard = ({ audesc }) => {
    return (
        <>
            <div className="info-card">
                <div className="icon"><FaTooth /></div>
                <p className="card-title">{audesc}</p>
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
                            <MissionList missionimgcaption="doctor silhoutte" missionimg="mission1.png" missioncaption="Expert Team" />
                            <MissionList missionimgcaption="people silhoutte" missionimg="mission2.png" missioncaption="Family Focus" />
                            <MissionList missionimgcaption="badge" missionimg="mission3.png" missioncaption="Quality Care" />
                            <MissionList missionimgcaption="medical help" missionimg="mission4.png" missioncaption="Gentle Care" />
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
