import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { sampleData } from '../data/sampleData';

const COLORS = [
    '#FF6F61', '#FFB3B3', '#FF3B30',  // Red tints and shades
    '#FFD700', '#FFDF99', '#FFBF00',  // Yellow tints and shades
    '#28A745', '#A9DFBF', '#1C7430',  // Green tints and shades
    '#17A2B8', '#A5D8E7', '#0A5D6A',  // Cyan tints and shades
  ];

function PieChartComponent() {
  return (
    <div className="chart-container">
      <h2>Market Share by Product</h2>
      <PieChart width={500} height={400}> {/* Increased chart width and height */}
        <Pie
          data={sampleData}
          dataKey="sales"
          nameKey="month"
          cx="50%"  // Move chart more to the left to create space for the legend
          cy="50%"
          outerRadius={120}  // Decrease outer radius to make pie smaller
          fill="#8884d8"
          label
        >
          {sampleData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"   // Place the legend to the right side of the chart
          wrapperStyle={{ paddingLeft: '20px' }}  // Add extra space between chart and legend
        />
      </PieChart>
    </div>
  );
}

export default PieChartComponent;
