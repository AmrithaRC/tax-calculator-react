import './App.css';
import { Container,FormGroup,FormControl,TextField } from '@mui/material';


const finYear = [
  { value: '2019', label: '2019-20' },
  { value: '2020', label: '2020-21' },
  { value: '2021', label: '2021-22' }
]
const  TaxCalc = ()=>{
  return(
    <>
       <label>Financial Year </label>
       <Select options={finYear} />
       <label>Tax Payer</label>
       <input type="text" value ="Individual"> </input>
    
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
                value={username}
                label ="Financial Year"
              />
            </FormControl>         

        </FormGroup>
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
  
       </Container>
    </div>
  );
}

export default App;
