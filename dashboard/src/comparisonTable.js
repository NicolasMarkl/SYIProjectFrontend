import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box } from '@mui/material';

function BudgetComparisonTable({ data }) {
  if (data.loading || !data.data || !data.data.budgetComparison) {
    return null;
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  const formatPercentage = (value) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Kategorie</TableCell>
              <TableCell>Differenz</TableCell>
              <TableCell>2024</TableCell>
              <TableCell>2023</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data.budgetComparison.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.category}</TableCell>
                <TableCell>{formatCurrency(row.difference)}</TableCell>
                <TableCell>{formatCurrency(row.amount2024)}</TableCell>
                <TableCell>{formatCurrency(row.amount2023)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" mt={4}>
        <div>
          <Typography variant="h6" gutterBottom>
            Höchste Budgeterhöhung
          </Typography>
          <ul>
            {data.data.top10Increase.map((item, index) => (
              <li style={{ color: 'green' }} key={index}>
                {item.unterkategorie}: {formatPercentage(item.increaseInPercent)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            Höchste Budgetverringerung
          </Typography>
          <ul>
            {data.data.top10Decrease
              .filter(item => item.decreaseInPercent > 0)
              .map((item, index) => (
                <li style={{ color: 'red' }} key={index}>
                  {item.unterkategorie}: {formatPercentage(item.decreaseInPercent)}
                </li>
              ))}
          </ul>
        </div>
      </Box>
    </div>
  );
}

export default BudgetComparisonTable;
