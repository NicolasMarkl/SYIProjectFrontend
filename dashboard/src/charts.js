import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data for budget distribution across accounts and departments
const budgetTotal = 1000000; // Total budget amount

const accountData = {
  labels: ['Account 1', 'Account 2', 'Account 3', 'Account 4'],
  datasets: [
    {
      label: 'Budget Distribution by Account',
      data: [300000, 250000, 200000, 250000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const departmentData = {
  labels: ['Department 1', 'Department 2', 'Department 3'],
  datasets: [
    {
      label: 'Budget Distribution by Department',
      data: [400000, 350000, 250000],
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(199, 199, 199, 0.2)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(199, 199, 199, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
};

function BudgetDashboard() {
  return (
    <div>
      <h2>Gesamtbudget: {budgetTotal} EUR</h2>

      <h2>Verteilung auf die Konten</h2>
      <Pie data={accountData} options={options} />

      <h2>Verteilung auf die Stabstellen</h2>
      <Bar data={departmentData} options={options} />
    </div>
  );
}

export default BudgetDashboard;
