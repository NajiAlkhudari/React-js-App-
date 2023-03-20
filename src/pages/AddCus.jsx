
import { useDispatch  } from 'react-redux';
import { insertCustomer } from '../store/customerSlice';
    import { TextField, Button} from '@mui/material';
import { Grid } from "@mui/material";
import {  useNavigate  } from "react-router-dom";
import React, { useEffect, useState }  from "react";
import Autocomplete from "@mui/material/Autocomplete";
import axios from 'axios'
import './User.css'

import Sub from '../components/Sub.js'

function AddCus() {

  // const [subscriptionId, setSubscriptionId]=useState(null);
    const [qrCode , setQrCode]=useState("");
    const [college , setCollege]=useState("");
    const [name , setName]=useState("");
    const [nickname , setNickname]=useState("");
    const [rowdata, setRowdata] = useState({  subscriptionId: '' ,name : '', city:' ', price:'', firstDay:'',secondDay:''});


    const dispatch = useDispatch();
    const history =useNavigate();

//     const baseURL = "https://192.168.43.32:7042/api/Subscription";


//     useEffect(() => {
//         axios.get(baseURL).then((response) => {
//           setRows(response.data);
//         });
//       }, []);
let subscriptionId =rowdata.subscriptionId;
   const handleInsert =()=>{
     dispatch(insertCustomer({ subscriptionId,qrCode,college, name, nickname}) )
     history('/User/Customer')          
};


// useEffect(() => {
//     if (rowdata) {
//       setRows([rowdata]);
//     } else {
//       axios.get(baseURL).then((response) => {
//         setRows(response.data);
//         console.log(response.data);
//       });
//     }
//   }, [rowdata]);
useEffect(() =>{
  const fetchData = async ()=>{
      const response = await fetch(`https://192.168.43.32:7042/api/Subscription`);
      const newData = await response.json();
      setRowdata(newData);
      // console.log(newData);
  };
  fetchData();
}, [])

    return(
        <>
            <div class ="all">  
            <div id="component-one1">

            <div style={{paddingLeft:100}}>

        <form onSubmit={handleInsert}>
                
        <Grid container alignItems="center" justify="center" direction="column" >
            <h1>Create New  Customer</h1>
           <Grid item>
             
                   <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rowdata}
              onChange={(e, v) => setRowdata(v)}
              sx={{ width: 225 }}   
              getOptionLabel={(rows) => ` ${rows.subscriptionId} - ${rows.name} - ${rows.city}     `}

              renderInput={(params) => (
                <TextField {...params} label="Select Subscription" size="small" />
               
              )}
            />  
            </Grid>
            <br/>

            <Grid item>
                <TextField
                    id="qrCode"
                    name="qrCode"
                    label="qrCode"
                    type="number"
                    value ={qrCode} 
                     onChange ={(e)=>setQrCode(e.target.value)}   
                     required                          
                />
            </Grid>
            <br/>
            <Grid item>
                <TextField
                    id="college"
                    name="college"
                    label="college"
                    type="text"
                    value ={college} 
                     onChange ={(e)=>setCollege(e.target.value)} 
                     required                            
                />
            </Grid>
<br/>
            <Grid item>
                <TextField
                    id="name"
                    name="name"
                    label="name"
                    type="text"
                    value ={name}
                      onChange ={(e)=>setName(e.target.value)}   
                      required                          
                />
            </Grid>
            <br/>

            <Grid item>
                <TextField
                    id="nickname"
                    name="nickname"
                    label="nickname"
                    type="text"
                    value ={nickname} 
                     onChange ={(e)=>setNickname(e.target.value)}   
                     required                          
                />
            </Grid>
            <br/>


            <Grid item>
              
                <Button variant="contained" color="success" type="submit" style={{
                    backgroundColor: "success",
                    margin: "1px"
                }}>
                  
             Create Customer
      
                </Button>
                
                
                </Grid>

        </Grid>
        <br/>
      
    </form>
    </div>
    <div style={{paddingLeft:300}}>
 <Sub />
 </div>
    </div>

    </div>

</>
   );
 }
export default AddCus;