import React from 'react'
import './Research.css'
import LCard from '../LCard/LCard.jsx'
import { motion } from 'framer-motion'

import rlogo1 from '/rlogo1.png';
import rlogo2 from '/rlogo2.png';
import research1 from '/research1.png';
import research2 from '/research2.png';
import researchvideo from '/research.mp4';
import ClinicalStudies from '../../assets/docs/Clinical Studies Overview.pdf';
import InnovationinTechnology from '../../assets/docs/Innovation in Technology Overview.pdf';


const JustACard = ({ statsno, statsdesc }) => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justacard shadow-sm">
                <span className="txtcolor2 statsno fw-semibold">{statsno}</span>
                <p className="statsdesc">{statsdesc}</p>
            </div>
        </>
    )
}

const Research = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}  //same with motion.div in Products.jsx Research.jsx, App.jsx,  and Aboutus.jsx
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
<section className="research-container">
  <div className="d-flex flex-column lh-1 text-center text-md-start">
    <span className="pgtitle fw-bold txtcolor3 cm-width mx-auto mx-md-0">ADVANCING DENTAL CARE</span>
    <span className="pgsubtitle fw-normal txtcolor2">BRIGHTER FUTURES THROUGH RESEARCH</span>
  </div>

  <div className="video-container">
    <iframe
      className="educationvideo"
      src={researchvideo}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>

  <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
    <LCard
      filename={ClinicalStudies}
      cimg={research1}
      icon={rlogo1}
      iconalt="rlogo1"
      caption="Clinical Studies"
      subcaption="Leading research in dental treatments and procedures"
      alt="research banner"
    />
    <LCard
      filename={InnovationinTechnology}
      cimg={research2}
      icon={rlogo2}
      iconalt="rlogo2"
      caption="Innovation in Technology"
      subcaption="Developing cutting-edge dental technologies"
      alt="research banner"
    />
  </div>

  <span className="statstitle d-flex justify-content-center mt-5 fw-semibold txtcolor3">
    Research Impact
  </span>

  <div className="d-flex flex-wrap justify-content-center mt-4 gap-4">
    <JustACard statsno="50+" statsdesc="Research Papers Published" />
    <JustACard statsno="1000+" statsdesc="Patients Involved" />
    <JustACard statsno="25+" statsdesc="Research Papers" />
  </div>
</section>

            </motion.div>
        </>
    )
}

export default Research
