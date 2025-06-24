import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    setToken(savedToken);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? (
            <div className="app-layout">
              <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
              <div className="main-content">
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="dashboard-content">
                  <Dashboard />
                </div>
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/login" element={<Login onLogin={setToken} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
