import React from 'react';
import '../styled/Feature.css'; // make sure this file is in the same directory

const Feature = () => {
    return (
        <>
            <div className="feature-container my-4">
                <h2 className="feature-heading text-center mb-4">Why Choose Us?</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-card bg-feature-blue">
                            <div className="feature-card-body">
                                <h5 className="feature-card-title">Fast Delivery</h5>
                                <p className="feature-card-text">We offer fast and reliable delivery on all our products.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card bg-feature-green">
                            <div className="feature-card-body">
                                <h5 className="feature-card-title">High Quality</h5>
                                <p className="feature-card-text">Our products are sourced from the best manufacturers around the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card bg-feature-red">
                            <div className="feature-card-body">
                                <h5 className="feature-card-title">Customer Support</h5>
                                <p className="feature-card-text">Our dedicated support team is always here to help you with any queries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="feature-footer text-center text-white py-3">
                <p>&copy; 2025 BrandName. All Rights Reserved.</p>
                <p>
                    <a href="#privacy-policy" className="footer-link">Privacy Policy</a> | 
                    <a href="#terms" className="footer-link">Terms of Service</a>
                </p>
            </footer>
        </>
    )
}
export default Feature;
