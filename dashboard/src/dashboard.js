import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material';
import Charts from './charts';
import { fetchData } from './api';
import Layout from './layout';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2024'); // State to manage selected year

  const handleYearChange = (year) => {
    console.log('Year changed to:', year);
    setSelectedYear(year);
  };

  useEffect(() => {
    const loadData = async () => {
      console.log('Loading data for year:', selectedYear);
      setLoading(true);
      try {
        const [groupedByKonto, groupedByVASTELLE, total] = await Promise.all([
          fetchData(`http://localhost:5081/Budget/groupedByKonto/${selectedYear}`),
          fetchData(`http://localhost:5081/Budget/groupedByVASTELLE/${selectedYear}`),
          fetchData(`http://localhost:5081/Budget/total/${selectedYear}`),
        ]);

        const combinedData = {
          byKonto: groupedByKonto,
          byVASTELLE: groupedByVASTELLE,
          total: total,
        };

        if (!combinedData || Object.keys(combinedData).length === 0) {
          setError('No data found');
        } else {
          setData(combinedData);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, [selectedYear]);

  if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error loading data: {error}</p>;
  return (
    <Layout onYearChange={handleYearChange}>
      <Typography variant="h4" gutterBottom>
        Übersicht für {selectedYear}
      </Typography>
      <Grid container spacing={3}>
        {data && 
          <Grid item xs={12}>
            <Charts data={data} />
          </Grid>
        }
      </Grid>
    </Layout>
  );
}

export default Dashboard;
