import React from 'react';
import { Link } from 'react-router-dom';
import '../styled/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-menu">
        <li><Link to="/addproduct">➕ Add Product</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
