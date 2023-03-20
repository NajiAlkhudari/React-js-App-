import React , { useEffect } from 'react';
import {useDispatch , useSelector, } from "react-redux";
import { getBus ,deleteBus } from "../store/busSlice";
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
 import './Root.css'
 import Alert from '@mui/material/Alert';


export default function Bus() {

  //useSelector نحن بحاجة بان نعمل استراك من اجل الاستماع على الحالة الموجودة داخل 
  //المخزن ليشوف التحديث اول باول 
  //الهووكس قدمت فانكشين جاهزة بتعمل وصول وبتجيب الحالة 
            const {buses, isLoding , error  }= useSelector((state)=>state.buses);


            //هي فانكشين وظيفتها ارسال ال اكشين الى المخزن 
            const dispatch=useDispatch();
            useEffect(()=>{
              dispatch(  getBus() );
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
                  <>
                  {
                    error &&(
                      <Alert severity="error">{error}</Alert>

                    )
                  }
                  <div id = "sub">                 
              <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table" 
              >
                <TableHead>
                  {/* <h2>Subscriptions</h2> */}
                  <Button variant="outlined"  color="success">
                  < NavLink to="AddBus" style={{  textDecoration: 'none' }} >Add Bus  </NavLink>
                  </Button>



                  <StyledTableRow>
                  <StyledTableCell>Number</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>location</StyledTableCell>
                    <StyledTableCell> type</StyledTableCell>
                    <StyledTableCell> Actions</StyledTableCell>

                  


                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
               
                {buses?.map((item)=>{
          return (
            <StyledTableRow key={item.budId}  
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell component="th" scope="row">
          {item.number}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.name}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.location}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.type}
            </StyledTableCell> 
         
            <StyledTableCell component="th" scope="row">
            <Button variant="outlined"  color="error" 
            onClick={()=>dispatch(deleteBus(item.busId))} 
            >Delete</Button>

      
            </StyledTableCell> 
          </StyledTableRow>
          )
                })}    
                  </TableBody>
                </Table>
              </TableContainer>
              </div>
              </>
                );
              }
            
            
             