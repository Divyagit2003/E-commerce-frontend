import React from 'react';
import { Link } from 'react-router-dom';
import '../styled/Jumbotron.css';
const Jumbotron = () => {
  return (
    <div className="custom-jumbotron text-center">
      <img src="./assests/shopimage.jpg" alt="Jumbotron Image" className="custom-img-fluid mb-2" />
      <h1 className="display-4 custom-heading">Welcome to Our Products Page!</h1>
      <p className="lead custom-lead">Explore our amazing range of products designed just for you.</p>
      <hr className="my-4 custom-hr" />
      <p className="custom-text">Check out the latest additions to our collection below.</p>
    </div>
  );
}

export default Jumbotron;
