import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { sampleData } from '../data/sampleData';

function BarChartComponent() {
  return (
    <div className="chart-container">
      <h2>Revenue by Month</h2>
      <BarChart width={600} height={300} data={sampleData}>
        <Bar dataKey="revenue" fill="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend 
          layout="horizontal"        
          verticalAlign="bottom"      
          align="center"/>
      </BarChart>
    </div>
  );
}

export default BarChartComponent;
