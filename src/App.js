import * as React from 'react';
import './App.css';

import { Container,FormGroup,FormControl,TextField,FormLabel,Select,Grid,MenuItem,Button} from '@mui/material';


const finYear = [
  { value: '2019', label: '2019-20' },
  { value: '2020', label: '2020-21' },
  { value: '2021', label: '2021-22' }
]
const  TaxCalc = ()=>{
  return(
    <>
      
    
    </>
  );
};


function App() {
  const [finYear, setFinYear] = React.useState('');

  const handleFinYearChange = (event) => {
    setFinYear(event.target.value);
  };
  return (
    <div className="App">
      <Container maxWidth="sm">
      <h1 className="header"> TaxCalculator</h1>
      <Grid container spacing={2}>
      <Grid item xs={6}   label="Income">
        
        
     
        <FormGroup>
      
          <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
          <FormLabel >Financial Year </FormLabel>
            <Select
              labelId="select-finyear-label"
              id="select-finyear"
              value={finYear}
              variant="outlined"
              onChange={handleFinYearChange}
              label="Age"
            >
              <MenuItem value={2019}>2019-20</MenuItem>
              <MenuItem value={2020}>2020-21</MenuItem>
              <MenuItem value={2021}>2021-22</MenuItem>
            </Select>
          </FormControl>
          </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Tax Payer </FormLabel>
              <TextField id="salaryIncome"
                        variant="outlined"
                        value=" Individual"
                      />
          </FormControl>       

            <FormControl component="fieldset">
              <FormLabel >Income from Salary </FormLabel>
              <TextField id="salaryIncome"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Income from Interest </FormLabel>
              <TextField id="interestIncome"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Interest Paid on Home Loan </FormLabel>
              <TextField id="homeLoanInterest"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Rental Income Received  </FormLabel>
              <TextField id="rentalIncome"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Exemptions & Deductions from Salary  </FormLabel>
              <TextField id="exemptions"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Other Income </FormLabel>
              <TextField id="otherIncome"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
        </FormGroup>
        </Grid>
        <Grid item xs={6}>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Basic Deductions - 80C  </FormLabel>
              <TextField id="basicDeductions"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Medical Insurance - 80D</FormLabel>
              <TextField id="medicalInsurance"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
          
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Interest on Educational Loan - 80E </FormLabel>
              <TextField id="educLoanInterest"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
          
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Employee's contribution to NPS - 80CCD </FormLabel>
              <TextField id="npsEmployeeConribution"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
          
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Interest from Deposits - 80TTA </FormLabel>
              <TextField id="depositInterest"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
          
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Donations to Charity - 80G </FormLabel>
              <TextField id="charityDonation"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
          
        </FormGroup>
        <FormGroup>
            <FormControl component="fieldset">
              <FormLabel >Interest on Housing Loan - 80EEA</FormLabel>
              <TextField id="houseLoanInterest"
                        variant="outlined"
                        value=""
                      />
          </FormControl>
          
        </FormGroup>
       

        </Grid>
        <Grid item xs={6} sx={{ alignContent:'center' }}>
        <FormGroup>
            <FormControl component="fieldset"></FormControl>
        <Button variant="contained">Calculate</Button>
        </FormGroup>
        </Grid>

      </Grid>
  
       </Container>
    </div>
  );
}

export default App;
