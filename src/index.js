import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TaxCalc from './components/TaxCalc'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Container} from '@mui/material';

ReactDOM.render(
  <div className="App">
    <Container maxWidth="md">
      <h1 className="header"> TaxCalculator</h1>
      <BrowserRouter>
        <Routes>
          <Route default path="/" element={<App />} />
          <Route path="/calculateTax" element={<TaxCalc />} />
        </Routes>
      </BrowserRouter>
    </Container>
  </div>,
  document.getElementById('root')
);


