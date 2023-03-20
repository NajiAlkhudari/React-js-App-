import React , {useEffect ,} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useDispatch , useSelector } from "react-redux";
// import {logout} from '../store/signinSlice.jsx'

import DashboardIcon from '@mui/icons-material/Dashboard';
import {  useNavigate  } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginScreen from '../pages/LoginScreen.jsx'
import Button from '@mui/material/Button';


import {

  CssBaseline,

  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
    padding: '0 3px',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #757575 30%, #2196f3 90%)',

    borderRadius: 3,
    

  
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
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


const Header = () => {
 

  // const {token }= useSelector((state)=>state.user); removeItem

  const classes = useStyles();
  const navigate =useNavigate();

  const handleClick =()=>{
    navigate('/Root')
  }
  var logout = () => {
    localStorage.clear();
    navigate("/")

  };


            return(


<AppBar position="static" style={{ background: '#fafafa'  }}  >
<CssBaseline />

  <Toolbar variant="dense" >
    {/* <IconButton   onClick={handleClick} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      
    </IconButton> */}
    {/* <HomeIcon onClick={handleClick} /> */}

  
    <div className={classes.navlinks}>
        <Typography variant="h6" color="black" component="div" className={classes.logo}>
    <DashboardIcon  onClick={handleClick}  />
    dashboard
        </Typography>
    < NavLink to="Subscription"  className={classes.link} >Subscription  </NavLink>
    < NavLink to="Trip"  className={classes.link} >Trips  </NavLink>
    < NavLink to="Register"  className={classes.link} >User  </NavLink>
    < NavLink to="Employee"  className={classes.link} >Employee  </NavLink>
    < NavLink to="Bus"  className={classes.link} >Buses  </NavLink>
    </div>
    <Button  variant="outlined" color="error" onClick={logout}>Logout</Button>
    {/* < LogoutIcon  onClick={logout}  /> */}
  </Toolbar>

</AppBar>
      
      
            )


}
export default Header;

