import React, { useEffect, useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import WorkingHoursChart from '../components/WorkingHoursChart';
import LeavePieChart from '../components/LeavePieChart';
import AttendanceCalendar from '../components/AttendanceCalendar';
import { FaClock, FaHourglassHalf, FaCoffee } from 'react-icons/fa';
import './Dashboard.css';

export default function Dashboard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://hrbackend-tf6p.onrender.com/api/cards')
      .then(res => res.json())
      .then(setCards);
  }, []);

  const icons = {
    'Log Hours': <FaClock />,
    'Remaining Hours': <FaHourglassHalf />,
    'Breaking Hours': <FaCoffee />
  };

  return (
    <div className="dashboard-wrapper">
      <h2 className="welcome">Welcome Back, Gourav Yadav</h2>
      <p className="subtext">Today You Have 0 Notifications</p>

      {/* Cards Section */}
      <div className="card-grid">
        {cards.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            value={card.value}
            icon={icons[card.title]}
          />
        ))}
      </div>

      {/* Charts and Calendar */}
      <div className="dashboard-grid">
        <WorkingHoursChart />
        <LeavePieChart />
        <AttendanceCalendar />
      </div>
    </div>
  );
}
