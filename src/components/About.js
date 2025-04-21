import React from 'react';
import '../styled/About.css'; // Make sure this is imported

const About = () => {
  return (
    <div>
      <div className="about-section-custom text-center">
        <h1 className="about-heading">About Us</h1>
        <p className="about-description">
          We are passionate about providing high-quality products and services to our customers.
        </p>
      </div>

      <div className="container container-custom my-5">
        <h2 className="text-center section-heading">Our Mission</h2>
        <p className="text-center section-paragraph">
          Our mission is to create products that improve the lives of our customers. We focus on
          innovation, quality, and customer satisfaction in everything we do.
        </p>
      </div>

      <div className="container container-custom story-section my-5">
        <h2 className="text-center section-heading">Our Story</h2>
        <p className="text-center section-paragraph">
          Founded in 2020, BrandName started as a small startup with a big vision. Over the years, we
          have grown into a recognized name in the industry, delivering products that stand out for their
          quality and reliability.
        </p>
      </div>

      <div className="container my-5">
        <h2 className="text-center section-heading">Meet the Team</h2>
        <div className="team-cards">
          <div className="card-custom">
            <img src="./assests/person1.jpg" className="card-img-top" alt="John Doe" />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Founder & CEO</p>
            </div>
          </div>
          <div className="card-custom">
            <img src="./assests/person2.jpg" className="card-img-top" alt="Jane Smith" />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Chief Marketing Officer</p>
            </div>
          </div>
          <div className="card-custom">
            <img src="./assests/person3.jpg" className="card-img-top" alt="Emily Johnson" />
            <div className="card-body">
              <h5 className="card-title">Emily Johnson</h5>
              <p className="card-text">Product Manager</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center footer-custom">
        <p>&copy; 2025 BrandName. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
