import React from 'react';
import Sidebar from './Sidebar';
import AdminProductList from './AdminProductList';
import '../styled/dashboard.css';

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-content">
          <h1 className="dashboard-title">Product Management</h1>
          <AdminProductList />
        </div>
      </div>
    </div>
  );
}
