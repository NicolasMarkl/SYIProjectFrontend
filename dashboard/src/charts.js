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

function getTop10Data(dataArray, labelKey, valueKey) {
  const sortedData = [...dataArray].sort((a, b) => b[valueKey] - a[valueKey]);
  const top10 = sortedData.slice(0, 10);
  const otherTotal = sortedData.slice(10).reduce((sum, item) => sum + item[valueKey], 0);
  if (sortedData.length > 10) {
    top10.push({ [labelKey]: 'Other', [valueKey]: otherTotal });
  }

  return top10;
}

function BudgetDashboard({ data }) {
  const top10Konto = getTop10Data(data.byKonto, 'konto', 'value');
  const top10VASTELLE = getTop10Data(data.byVASTELLE, 'category', 'value');

  const byKontoLabels = top10Konto.map(item => item.konto);
  const byKontoValues = top10Konto.map(item => item.value);

  const byVASTELLELabels = top10VASTELLE.map(item => item.category);
  const byVASTELLEValues = top10VASTELLE.map(item => item.value);

  const accountData = {
    labels: byKontoLabels,
    datasets: [
      {
        label: 'Budget Distribution by Account',
        data: byKontoValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const departmentData = {
    labels: byVASTELLELabels,
    datasets: [
      {
        label: 'Budget Distribution by Department',
        data: byVASTELLEValues,
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
          <h2>Verteilung auf die Konten</h2>
          <Pie data={accountData} options={options} />
        </div>
        <div>
          <h2>Verteilung auf die Stabstellen</h2>
          <Bar data={departmentData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default BudgetDashboard;
