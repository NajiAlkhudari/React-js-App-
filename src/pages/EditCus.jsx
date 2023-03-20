
import { useDispatch  } from 'react-redux';
import { updateCustomer } from '../store/customerSlice';
    import { TextField, Button} from '@mui/material';
import { Grid } from "@mui/material";
import { useParams, useNavigate  } from "react-router-dom";
import React, { useEffect, useState }  from "react";
import Autocomplete from "@mui/material/Autocomplete";
import axios from 'axios'
import './User.css'


function EditCus() {

  const [subscriptionId, setSubscriptionId]=useState("");
    const [qrCode , setQrCode]=useState("");
    const [college , setCollege]=useState("");
    const [name , setName]=useState("");
    const [nickname , setNickname]=useState("");


    const dispatch = useDispatch();
    const history =useNavigate();

const {customerId} = useParams()
   const handleInsert =()=>{
     dispatch(updateCustomer(customerId ,{subscriptionId,qrCode,college, name, nickname}) )
     history('/User/Customer')          
};




    return(
        <>
            <div class ="all">  
            <div id="component-one1">

            <div style={{paddingLeft:100}}>

        <form onSubmit={handleInsert}>
                
        <Grid container alignItems="center" justify="center" direction="column" >
            <h1>Update Customer</h1>
          

            <Grid item>
                <TextField
                    id="subscriptionId"
                    name="subscriptionId"
                    label="subscriptionId"
                    type="number"
                    value ={subscriptionId} 
                     onChange ={(e)=>setSubscriptionId(e.target.value)}   
                     required                          
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

    </div>

    </div>

</>
   );
 }
export default EditCus;