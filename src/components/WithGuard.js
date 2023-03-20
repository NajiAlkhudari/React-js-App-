import React from 'react'
import {useSelector}from "react-redux"
import {NavLink} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


const  WithGuard = (Component)=> {
    const Wrapper =(props)=>{
        const {isAuthenticated} =useSelector((state)=>state.user);
    
  return isAuthenticated ? (
    <Component {...props} />
  ):(
    <>
    <div>
    <Alert severity="warning">
  <AlertTitle>Warning</AlertTitle>
  Unauthorized entry — <strong>Pleas LogIn First! </strong>
        < NavLink to="/" >Redirect to Login Page  </NavLink>
        </Alert>
        </div>

        </>
  );
   
  };
  return Wrapper ;
};
export default WithGuard