import React ,{  useState} from 'react';
import { useDispatch  } from 'react-redux';
import { insertReg } from '../store/registerSlice';
    import { TextField, Button} from '@mui/material';
import { Grid } from "@mui/material";
import {  useNavigate  } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';


const AddReg = () => {

         

          
             const dispatch = useDispatch();
             const history =useNavigate();

   
            const handleInsert =()=>{
              dispatch(insertReg({firstName,lastName, username, email, password }) )
              history('/Root')          
  };
 
  
  
            const [firstName , setFirstName]=useState("");
            const [lastName , setLastName]=useState("");
            const [username , setUsername]=useState("");
            const [email , setEmail]=useState("");
            const [password , setPassword]=useState("");

            
  
            return (
          
              <>
              <form onSubmit={handleInsert}>
                
                  <Grid container alignItems="center" justify="center" direction="column" >
                      <h1>Regist New  User</h1>
                              
      
              

                      <Grid item>
                          <TextField
                              id="firstName"
                              name="firstName"
                              label="firstName"
                              type="text"
                              value ={firstName} 
                               onChange ={(e)=>setFirstName(e.target.value)} 
                               required                            
                          />
                      </Grid>
<br/>
                      <Grid item>
                          <TextField
                              id="lastName"
                              name="lastName"
                              label="lastName"
                              type="text"
                              value ={lastName}
                                onChange ={(e)=>setLastName(e.target.value)}   
                                required                          
                          />
                      </Grid>
                      <br/>

                      <Grid item>
                          <TextField
                              id="username"
                              name="username"
                              label="Username"
                              type="text"
                              value ={username} 
                               onChange ={(e)=>setUsername(e.target.value)}   
                               required                          
                          />
                      </Grid>
                      <br/>
                      


                       <Grid item>
                          <TextField
                              id="email"
                              name="email"
                              label="Email"
                              type="email"
                              value ={email} 
                               onChange ={(e)=>setEmail(e.target.value)}   
                               required                          
                          />
                      </Grid>
                      <br/> 

                      
                      <Grid item>
                          <TextField
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              value ={password} 
                               onChange ={(e)=>setPassword(e.target.value)}   
                               required                          
                          />
                      </Grid>
                      <br/> 


                      <Grid item>
                        
                          <Button variant="contained" color="success" type="submit" style={{
                              backgroundColor: "success",
                              margin: "1px"
                          }}>
                            
                       Create User
                
                          </Button>
                          
                          
                          </Grid>

                  </Grid>
                  <br/>
                
              </form>
          </>
             );
           }
            
          export default AddReg;
          