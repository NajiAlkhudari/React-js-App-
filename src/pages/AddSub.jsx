import React ,{  useState} from 'react';
import { useDispatch  } from 'react-redux';
import { insertSub } from '../store/subscriptionSlice';
    import { TextField, Button} from '@mui/material';
import { Grid } from "@mui/material";
import {  useNavigate  } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';


const AddSub = () => {

         

          
             const dispatch = useDispatch();
             const history =useNavigate();

   
            const handleInsert =()=>{
              dispatch(insertSub({name,city, price, firstDay, secondDay }) )
              history('/Root/Subscription')          
  };
  const defaultValue =   'Daily' ;
  
  const defaultValue1 =   'Saturday' ;

  
  
            const [name , setName]=useState(defaultValue);
            const [city , setCity]=useState("");
            const [price , setPrice]=useState("");
            const [firstDay , setFirstDay]=useState(defaultValue1);
            const [secondDay , setSecondDay]=useState(defaultValue1);

            
        
            const top100Films = [
                'Daily ' , 'Weekly' 
          
              ];

              
            const top100Films1 = [
                'Saturday ' , 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday', 'Thursday' , 'Friday', 'All'
          
              ];
            return (
          
              <>
              <form onSubmit={handleInsert}>
                
                  <Grid container alignItems="center" justify="center" direction="column" >
                      <h1>Create New  Subscription</h1>
                              
                     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 225 }}
      renderInput={(params) => <TextField {...params} label="Type" />}
      value={name}
      onChange={(event, newValue) => {
        console.log(newValue);
        setName(newValue);
    }}

    />
                      <br/>

                      <Grid item>
                          <TextField
                              id="city"
                              name="city"
                              label="City"
                              type="text"
                              value ={city} 
                               onChange ={(e)=>setCity(e.target.value)} 
                               required                            
                          />
                      </Grid>
<br/>
                      <Grid item>
                          <TextField
                              id="price"
                              name="price"
                              label="Price"
                              type="number"
                              value ={price}
                                onChange ={(e)=>setPrice(e.target.value)}   
                                required                          
                          />
                      </Grid>
                      <br/>

                      {/* <Grid item>
                          <TextField
                              id="firstDay"
                              name="firstDay"
                              label="FirstDay"
                              type="text"
                              value ={firstDay} 
                               onChange ={(e)=>setFirstDay(e.target.value)}   
                               required                          
                          />
                      </Grid>
                      <br/> */}
                       <Autocomplete

                        disablePortal
      id="combo-box-demo"
      options={top100Films1}
      sx={{ width: 225 }}
      renderInput={(params) => <TextField {...params} label="firstDay" />}
      value={firstDay}
      onChange={(event, newValue) => {
        console.log(newValue);
        setFirstDay(newValue);
    }}

    />
                      <br/>


                      {/* <Grid item>
                          <TextField
                              id="secondDay"
                              name="secondDay"
                              label="SecondDay"
                              type="text"
                              value ={secondDay} 
                               onChange ={(e)=>setSecondDay(e.target.value)}   
                               required                          
                          />
                      </Grid>
                      <br/> */}

<Autocomplete

disablePortal
id="combo-box-demo"
options={top100Films1}
sx={{ width: 225 }}
renderInput={(params) => <TextField {...params} label="secondDay" />}
value={secondDay}
onChange={(event, newValue) => {
console.log(newValue);
setSecondDay(newValue);
}}

/>
<br/>

                      <Grid item>
                        
                          <Button variant="contained" color="success" type="submit" style={{
                              backgroundColor: "success",
                              margin: "1px"
                          }}>
                            
                       Create Subscription
                
                          </Button>
                          
                          
                          </Grid>

                  </Grid>
                  <br/>
                
              </form>
          </>
             );
           }
            
          export default AddSub;
          