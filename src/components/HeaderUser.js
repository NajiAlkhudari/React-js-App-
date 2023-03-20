import React , {useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {  useNavigate  } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginScreen from '../pages/LoginScreen.jsx'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import bus from '../Images/bus.png'
import three from '../Images/three.jpg'

import {

  CssBaseline,

  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {

    marginLeft: theme.spacing(1),
    display: "flex",
    padding: '0 3px',
    background: 'linear-gradient(45deg, #757575 30%, #2196f3 90%)',

    borderRadius: 3,
  
  },
  link: {

    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(45),
    "&:hover": {
      color: "black",
      borderBottom: "1px solid white",
    },
  },
  logo: {
  
    flexGrow: "1",
    cursor: "pointer",

  },
}));


const HeaderUser = () => {
 
  const classes = useStyles();
  const history =useNavigate();

  const handleClick =()=>{
    history('/User')
  }
  const logout = () => {
    localStorage.clear();
    history("/")

  };


            return(


<AppBar position="static" style={{ background: '#f5f5f5'  }}  >
<CssBaseline />

  <Toolbar variant="dense" >
    {/* <IconButton   onClick={handleClick} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      
    </IconButton> */}
    {/* <HomeIcon onClick={handleClick} /> */}

   
    <div className={classes.navlinks}>
       <Typography variant="h6" color="black" component="div" className={classes.logo}>
    <HomeIcon  onClick={handleClick}  />
 Home                    </Typography>
    < NavLink to="Customer"  className={classes.link} >Customers  </NavLink>
    < NavLink to="Customer/AddCus"  className={classes.link} >Add Customer  </NavLink>

    {/* < NavLink to="Trip"  className={classes.link} >Trips  </NavLink>
    < NavLink to="Report"  className={classes.link} >Reports  </NavLink>
    < NavLink to="Buses"  className={classes.link} >Buses  </NavLink> */}
    </div>
    
    <Button  variant="outlined" color="error" onClick={logout}>Logout</Button>
    {/* < LogoutIcon  onClick={logout}  /> */}
  </Toolbar>

</AppBar>
      
      
            )


}
export default HeaderUser;
