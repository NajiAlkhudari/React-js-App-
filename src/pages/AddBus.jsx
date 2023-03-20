
import {useDispatch , useSelector, } from "react-redux";
import { insertBus } from '../store/busSlice';
    import { TextField, Button} from '@mui/material';
import { Grid } from "@mui/material";
import {  useNavigate  } from "react-router-dom";
import React, { useEffect, useState }  from "react";
import Autocomplete from "@mui/material/Autocomplete";
import axios from 'axios'
import './User.css'

import Tri from '../components/Tri.js'
import Emp from '../components/Emp.js'
import Alert from '@mui/material/Alert';



function AddBus() {

  // const [subscriptionId, setSubscriptionId]=useState(null);
    const [number , setNumber]=useState("");
    const [rows, setRows] = useState([]);
    const [rowss, setRowss] = useState([]);
    const [rowsdata, setRowsdata] = useState({employeeId  : '' ,     number : ''});
    const [rowdata, setRowdata] = useState({    tripId  : ' '         ,number : ''});

    const dispatch = useDispatch();
    const history =useNavigate();
    const {buses, isLoding , error}= useSelector((state)=>state.buses);



    useEffect(() => {
        axios.get('https://192.168.43.32:7042/api/EmployeeConstroller').then((response) => {
          setRowss(response.data);
        });
      }, []);
      

    useEffect(() => {
        axios.get("https://192.168.43.32:7042/api/Trip").then((response) => {
          setRows(response.data);
        });
      }, []);
      
const employeeId =rowsdata.employeeId;
const tripId =rowdata.tripId;
   const handleInsert =()=>{
     dispatch(insertBus({employeeId, tripId,number}) )
     history('/Root/Bus')          
};






  
useEffect(() => {
    if (rowsdata) {
      setRowss([rowdata]);
    } else {

        axios.get("https://192.168.43.32:7042/api/EmployeeConstroller").then((response) => {
            setRowss(response.data);
            console.log(response.data);
          });

   
    }
  }, [rowsdata]);

  useEffect(() => {
    if (rowdata) {
      setRows([rowdata]);
    } else {


      axios.get('https://192.168.43.32:7042/api/Trip').then((response) => {
        setRows(response.data);
        console.log(response.data);
      });
   
    }
  }, [rowdata]);

    return(
        <>
      
                  {
                    error &&(
                      <Alert severity="error">{error}</Alert>

                    )
                  }
            <div class ="all">  
            <div id="component-one1">

            <div style={{paddingLeft:1}}>

        <form onSubmit={handleInsert}>
                
        <Grid container alignItems="center" justify="center" direction="column" >
            <h1>Create New  Bus</h1>
           <Grid item>
      
                   <Autocomplete
                   
              disablePortal
              id="combo-box-demo"
              options={rowss}
              onChange={(e, v) => setRowsdata(v)}
              sx={{ width: 225 }}
              getOptionLabel={(rowss) => `${rowss.employeeId} - ${rowss.name} `}

              renderInput={(params) => (
                <TextField {...params} label="Select Employee" size="small" />
               
              )}
            />  
            </Grid>
            <br/>

            <Grid item>
                   <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              onChange={(e, v) => setRowdata(v)}
              sx={{ width: 225 }}
              getOptionLabel={(rows) => `${rows.location} -${rows.type} `}

              renderInput={(params) => (
                <TextField {...params} label="Select trip" size="small" />
               
              )}
            />  
            </Grid>
            <br/>
            
            <Grid item>
                <TextField
                    id="number"
                    name="number"
                    label="number"
                    type="number"
                    value ={number} 
                     onChange ={(e)=>setNumber(e.target.value)}   
                     required                          
                />
            </Grid>
            <br/>
          
            <Grid item>
              
                <Button variant="contained" color="success" type="submit" style={{
                    backgroundColor: "success",
                    margin: "1px"
                }}>
                  
             Create Bus
      
                </Button>
                
                
                </Grid>

        </Grid>
        <br/>
      
    </form>
    </div>
    <div style={{paddingLeft:200}}>
 <Tri />
 </div>
 <div style={{paddingLeft:200}}>
 <Emp />
 </div>
    </div>

    </div>

</>
   );
 }
export default AddBus;