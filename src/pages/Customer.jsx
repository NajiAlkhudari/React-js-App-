import React , { useEffect } from 'react';
import {useDispatch , useSelector, } from "react-redux";
import { getCustomer , deleteCustomer } from "../store/customerSlice.jsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
 import {NavLink ,useParams } from 'react-router-dom'
 import Box from '@mui/material/Box';
 import Alert from '@mui/material/Alert';



export default function Customers() {

  //useSelector نحن بحاجة بان نعمل استراك من اجل الاستماع على الحالة الموجودة داخل 
  //المخزن ليشوف التحديث اول باول 
  //الهووكس قدمت فانكشين جاهزة بتعمل وصول وبتجيب الحالة 
            const {customers, isLoding , error}= useSelector((state)=>state.customers);
            const {id} = useParams();


            //هي فانكشين وظيفتها ارسال ال اكشين الى المخزن 
            const dispatch=useDispatch();
            useEffect(()=>{
              dispatch( getCustomer() );
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
              <TableContainer component={Paper}>
              <Table sx={{height: "max-content" }} aria-label="simple table" 
              >
                <TableHead>
                  {/* <h2>Subscriptions</h2> */}
                  <Button variant="outlined"  color="success">
                  < NavLink to="AddCus" style={{  textDecoration: 'none' }} >Add Customer  </NavLink>
                  </Button>



                  <StyledTableRow>
                    <StyledTableCell>name</StyledTableCell>
                    <StyledTableCell> LastName</StyledTableCell>
                    <StyledTableCell> Qrcode</StyledTableCell>
                    <StyledTableCell> college</StyledTableCell>
                    <StyledTableCell> nameSub</StyledTableCell>
                    <StyledTableCell> city</StyledTableCell>
                    <StyledTableCell> Actions</StyledTableCell>

                    
                    
                    
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
               
                {  customers?.map((item)=>{
          return (
            <StyledTableRow key={item.customerId}  
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell component="th" scope="row">
          {item.name}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.nickname}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.qrCode}
            </StyledTableCell>  
            <StyledTableCell component="th" scope="row">
          {item.college}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.nameSub}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.city}
            </StyledTableCell>  
            <StyledTableCell component="th" scope="row">
            <Button variant="outlined"  color="error" 
            onClick={()=>dispatch(deleteCustomer(item.customerId))} 
            >Delete</Button>

{/* <Button variant="outlined"  color="success">
                  < NavLink to= {`EditCus/${item.customerId}`} style={{  textDecoration: 'none' }} >Edit  </NavLink>
                  </Button> */}
            </StyledTableCell> 
          

          </StyledTableRow>
          )
                })}    
                  </TableBody>
                </Table>
              </TableContainer>
              </>
                );
              }
            
            
             