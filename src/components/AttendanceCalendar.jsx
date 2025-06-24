// AttendanceCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AttendanceCalendar.css';

export default function AttendanceCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-box">
      <h3>Monthly Attendance</h3>
      <Calendar
        onChange={setValue}
        value={value}
        calendarType="gregory"
      />
    </div>
  );
}
