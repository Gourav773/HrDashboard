import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './WorkingHoursChart.css';

export default function WorkingHoursChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://hrbackend-tf6p.onrender.com/api/hours')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="chart-container">
      <h3>Working Hours</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Bar dataKey="hours" fill="#a066e8" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
