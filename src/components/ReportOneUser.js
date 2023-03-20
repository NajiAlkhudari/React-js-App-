import {Viewer} from '@grapecity/activereports-react'
import '../pages/Report.css'
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {NavLink} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import OneUserToday from '../pages/OneUserToday.jsx'
import OneUserAll from '../pages/OneUserAll.jsx'



const ReportOneUser = () => {
  return (
    <>
                 <div class ="all">  
           
    <div id = "component-three">
    <div id ="Reord">
  <p id ="p">One Reports </p>
  <h1 id ="h1"> Student Trips</h1>
  < NavLink id="nav" to="Subscription" style={{ textDecoration: 'none' }}  >View All  </NavLink>

</div>

<Box
  sx={{
    display: 'grid',
    gap: 25,
    gridTemplateColumns: 'repeat(2, 1fr)',
    // margin :10,
    // padding: 10,
    // paddingLeft:30,
    margin:2,
    paddingLeft : 40
    
   

  }}
>
<Card

  style={{
    width: 300,
   height :200,
    backgroundColor: '#f5f5f5' ,
    
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h2" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <PersonIcon />
            Today 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#212121"}} >
    One student Trips Reports
    </Typography>
   </CardContent>
   <br />
   <br />

  <CardActions>
  < NavLink to="OneUserToday" style={{ textDecoration: 'none'  , color : "#424242"}}  >GET  </NavLink>
  </CardActions>
</Card>

<Card

  style={{
    width: 300,
   height :200,
    backgroundColor: '#f5f5f5' ,
    
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h2" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <PersonIcon />
            All 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#212121"}} >
    One student Trips Reports
    </Typography>
   </CardContent>
   <br />
   <br />

  <CardActions>
  < NavLink to="OneUserAll" style={{ textDecoration: 'none'  , color : "#424242" }}  >GET  </NavLink>
  </CardActions>
</Card>
</Box>
</div>
    </div>
    
  
    </>
  )
}

export default ReportOneUser