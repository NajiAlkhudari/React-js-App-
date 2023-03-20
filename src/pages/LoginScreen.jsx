import { React, useState  , useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import { signIn   } from "../store/signinSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {  useNavigate  } from "react-router-dom";
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import bus from '../Images/bus.png'

import './User.css'
import Alert from '@mui/material/Alert';


const LoginScreen = () => {
            const [username , setusername]=useState("");
            const [password , setpassword]=useState("");
            const {token,isAuthenticated , roles }= useSelector((state)=>state.user);


            const dispatch = useDispatch();
            const navigate =useNavigate();



             
                const handlesignin =()=>{
                        dispatch(signIn({username,password }) )               
            };


            

            useEffect(() => {
              if (!token) {
                navigate('/')
              }
             else if(token && roles.length === 2 )
            // else if(token && username.endsWith("1"))
            navigate('/Root')
            else if(token && roles.length === 1 )
            // else if(token && username.endsWith("2"))
            navigate ('/User')
            

            
            }, [token])
          
        
            
          

            const paperStyle={padding :40,height:'55vh',width:400, margin:"150px auto"}
            const avatarStyle={backgroundColor:'#1bbd7e'}
            const btnstyle={margin:'8px 0'}

  return (
    <>
   
                  {
                  isAuthenticated   &&(
                      <Alert severity="error">the username or password is incorrect</Alert>

                    )
                  }
    <div id ="component-login"> 
    <div id="Record">

      <h1 id="h10">   A Class Transportation</h1>
    <h4 id= "h100">For transport management university of kalamoon .
    
    </h4>
    </div>
          <div  style={{paddingLeft:250, margin :0}}>
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
        
                </Grid>
                <TextField label='Username' value ={username}  onChange ={(e)=>setusername(e.target.value)} placeholder='Enter username' fullWidth required/>
                <TextField label='Password' value ={password}  onChange ={(e)=>setpassword(e.target.value)} placeholder='Enter password' type='password' fullWidth required/>
                 <Button type='submit' onClick ={handlesignin} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

          
 
              
            </Paper>
        </Grid>
        </div>

        </div>
</>
         
  );
};

export default LoginScreen;
