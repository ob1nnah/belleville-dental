import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Products.css'
import productData from './products.json' //datastore
// icons
import { FaStar } from 'react-icons/fa'
import { FaPhone } from "react-icons/fa";

// Component for displaying and submitting ratings
const StarRating = ({ productId, initialRating = 0, onRatingSubmit }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(null);
    const [hasRated, setHasRated] = useState(false);

    const handleRatingSubmit = () => {
        onRatingSubmit(productId, rating);
        setHasRated(true);
    }

    return (
        <div className="star-rating">
            <div className="stars">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label key={i}>
                            <input
                                type="radio"
                                name={`rating-₦{productId}`}
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                disabled={hasRated}
                            />
                            <FaStar
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={20}
                                className="star"
                                onMouseEnter={() => !hasRated && setHover(ratingValue)}
                                onMouseLeave={() => !hasRated && setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
            {!hasRated ? (
                <button className="rating-btn" onClick={handleRatingSubmit}>
                    Submit Rating
                </button>
            ) : (
                <span className="rating-msg">Thank you for your rating!</span>
            )}
        </div>
    );
}

const Product = ({ product, onRatingSubmit }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                    <span className="product-price">₦{product.price.toFixed(2)}</span>
                    <div className="product-rating">
                        <div className="average-rating">
                            <FaStar color="#ffc107" />
                            <span>{product.rating.toFixed(1)} ({product.ratingCount} reviews)</span>
                        </div>
                        <StarRating 
                            productId={product.id} 
                            initialRating={0} 
                            onRatingSubmit={onRatingSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Products = () => {
    // Load products from JSON file
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        // Check if there's saved rating data in localStorage
        const savedProducts = localStorage.getItem('dentalProducts');
        
        if (savedProducts) {
            // Parse saved ratings
            const savedData = JSON.parse(savedProducts);
            
            // Merge: take product details from JSON file but keep user ratings
            const mergedProducts = productData.map(product => {
                // Find matching product in saved data (if exists)
                const savedProduct = savedData.find(p => p.id === product.id);
                
                // If product exists in saved data, keep its rating
                if (savedProduct) {
                    return {
                        ...product,
                        rating: savedProduct.rating, // Keep saved rating
                        ratingCount: savedProduct.ratingCount // Keep saved count
                    };
                }
                return product; // Return new product (basically refreshes the data)
            });
            
            setProducts(mergedProducts);
        } else {
            // No saved data, use products directly from JSON
            setProducts(productData);
        }
    }, []);

    // Handler for when a user submits a rating
    const handleRatingSubmit = (productId, newRating) => {
        const updatedProducts = products.map(product => {
            if (product.id === productId) {
                // Calculate new average rating
                const newTotalRating = product.rating * product.ratingCount + newRating;
                const newRatingCount = product.ratingCount + 1;
                const newAverageRating = newTotalRating / newRatingCount;
                
                return {
                    ...product,
                    rating: newAverageRating,
                    ratingCount: newRatingCount
                };
            }
            return product;
        });
        
        setProducts(updatedProducts);
        
        // Save updated ratings to localStorage
        localStorage.setItem('dentalProducts', JSON.stringify(updatedProducts));
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <section className="products-section">
                    <div className="d-flex flex-column lh-1 mb-5">
                        <span className="pgtitle fw-bold txtcolor3 mt-4">OUR PRODUCTS</span>
                        <span className="pgsubtitle fw-normal txtcolor2">QUALITY DENTAL CARE PRODUCTS</span>
                    </div>
                    <span className="pgsubtitle fw-light txtcolor3">To purchase any of our products, please contact us at <FaPhone/>+234 911 738 3809</span>
                    <div className="products-container">
                        {products.map(product => (
                            <Product 
                                key={product.id} 
                                product={product}
                                onRatingSubmit={handleRatingSubmit}
                            />
                        ))}
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default Products;