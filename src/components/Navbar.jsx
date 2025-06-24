import React from 'react';
import './Navbar.css';
import { FaBell, FaCog, FaFlag, FaBars } from 'react-icons/fa';

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <FaBars className="menu-icon" onClick={toggleSidebar} />
        <span className="navbar-title">MaxxHR Dashboard</span>
      </div>

      <div className="navbar-right">
        <FaCog className="icon" title="Settings" />
        <FaBell className="icon" title="Notifications" />
        <FaFlag className="icon" title="Language" />
        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="User" />
          <div>
            <div className="name">Gourav Yadav</div>
            <div className="role">React.js Developer</div>
          </div>
        </div>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/login';
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
