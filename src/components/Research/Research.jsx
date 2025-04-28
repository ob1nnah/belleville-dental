import React from 'react'
import './Research.css'

const rCard = () => {
    return (
        <></>
    )
}


const Research = () => {
    return (
        <>
            <section className="research-container c-pad mt-5">
                <div className="d-flex flex-column lh-1">
                    <span className="pgtitle fw-bold txtcolor3 mt-4 width">ADVANCING DENTAL CARE</span>
                    <span className="pgsubtitle fw-normal txtcolor2 mt-4">BRIGHTER FUTURES THROUGH RESEARCH</span>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="research-card d-flex flex-column mt-5 shadow-sm">
                        <img className="cardimage" src="research1.png" alt="research banner" />
                        <img className="rlogo" src="rlogo1.png" alt="rlogo1" />
                        <span className="fw-bold cardname txtcolor3">Clinical Studies</span>
                        <p>Leading research in dental treatments and procedures</p>
                        <a href="" className="productbtn mt-4">Learn More</a>
                    </div>
                    <div className="research-card d-flex flex-column mt-5 shadow-sm">
                        <img className="cardimage" src="research2.png" alt="research banner" />
                        <img className="rlogo" src="rlogo2.png" alt="rlogo2" />
                        <span className="fw-bold cardname txtcolor3">Innovation in Technology</span>
                        <p>Developing cutting-edge dental technologies</p>
                        <a href="" className="productbtn mt-4">Learn More</a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Research
