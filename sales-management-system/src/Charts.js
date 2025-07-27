import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, DoughnutController, PieController, LineElement, PointElement  } from 'chart.js';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  DoughnutController,
  PieController,
  LineElement,
  PointElement  
);

const SalesCharts = () => {

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Total Sales (₹)',
      data: [12000, 15000, 18000, 21000, 25000, 30000],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }]
  };

  const pieData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [{
      label: 'Sales by Region',
      data: [40, 30, 20, 10],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)', 
        'rgba(255, 99, 132, 0.6)', 
        'rgba(75, 192, 192, 0.6)', 
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 99, 132, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Sales Growth (₹)',
      data: [12000, 14000, 16000, 18000, 21000, 25000],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1
    }]
  };

  const doughnutData = {
    labels: ['Electronics', 'Clothing', 'Furniture', 'Books'],
    datasets: [{
      label: 'Sales Share by Category',
      data: [50, 30, 10, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)', 
        'rgba(54, 162, 235, 0.6)', 
        'rgba(75, 192, 192, 0.6)', 
        'rgba(153, 102, 255, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };


return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9', paddingTop: '50px', paddingLeft: '20px' }}>  
        <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Sales Charts</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', width: '90%', maxWidth: '1000px'}}>
            <h2 style={{ textAlign: 'center', color: '#333', gridColumn: 'span 2' }}>Sales Data Overview</h2>

            <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', paddingLeft: '80px', paddingTop: '100px', paddingRight: '80px', margin:'20px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <h3>Monthly Sales (Bar Chart)</h3>
                <Bar data={barData} options={{ responsive: true, scales: { y: { beginAtZero: true, ticks: { callback: (value) => '₹' + value.toLocaleString() } } }}} />
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', paddingLeft: '80px', paddingTop:'200px', paddingRight: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <h3>Sales Distribution by Region (Pie Chart)</h3>
                <Pie data={pieData} options={{ responsive: true }} />
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <h3>Sales Growth Over Year (Line Chart)</h3>
                <Line data={lineData} options={{ responsive: true, scales: { y: { beginAtZero: true, ticks: { callback: (value) => '₹' + value.toLocaleString() } } }}} />
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <h3>Sales Share by Product Category (Doughnut Chart)</h3>
                <Doughnut data={doughnutData} options={{ responsive: true }} />
            </div>
        </div>
    </div>
);
};

export default SalesCharts;
