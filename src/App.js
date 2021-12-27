import * as React from 'react';
import './App.css';
import TaxSummaryTable from './components/Dashboard'
import { Link } from 'react-router-dom';
import { Button,Grid } from '@mui/material';

function App() {

  return (
    <>
     <Grid container spacing={3}>
          <Grid item xs={3}>
          <Button component={Link} to={'/calculateTax'} variant="contained" color="primary">Calculate Tax</Button>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={12}>
          <TaxSummaryTable />
          </Grid>
      </Grid>
    </>
  );
}

export default App;
