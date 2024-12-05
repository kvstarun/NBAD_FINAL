import React, { useState } from 'react';
import ChartComponent from './ChartComponent';

function Reports() {
  const [currentChart, setCurrentChart] = useState('Static Historical Data');

  const charts = [
    // 'Static Historical Data',
    'Dynamic Future Projections',
    'Complex Bar Chart: Multi-Layer Analysis', // Add this if required
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Reports Dashboard</h1>
      <div style={{ marginBottom: '20px' }}>
        {charts.map((chart, index) => (
          <button
            key={index}
            onClick={() => setCurrentChart(chart)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              backgroundColor: currentChart === chart ? '#007bff' : '#ccc',
              color: currentChart === chart ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {chart}
          </button>
        ))}
      </div>
      <ChartComponent chartType={currentChart} />
    </div>
  );
}

export default Reports;
