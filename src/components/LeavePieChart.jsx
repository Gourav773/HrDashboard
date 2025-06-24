import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './LeavePieChart.css';

const COLORS = ['#4CAF50', '#FF9800', '#3F51B5', '#F44336'];

export default function LeavePieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://hrbackend-tf6p.onrender.com/api/leaves')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="pie-chart-container">
      <h3>Leave Summary</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
