import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FAQContactUs.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

//media
import ContactUs1 from '/2BG.png';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span className={`faq-toggle ${isOpen ? 'open' : ''}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQAndContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (could be an API call or other logic)
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        alert('Thanks for your message! We\'ll get back to you soon.');
    };

    const faqItems = [
        {
            question: 'What services do you offer?',
            answer: 'We offer comprehensive dental services including preventive care, cosmetic dentistry, and orthodontics.'
        },
        {
            question: 'How often should I visit the dentist?',
            answer: 'We recommend visiting the dentist every 6 months for regular checkups and professional cleaning.'
        },
        {
            question: 'Do you accept insurance?',
            answer: 'Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage.'
        },
        {
            question: 'What should I do in a dental emergency?',
            answer: 'Call our office immediately. We reserve time for emergency appointments and can provide guidance on handling your situation until you can be seen.'
        },
        {
            question: 'How can I whiten my teeth?',
            answer: 'We offer professional in-office whitening treatments as well as take-home kits. Schedule a consultation to determine the best option for your needs.'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            <section id="faq" className="mt-5">
                <h2 className="section-title">Common Queries (FAQs)</h2>
                <div className="faq-container">
                    {faqItems.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
                <div className="d-flex backimgcontainer" ><img className="backimage imgfx" src={ContactUs1} alt="Banner" /></div>            </section>
            <section id="contactus">
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <div className="contact-detail">
                            <FaEnvelope className="contact-icon" />
                            <span>info@bellevilledental.com</span>
                        </div>
                        <div className="contact-detail">
                            <FaPhone className="contact-icon" />
                            <span>+234 911 738 3809</span>
                        </div>
                        <div className="contact-detail">
                            <FaMapMarkerAlt className="contact-icon" />
                            <span>103 LOCAL GOVERNMENT, 105 Allen Ave, Ikeja 101233, Lagos, Nigeria</span>
                        </div>
                        <div className="contact-detail">
                            <FaClock className="contact-icon" />
                            <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                        </div>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.332311663467!2d3.347061274886769!3d6.605563522204506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9232246d658d%3A0x7abcde53f2b47f7!2sAPTECH%20COMPUTER%20EDUCATION%2C%20ALLEN%20BRANCH!5e0!3m2!1sen!2sng!4v1746732365546!5m2!1sen!2sng"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen="true"
                        />
                    </div>

                    <div className="contact-form">
                        <h3>Send us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                />
                            </div>
                            <button type="submit" className="send-message-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default FAQAndContactUs;