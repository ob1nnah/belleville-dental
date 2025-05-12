import React from 'react'
import LCard from '../LCard/LCard.jsx'
import { motion } from 'framer-motion'
import './Education.css'

//media
import edulogo1 from '/edulogo1.png';
import edulogo2 from '/edulogo2.png';
import edu1 from '/edu1.png';
import edu2 from '/edu2.png';
import PatientEducation from '../../assets/docs/Empowering Patients Through Knowledge.pdf';
import ProfessionalDevelopment from '../../assets/docs/Advancing Skills for Modern Dentistry.pdf';

const Education = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <section>
                    <div className="d-flex flex-column lh-1">
                        <span className="pgtitle fw-bold txtcolor3 cm-width">LEARN WITH US</span>
                        <span className="pgsubtitle fw-normal txtcolor2">DENTAL EDUCATION FOR ALL</span>
                    </div>
                    <div className="d-flex flex justify-content-between card-fix">
                        <LCard filename={PatientEducation} cimg={edu1} icon={edulogo1} iconalt="edulogo1" caption="Patient Education" subcaption="Comprehensive resources for dental health" alt="education banner" />
                        <LCard filename={ProfessionalDevelopment} cimg={edu2} icon={edulogo2} iconalt="edulogo2" caption="Professional Development" subcaption="Continuing education for dental professionals" alt="education banner" />
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Education
