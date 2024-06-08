import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

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

const backgroundColors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(199, 199, 199, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 99, 132, 0.2)',
];

const borderColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(199, 199, 199, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 99, 132, 1)',
];

function processRevenueData(revenueData) {
  const labels = revenueData.map(item => item.date);
  const values = revenueData.map(item => item.amount);
  
  return {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: values,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
}

function BudgetDashboard({ data }) {
  if (!data || !data.byKategorie || !data.byUnterkategorie || !data.revenue || !data.total) {
    return <h2>No data found</h2>;
  }

  const byKategorieLabels = data.byKategorie.map(item => item.category);
  const byKategorieValues = data.byKategorie.map(item => item.amount);

  const byUnterKategorieLabels = data.byUnterkategorie.map(item => item.category);
  const byUnterKategorieValues = data.byUnterkategorie.map(item => item.amount);

  const revenueLabels = data.revenue.map(item => item.category);
  const revenueValues = data.revenue.map(item => item.amount);

  const accountData = {
    labels: byKategorieLabels,
    datasets: [
      {
        label: 'Budgetverteilung in Kategorien',
        data: byKategorieValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const departmentData = {
    labels: byUnterKategorieLabels,
    datasets: [
      {
        label: 'Budgetverteilung in Unterkategorien',
        data: byUnterKategorieValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const revenueData = {
    labels: revenueLabels,
    datasets: [
      {
        label: 'Revenue',
        data: revenueValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Gesamtbudget: {data.total} EUR</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>Verteilung auf die Kategorien</h2>
          <Pie data={accountData} options={options} />
        </div>
        <div>
          <h2>Verteilung auf die Unterkategorien</h2>
          <Bar data={departmentData} options={options} />
        </div>
        <div>
          <h2>Verteilung der Einnahmen</h2>
          <Pie data={revenueData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default BudgetDashboard;
