// Import necessary components and functions from react, react-chartjs-2, and chart.js
'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components required for a line chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample data array, replace it with your actual data array
const sampleData = [
  {
    "time": "1072915200",
    "formattedTime": "Jan 2004",
    "formattedAxisTime": "Jan 1, 2004",
    "value": [55],
    "hasData": [true],
    "formattedValue": ["55"]
  },
  // Add more objects here
];

const InterestOverTimeChart = ({ data }) => {
  // Extracting labels and data for the chart
  const labels = data.map(item => item.formattedTime);
  const chartDataValues = data.map(item => item.value[0]);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Interest Over Time',
        data: chartDataValues,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis from 0
        ticks: {
          // Optional: Format the y-axis ticks as needed
          callback: function(value) {
            return value + "%"; // Append '%' to y-axis values
          }
        }
      }
    },
    plugins: {
      legend: {
        display: true, // Display the legend
      },
      title: {
        display: true, // Display the title
        text: 'Interest Over Time', // Chart title
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

// Usage example, assuming 'sampleData' is your dataset
const ChartComponent = () => {
  return <InterestOverTimeChart data={sampleData} />;
};

export default ChartComponent;
