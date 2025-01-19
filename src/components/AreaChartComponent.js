import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { sampleData } from '../data/sampleData';

function AreaChartComponent() {
  return (
    <div className="chart-container">
      <h2>Sales Growth Over Time</h2>
      <AreaChart width={600} height={300} data={sampleData}>
        <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend 
        layout="horizontal"        // Places the legend horizontally
        verticalAlign="bottom"      // Aligns the legend below the chart
        align="center" />
      </AreaChart>
    </div>
  );
}

export default AreaChartComponent;
