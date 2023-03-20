import React ,{  useState} from 'react';
import { useDispatch } from 'react-redux';
import { insertTrip } from '../store/tripSlice';
import { TextField, Button} from '@mui/material';
import { Grid } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import {  useNavigate  } from "react-router-dom";



const AddTrip = () => {

         

          
             const dispatch = useDispatch();
             const history =useNavigate();

   
            const handleInsert =()=>{
              dispatch(insertTrip({type,hour, location }) )
              history('/Root/Trip')
            
  };
 
  const defaultValue =   'inbound' ;

            const [type , setType]=useState(defaultValue);
            const [hour , setHour]=useState("00:00 AM");
            const [location , setLocation]=useState("");
      

            const top100Films = [
                'inbound    ' , 'outbound' 
          
              ];
          

          
            
          
            return (
                <>



              <form onSubmit={handleInsert}>
                  <Grid container alignItems="center" justify="center" direction="column" >
                      <h1>Create New  Trip</h1>
               
                      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 225 }}
      renderInput={(params) => <TextField {...params} label="Type" />}
      value={type}
      onChange={(event, newValue) => {
        console.log(newValue);
        setType(newValue);
    }}

    />
                      <br/>

                      <Grid item>
                          <TextField
                              id="hour"
                              name="hour"
                              label="Hour"
                              type="text"
                              value ={hour} 
                               onChange ={(e)=>setHour(e.target.value)} 
                               required                            
                          />
                      </Grid>
<br/>
                      <Grid item>
                          <TextField
                              id="location"
                              name="location"
                              label="Location"
                              type="text"
                              value ={location}
                                onChange ={(e)=>setLocation(e.target.value)}   
                                required                          
                          />
                      </Grid>
                     
                      <br/>

                      <Grid item>
                          <Button variant="contained" color="success" type="submit" style={{
                              backgroundColor: "success",
                              margin: "1px"
                          }}>
                       Create Trip

                          </Button>

                          </Grid>

                  </Grid>
                  <br/>

              </form>
          </>
             );
           }
         
          export default AddTrip;
          