
import React , { useEffect } from 'react';
import {useDispatch , useSelector, } from "react-redux";
import { getSub ,deleteSub } from "../store/subscriptionSlice";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
 import {NavLink  } from 'react-router-dom'
function Sub() {

        const {subscriptions, isLoding  }= useSelector((state)=>state.subscriptions);


        //هي فانكشين وظيفتها ارسال ال اكشين الى المخزن 
        const dispatch=useDispatch();
        useEffect(()=>{
          dispatch(  getSub() );
        },[dispatch]);
         if(isLoding){
           return <h2>loading... </h2>
       }
        

    


        const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#607d8b ',
            color: '#ffebee',
            size : "medium",
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
        

     

       
            return(    
              <div id = "sub">                 
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" 
          >
            <TableHead>
              {/* <h2>Subscriptions</h2> */}
           



              <StyledTableRow>
              
              <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>SubScription Name</StyledTableCell>
                <StyledTableCell> City</StyledTableCell>
                <StyledTableCell> Price</StyledTableCell>
                <StyledTableCell> FirstDay</StyledTableCell>
                <StyledTableCell> SecondDay</StyledTableCell>


                </StyledTableRow>
              </TableHead>
              <TableBody>
           
            {  subscriptions.map((item)=>{
      return (
        <StyledTableRow key={item.subscriptionId}  
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
          <StyledTableCell component="th" scope="row">
      {item.subscriptionId}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
      {item.name}
        </StyledTableCell> 
        <StyledTableCell component="th" scope="row">
      {item.city}
        </StyledTableCell> 
        <StyledTableCell component="th" scope="row">
      {item.price}
        </StyledTableCell> 
        <StyledTableCell component="th" scope="row">
      {item.firstDay}
        </StyledTableCell>   
         <StyledTableCell component="th" scope="row">
      {item.secondDay}
        </StyledTableCell> 
     
      </StyledTableRow>
      )
            })}    
              </TableBody>
            </Table>
          </TableContainer>
          </div>
            );
          }
        
        
            
    
export default Sub