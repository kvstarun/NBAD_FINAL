import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartComponent({ chartType }) {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!chartType) {
        setError('Chart type is not provided');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3000/api/chart-data?type=${encodeURIComponent(chartType)}`
        );
        const { labels, datasets } = response.data;

        if (!labels || datasets.length === 0) {
          throw new Error('No data found for the selected chart type.');
        }

        setChartData({ labels, datasets });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching chart data:', error);
        setError(error.response ? error.response.data.msg : 'Server error');
        setLoading(false);
      }
    };

    fetchData();
  }, [chartType]);

  if (loading) return <p>Loading chart data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: `Chart: ${chartType}` },
          },
          scales: {
            x: {
              stacked: chartType === 'Complex Bar Chart: Multi-Layer Analysis',
            },
            y: {
              stacked: chartType === 'Complex Bar Chart: Multi-Layer Analysis',
            },
          },
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default ChartComponent;
