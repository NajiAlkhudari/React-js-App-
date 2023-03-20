import React ,{  useState} from 'react';
import { useDispatch  } from 'react-redux';
import { insertEmployee } from '../store/employeeSlice';
    import { TextField, Button} from '@mui/material';
import { Grid } from "@mui/material";
import {  useNavigate  } from "react-router-dom";




const AddEmp = () => {

         

          
             const dispatch = useDispatch();
             const history =useNavigate();

   
            const handleInsert =()=>{
              dispatch(insertEmployee({name,nickname, phone }) )
              history('/Root/Employee')          
  };
 

            const [name , setName]=useState("");
            const [nickname , setNickname]=useState("");
            const [phone , setPhone]=useState("");

            
        
          
            return (
          
              <>
              <form onSubmit={handleInsert}>
                
                  <Grid container alignItems="center" justify="center" direction="column" >
                      <h1>Create New  Employee</h1>
                     <Grid item>
                          <TextField
                              id="name"
                              name="name"
                              label="Name"
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
                              label="LastName"
                              type="text"
                              value ={nickname} 
                               onChange ={(e)=>setNickname(e.target.value)} 
                               required                            
                          />
                      </Grid>
<br/>
                      <Grid item>
                          <TextField
                              id="phone"
                              name="phone"
                              label="Phone"
                              type="number"
                              value ={phone}
                                onChange ={(e)=>setPhone(e.target.value)}   
                                required                          
                          />
                      </Grid>
                      <br/>

                      

                      <Grid item>
                        
                          <Button variant="contained" color="success" type="submit" style={{
                              backgroundColor: "success",
                              margin: "1px"
                          }}>
                            
                       Create Employee
                
                          </Button>
                          
                          
                          </Grid>

                  </Grid>
                  <br/>
                
              </form>
          </>
             );
           }
            
          export default AddEmp;
          