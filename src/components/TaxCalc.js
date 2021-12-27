import * as React from 'react';

import { FormGroup, FormControl, Select, TextField, Grid, MenuItem, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';



const TaxCalc = ({ handleClose }) => {

 
    const { handleSubmit, control} = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Button component={Link} to={'/'} variant="contained" color="primary">Home</Button>
                </Grid>
                <Grid item xs={10}></Grid>
                    <Grid item xs={6}>
                        <FormGroup>
                            <label>Financial Year</label>
                            <Controller
                                name="financialYear"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value },
                                     fieldState: { error } }) => (

                                    <TextField
                                        select
                                        fullWidth
                                        label="Select"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}>
                                        <MenuItem value={2019}>2019-20</MenuItem>
                                        <MenuItem value={2020}>2020-21</MenuItem>
                                        <MenuItem value={2021}>2021-22</MenuItem>
                                    </TextField>
                                )}
                                rules={{ required: 'Financial Year required' }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Income from Salary</label>
                            <Controller
                                name="salaryIncome"
                                control={control}
                                pattern=" /^[A-Za-z]+$/i "
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} label={"Income from Salary"} />
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label >Income from Interest </label>
                            <Controller
                                name="interestIncome"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} label={"Income from Interest"} />
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label >Interest Paid on Home Loan </label>
                            <Controller
                                name="homeLoanInterest"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} label={"Interest Paid on Home Loan"} />
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label >Rental Income Received  </label>
                            <Controller
                                name="rentalIncome"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} label={"Rental Income Received "} />
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label >Exemptions & Deductions from Salary  </label>
                            <Controller
                                name="exemptions"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} label={"Exemptions "} />
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label >Other Income </label>
                            <Controller
                                name="otherIncome"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} label={"Other Income "} />
                                )}
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <FormGroup>
                            <label >Basic Deductions - 80C  </label>
                            <Controller
                                name="basicDeductions"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} label={"Basic Deductions"} />
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label >Medical Insurance - 80D</label>
                            <Controller
                                name="medicalInsurance"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} label={"Medical Insurance"} />
                                )}
                            />

                        </FormGroup>
                        <FormGroup>
                            <label >Interest on Educational Loan - 80E </label>
                            <Controller
                                name="educLoanInterest"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} placeholder="Educational Loan Interest" />
                                )}
                            />

                        </FormGroup>
                        <FormGroup>
                            <label >Employee's contribution to NPS - 80CCD </label>
                            <Controller
                                name="npsEmployeeConribution"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} placeholder="NPS" />
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label >Interest from Deposits - 80TTA </label>
                            <Controller
                                name="depositInterest"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} placeholder="Interest from Deposits " />
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label >Donations to Charity - 80G </label>
                            <Controller
                                name="charityDonation"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <TextField type="number" onChange={onChange} value={value} placeholder="Donations to Charity" />
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl component="fieldset">
                                <label >Interest on Housing Loan - 80EEA</label>
                                <Controller
                                    name="houseLoanInterest"
                                    control={control}
                                    defaultValue=""
                                    render={({ field: { onChange, value } }) => (
                                        <TextField type="number" onChange={onChange} value={value} placeholder="Interest on Housing Loan" />
                                    )}
                                />
                            </FormControl>

                        </FormGroup>

                    </Grid>
                    <Grid container rowSpacing={3} marginTop={4}>
                        <Grid item xs={4} >
                            <Button variant="outlined" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={4} >
                            <Button type="submit" variant="contained" color="primary">
                                Calculate
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </form>

        </>
    );
};

export default TaxCalc;