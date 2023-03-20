import React , { useEffect } from 'react';
import {useDispatch , useSelector, } from "react-redux";
import { getReg ,deleteReg } from "../store/registerSlice";
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
 import Alert from '@mui/material/Alert';

 import './Root.css'


export default function Register() {

  //useSelector نحن بحاجة بان نعمل استراك من اجل الاستماع على الحالة الموجودة داخل 
  //المخزن ليشوف التحديث اول باول 
  //الهووكس قدمت فانكشين جاهزة بتعمل وصول وبتجيب الحالة 
            const {registers, isLoding , error  }= useSelector((state)=>state.registers);


            //هي فانكشين وظيفتها ارسال ال اكشين الى المخزن 
            const dispatch=useDispatch();
            useEffect(()=>{
              dispatch(  getReg() );
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
                  < NavLink to="AddReg" style={{  textDecoration: 'none' }} >Add User  </NavLink>
                  </Button>



                  <StyledTableRow>
                    <StyledTableCell>firstName </StyledTableCell>
                    <StyledTableCell> lastName</StyledTableCell>
                    <StyledTableCell> username</StyledTableCell>
                    <StyledTableCell> email</StyledTableCell>
                    <StyledTableCell> Actions</StyledTableCell>


                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
               
                {  registers?.map((item)=>{
          return (
            <StyledTableRow key={item.id}  
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell component="th" scope="row">
          {item.firstName}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.lastName}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.username}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.email}
            </StyledTableCell>   
       
         
            <StyledTableCell component="th" scope="row">
            <Button variant="outlined"  color="error" 
            onClick={()=>dispatch(deleteReg(item.id))} 
            >Delete</Button>

            {/* <Button variant="outlined"  color="success">
                  < NavLink to= {`EditSub/${item.subscriptionId}`} style={{  textDecoration: 'none' }} >Edit  </NavLink>
                  </Button> */}
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
            
            
             