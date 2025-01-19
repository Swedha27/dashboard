import React from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend } from 'recharts';
import { sampleData } from '../data/sampleData';

function RadarChartComponent() {
  return (
    <div className="chart-container">
      <h2>Performance Comparison</h2>
      <RadarChart outerRadius={150} width={600} height={400} data={sampleData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="month" />
        <PolarRadiusAxis />
        <Radar name="Sales" dataKey="sales" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Revenue" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Tooltip />
        <Legend
          layout="horizontal"       
          verticalAlign="bottom"     
          align="center"             
        />
      </RadarChart>
    </div>
  );
}

export default RadarChartComponent;
