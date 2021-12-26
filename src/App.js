import * as React from 'react';
import './App.css';
import  TaxCalc from './components/TaxCalc'
import { Container} from '@mui/material';

function App() {

  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1 className="header"> TaxCalculator</h1>

        <TaxCalc />

      </Container>
    </div>
  );
}

export default App;
