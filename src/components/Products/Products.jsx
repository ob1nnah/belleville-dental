import React from 'react'
import { motion } from 'framer-motion'

const Products = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}  //same with motion.div in Products.jsx Research.jsx, App.jsx,  and Aboutus.jsx
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <section>
                    <div className="d-flex flex-column lh-1">
                        <span className="pgtitle fw-bold txtcolor3 mt-4 cm-width">HERE ARE OUR PRODUCTS</span>
                        <span className="pgsubtitle fw-normal txtcolor2">DENTAL EDUCATION FOR ALL</span>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Products
