import React from 'react';
import { Typography, Grid } from '@mui/material';
import Charts from './charts';
import { useEffect, useState } from 'react';
import { fetchData } from './api';
import Layout from './layout';

const sampleData = {
  // Define your sample data structure here
  budget: [
    { year: 2020, amount: 1000 },
    { year: 2021, amount: 1200 },
    { year: 2022, amount: 1500 }
  ],
  expenses: [
    { category: 'Education', amount: 500 },
    { category: 'Health', amount: 700 },
    { category: 'Infrastructure', amount: 300 }
  ]
};

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedState, setSelectedState] = useState('NÖ');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const apiData = await fetchData(`localhost:5000/api/budgetdata?state=${selectedState}`);
        if (!apiData || Object.keys(apiData).length === 0) {
          setData(sampleData);
        } else {
          setData(apiData);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setData(sampleData);  // Fallback to sample data in case of an error
        setLoading(false);
      }
    };

    loadData();
  }, [selectedState]);

  if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error loading data: {error}</p>;
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Übersicht
      </Typography>
      <Grid container spacing={3}>
        {data && data.budget && data.budget.map((chartData, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Charts data={chartData} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export default Dashboard;
