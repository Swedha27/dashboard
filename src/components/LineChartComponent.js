import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { sampleData } from '../data/sampleData';

function LineChartComponent() {
  return (
    <div className="chart-container">
      <h2>Sales Over Time</h2>
      <LineChart width={600} height={300} data={sampleData}>
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend 
          layout="horizontal"        // Places the legend horizontally
          verticalAlign="bottom"      // Aligns the legend below the chart
          align="center"/>
      </LineChart>
    </div>
  );
}

export default LineChartComponent;
