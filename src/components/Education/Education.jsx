import React from 'react'
import LCard from '../LCard/LCard.jsx'
import { motion } from 'framer-motion'

const Education = () => {
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
                        <span className="pgtitle fw-bold txtcolor3 mt-4 cm-width">LEARN WITH US</span>
                        <span className="pgsubtitle fw-normal txtcolor2">DENTAL EDUCATION FOR ALL</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <LCard cimg="edu1.png" icon="edulogo1.png" iconalt="edulogo1" caption="Patient Education" subcaption="Comprehensive resources for dental health" alt="education banner" />
                        <LCard cimg="edu2.png" icon="edulogo2.png" iconalt="edulogo2" caption="Professional Development" subcaption="Continuing education for dental professionals" alt="education banner" />
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Education
