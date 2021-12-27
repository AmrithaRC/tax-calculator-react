import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import useTaxSummaryList from './service.js';
import useTaxSummaryList from './Service';
import { useEffect, useState } from 'react';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function TaxSummaryTable() {
  // const [rows, setRows] = React.useState(null);
 
  const { response, error, loading } = useTaxSummaryList();
   // const { response, error, loading } = useAxios();





  return (
    <>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Financial Year</StyledTableCell>
              <StyledTableCell>Gross Total Income</StyledTableCell>
              <StyledTableCell>Total Deduction</StyledTableCell>
              <StyledTableCell>Tax due</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {response && response?.map((row) => (
              <TableRow
                key={row.financialYear}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.financialYear}
                </StyledTableCell>
                <StyledTableCell >{row.grossTotalIncome}</StyledTableCell>
                <StyledTableCell >{row.totalDeduction}</StyledTableCell>
                <StyledTableCell >{row.taxDue}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
