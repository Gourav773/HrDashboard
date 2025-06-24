import React from 'react';
import './DashboardCard.css';

export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="dashboard-card">
      <div className="card-icon">{icon}</div>
      <div className="card-details">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
}