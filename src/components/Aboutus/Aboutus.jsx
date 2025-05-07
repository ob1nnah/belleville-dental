import React from 'react'
import './AboutUs.css'
import { motion } from 'framer-motion'
import { FaTooth } from 'react-icons/fa'

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
                    </div>
                </section>

                <section className="about-section c-pad">
                    <p className="mission-text txtcolor3">"To provide exceptional dental care with a commitment to comfort, quality, and lasting oral health."</p>

                    <div className="card-container">
                        <div className="info-card">
                            <div className="icon"><FaTooth /></div>
                            <p className="card-title">State-of-the-art Technology</p>
                        </div>
                        <div className="info-card">
                            <div className="icon"><FaTooth /></div>
                            <p className="card-title">Experienced Dentists</p>
                        </div>
                        <div className="info-card">
                            <div className="icon"><FaTooth /></div>
                            <p className="card-title">Comfortable Environment</p>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Aboutus
