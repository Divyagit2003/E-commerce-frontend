import React from 'react';
import '../styled/Contact.css';

const Contact = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-section">
        <div className="contact-form-container">
          <h2 className="contact-heading">Get in Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required className="contact-input" />
            <input type="email" placeholder="Your Email" required className="contact-input" />
            <input type="tel" placeholder="Your Phone Number" required className="contact-input" />
            <textarea placeholder="Your Message" rows="4" className="contact-textarea" required></textarea>
            <button type="submit" className="contact-button">Send Message</button>
          </form>
        </div>
        <div className="contact-map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864400628754!2d144.9574433156942!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779bd153c93c8d!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1614315706822!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            className="contact-map"
          ></iframe>
        </div>
      </div>

      <footer className="contact-footer">
        <p>&copy; 2025 BrandName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
