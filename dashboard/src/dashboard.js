import React, { useEffect, useState } from 'react';
import { Typography, Grid, CircularProgress, Alert } from '@mui/material';
import Charts from './charts';
import { fetchData } from './api';
import Layout from './layout';
import BudgetComparisonTable from './comparisonTable';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2024');

  const handleYearChange = (year) => {
    console.log('Year changed to:', year);
    setError(null);
    setSelectedYear(year);
  };

  useEffect(() => {
    const loadData = async () => {
      console.log('Loading data for year:', selectedYear);
      setLoading(true);
      try {
        if (selectedYear === 'Vergleich') {
          const [budgetComparison, top10Increase, top10Decrease] = await Promise.all([
            fetchData(`http://localhost:5081/Budget/comparison`),
            fetchData(`http://localhost:5081/Budget/top10Increase`),
            fetchData(`http://localhost:5081/Budget/top10Decrease`),
          ]);

          const combinedData = {
            budgetComparison: budgetComparison,
            top10Increase: top10Increase,
            top10Decrease: top10Decrease,
          };

          if (!combinedData || Object.keys(combinedData).length === 0) {
            setError('No data found');
          } else {
            setData(combinedData);
          }
          setLoading(false);
        } else {
          const [groupedByKategorie, groupedByUnterkategorie, total, revenue] = await Promise.all([
            fetchData(`http://localhost:5081/Budget/groupedByKategorie/${selectedYear}`),
            fetchData(`http://localhost:5081/Budget/groupedByUnterkategorie/${selectedYear}`),
            fetchData(`http://localhost:5081/Budget/total/${selectedYear}`),
            fetchData(`http://localhost:5081/Budget/revenueGroupedByKategorie/${selectedYear}`),
          ]);

          const combinedData = {
            byKategorie: groupedByKategorie,
            byUnterkategorie: groupedByUnterkategorie,
            total: total,
            revenue: revenue,
          };

          if (!combinedData || Object.keys(combinedData).length === 0) {
            setError('No data found');
          } else {
            setData(combinedData);
          }
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, [selectedYear]);

  return (
    <Layout onYearChange={handleYearChange}>
      <Typography variant="h4" gutterBottom>
        {selectedYear === 'Vergleich' ? 'Vergleich der Jahre' : `Übersicht für ${selectedYear}`}
      </Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">ERROR! {error}</Alert>}
      <Grid container spacing={3}>
        {data && selectedYear !== 'Vergleich' && (
          <Grid item xs={12}>
            <Charts data={data} />   
          </Grid>
        )}
        {data && selectedYear === 'Vergleich' && (
          <Grid item xs={12}>
            <BudgetComparisonTable data={{ data, loading }} />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}

export default Dashboard;
