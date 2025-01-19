import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { sampleData } from '../data/sampleData';

const COLORS = [
    '#FF6F61', '#FFB3B3', '#FF3B30',  
    '#FFD700', '#FFDF99', '#FFBF00',  
    '#28A745', '#A9DFBF', '#1C7430',  
    '#17A2B8', '#A5D8E7', '#0A5D6A',  
  ];

function PieChartComponent() {
  return (
    <div className="chart-container">
      <h2>Market Share by Product</h2>
      <PieChart width={500} height={400}> {}
        <Pie
          data={sampleData}
          dataKey="sales"
          nameKey="month"
          cx="50%"  
          cy="50%"
          outerRadius={120} 
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
          align="right"   
          wrapperStyle={{ paddingLeft: '20px' }}  
        />
      </PieChart>
    </div>
  );
}

export default PieChartComponent;
