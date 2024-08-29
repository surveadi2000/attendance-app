// src/App.js
import React from 'react';
import PieChart from './components/pieChart.js';
import { weeklyData, monthlyData, allTimeData } from './data/data.js';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Attendance Charts</h1>
      <div className="chart-container">
        <div className="chart">
          <PieChart data={weeklyData} title="Weekly Attendance" />
        </div>
        <div className="chart">
          <PieChart data={monthlyData} title="Monthly Attendance" />
        </div>
        <div className="chart">
          <PieChart data={allTimeData} title="All-Time Attendance" />
        </div>
      </div>
    </div>
  );
}

export default App;
