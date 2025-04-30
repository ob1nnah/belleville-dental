import React from 'react'
import './Research.css'
import LCard from '../LCard/LCard.jsx'

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
            <section>
                <div className="d-flex flex-column lh-1">
                    <span className="pgtitle fw-bold txtcolor3 mt-4 cm-width">ADVANCING DENTAL CARE</span>
                    <span className="pgsubtitle fw-normal txtcolor2 mt-4">BRIGHTER FUTURES THROUGH RESEARCH</span>
                </div>
                <div className="d-flex justify-content-between">
                    <LCard cimg="research1.png" icon="rlogo1.png" iconalt="rlogo1" caption="Clinical Studies" subcaption="Leading research in dental treatments and procedures" alt="research banner" />
                    <LCard cimg="research2.png" icon="rlogo2.png" iconalt="rlogo2" caption="Innovation in Technology" subcaption="Developing cutting-edge dental technologies" alt="research banner" />
                </div>
                <span className="statstitle d-flex justify-content-center mt-5 fw-semibold txtcolor3">Research Impact</span>
                <div>
                    <div className="d-flex justify-content-between mt-5">
                        <JustACard statsno="50+" statsdesc="Research Papers Published" />
                        <JustACard statsno="1000+" statsdesc="Patients Involved" />
                        <JustACard statsno="25+" statsdesc="Research Papers" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Research
