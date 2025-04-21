import React from 'react';
import { Link } from 'react-router-dom';
import '../styled/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container d-flex align-items-center">
      <Link to="/" className="navbar-brand">E-shop</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <Link to="/product" className="navbar-link">Products</Link>
        <Link to="/login" className="navbar-link">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
