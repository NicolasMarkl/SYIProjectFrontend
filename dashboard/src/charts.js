import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Divider } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 10,
        font: {
          size: 10,
        },
        padding: 5,
      },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      display: false,
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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  const totalRevenue = data.revenue.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div>
      <Divider />
      <h2>Gesamtbudget: {formatCurrency(data.total)} EUR</h2>
      <h2>Gesamteinnahmen: {formatCurrency(totalRevenue)} EUR</h2>
      <h4>Differenz: {formatCurrency(data.total - totalRevenue)} </h4>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>Verteilung auf die Kategorien</h2>
          <Pie data={accountData} options={pieOptions} />
        </div>
        <div>
          <h2>Verteilung auf die Unterkategorien</h2>
          <Bar data={departmentData} options={barOptions} />
        </div>
        <div>
          <h2>Verteilung der Einnahmen</h2>
          <Pie data={revenueData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
}

export default BudgetDashboard;
