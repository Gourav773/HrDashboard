import React from 'react';
import './Sidebar.css';
import { FaUser, FaChartPie, FaFileAlt, FaTimes } from 'react-icons/fa';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        Maxx<span className="highlight">HR</span>
        <span className="close-btn" onClick={toggleSidebar}><FaTimes /></span>
      </div>
      <ul className="nav">
        <li><FaUser /> Account</li>
        <li><FaChartPie /> Skills</li>
        <li><FaFileAlt /> Document Board</li>
      </ul>
    </div>
  );
}
