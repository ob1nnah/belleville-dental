import React from 'react'
import './AboutUs.css'
import { motion } from 'framer-motion'
import { FaTooth, FaUsers } from 'react-icons/fa'
import { MdFamilyRestroom } from 'react-icons/md'
import { GiRibbonMedal } from 'react-icons/gi'
import { FaHandHoldingMedical } from 'react-icons/fa'
import dental from '../../assets/images/dental-ops.jpg'

const features = [
  { icon: <FaUsers />, label: 'Expert Team' },
  { icon: <MdFamilyRestroom />, label: 'Family Focus' },
  { icon: <GiRibbonMedal />, label: 'Quality Care' },
  { icon: <FaHandHoldingMedical />, label: 'Gentle Care' },
];

const cards = [
  { icon: <FaTooth />, title: 'State-of-the-art Technology' },
  { icon: <FaTooth />, title: 'Experienced Dentists' },
  { icon: <FaTooth />, title: 'Comfortable Environment' },
];

const Aboutus = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Page Title */}
      <section className="c-pad">
        <div className="d-flex flex-column lh-2">
          <span className="pgtitle fw-bold txtcolor3 ">OUR</span>
          <span className="pgtitle fw-bold txtcolor3 ">COMMITMENT</span>
          <span className="pgsubtitle fw-normal txtcolor2">TO DENTAL EXCELLENCE</span>
        </div>
      </section>

      {/* Two‑column Commitment Section */}
      <section className="commitment-section c-pad">
        {/* Left side */}
        <motion.div
          className="commitment-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="our-mission txtcolor3">Our Mission</h3>
          <p className="mission-text txtcolor4">
            Experience gentle, professional care that gives you confidence to smile. Progressive dental solutions for your entire family.
          </p>
          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="feature-item customgrey"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="feature-icon txtcolor2">{f.icon}</div>
                <span className="feature-label txtcolor4">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side image */}
        <motion.div
          className="commitment-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={dental}
            className='dental-image'
            alt="Dental Clinic"
          />
        </motion.div>
      </section>

      {/* Three cards in place of pictures */}
      <section className="about-section c-pad">
        <div className="card-container">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className="info-card"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="icon txtcolor3">{c.icon}</div>
              <p className="card-title txtcolor4">{c.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default Aboutus