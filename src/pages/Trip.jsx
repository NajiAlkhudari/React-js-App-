import React , { useEffect } from 'react';
import {useDispatch , useSelector, } from "react-redux";
import { getTrip , deleteTrip } from "../store/tripSlice";
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


export default function Trip() {

  //useSelector نحن بحاجة بان نعمل استراك من اجل الاستماع على الحالة الموجودة داخل 
  //المخزن ليشوف التحديث اول باول 
  //الهووكس قدمت فانكشين جاهزة بتعمل وصول وبتجيب الحالة 
            const {trips, isLoding , error}= useSelector((state)=>state.trips);
            const {id} = useParams();


            //هي فانكشين وظيفتها ارسال ال اكشين الى المخزن 
            const dispatch=useDispatch();
            useEffect(()=>{
              dispatch( getTrip() );
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
                      <Alert  severity="error">{error}</Alert>

                    )
                  }
              <TableContainer component={Paper}>
              <Table sx={{height: "max-content" }} aria-label="simple table" 
              >
                <TableHead>
                  {/* <h2>Subscriptions</h2> */}
                  <Button variant="outlined"  color="success">
                  < NavLink to="AddTrip" style={{  textDecoration: 'none' }} >Add Trip  </NavLink>
                  </Button>



                  <StyledTableRow>
                    <StyledTableCell>Type</StyledTableCell>
                    <StyledTableCell> Hour</StyledTableCell>
                    <StyledTableCell> Location</StyledTableCell>
                    <StyledTableCell> Actions</StyledTableCell>


                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
               
                {  trips?.map((item)=>{
          return (
            <StyledTableRow key={item.tripId}  
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell component="th" scope="row">
          {item.type}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.hour}
            </StyledTableCell> 
            <StyledTableCell component="th" scope="row">
          {item.location}
            </StyledTableCell>   
            <StyledTableCell component="th" scope="row">
            <Button variant="outlined"  color="error" 
            onClick={()=>dispatch(deleteTrip(item.tripId))} 
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
              </>
                );
              }
            
            
             