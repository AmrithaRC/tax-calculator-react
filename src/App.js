import './App.css';
import { Container,FormGroup,FormControl,TextField,FormLabel } from '@mui/material';


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
  return (
    <div className="App">
      <Container maxWidth="sm">
      <h1 className="header"> TaxCalculator</h1>
        <FormGroup row>
          <FormControl>
              <TextField id="finYear"
                placeholder="Username" 
                variant="outlined"
                value= "2021"
                label ="Financial Year"
              />
            </FormControl>         

        </FormGroup>
        <br/>
        <FormGroup row>
          <FormControl>
              <TextField id="taxPayer"
                placeholder="Tax Payer" 
                variant="outlined"
                value="Individual"
                label ="Tax Payer"
              />
            </FormControl>        

        </FormGroup>
        <FormGroup>
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
  
       </Container>
    </div>
  );
}

export default App;
