import React from 'react';
import LineChartComponent from './components/LineChartComponent';
import BarChartComponent from './components/BarChartComponent';
import PieChartComponent from './components/PieChartComponent';
import AreaChartComponent from './components/AreaChartComponent';
import RadarChartComponent from './components/RadarChartComponent';

function App() {
  return (
    <div className="dashboard">
      <div className="outer-container"> {/* Outer container wrapping the content */}
        <h1>Data Visualization Dashboard</h1>
        <div className="charts"> {/* Inner container holding the charts */}
          <div className="chart-container">
            <LineChartComponent />
          </div>
          <div className="chart-container">
            <BarChartComponent />
          </div>
          <div className="chart-container">
            <PieChartComponent />
          </div>
          <div className="chart-container">
            <AreaChartComponent />
          </div>
          <div className="chart-container">
            <RadarChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
