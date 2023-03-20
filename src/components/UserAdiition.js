import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {NavLink} from 'react-router-dom'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LuggageIcon from '@mui/icons-material/Luggage';
import Report from '../pages/Report.jsx'
import InboundDamascusToday from '../pages/InboundDamascusToday.jsx'
import InboundHomsToday from '../pages/InboundHomsToday.jsx'
import InboundDierAtyahToday from '../pages/InboundDierAtyahToday.jsx'
import InboundAlNabekToday from '../pages/InboundAlNabekToday.jsx'
import InboundYabroudToday from '../pages/InboundYabroudToday.jsx'
import InboundQaraToday from '../pages/InboundQaraToday.jsx'
import PeopleIcon from '@mui/icons-material/People';
import '../pages/User.css'

function UserAdiition() {
  return (
    <>
    <div class ="all">  
    <h3 id="p2">     <PeopleIcon  sx={{ fontSize: 50 }} />
Students have to pay</h3>
    {/* <div id= "head-one">
    Inbound Trips Daily Reports 
    </div>
          <br/>  */}


<div id="component-one1">
{/* <h1 id ="h1"> Inbound Trips</h1> */}
{/* < NavLink id="nav" to="Report" style={{ textDecoration: 'none' }}  >View All  </NavLink> */} 


<Box

sx={{
display: 'grid',
gap: 25,
gridTemplateColumns: 'repeat(3, 1fr)',
margin :3,
   


}}
>


<Card

  style={{
    width: 350,
   height :200,
    backgroundColor: '#fafafa' ,
    border: "none",
    boxShadow: "none"
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h4" component="h6" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <CardActions>

  </CardActions>
 
            Today 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#212121"}} >
    Students have to pay Today
        </Typography>
    < NavLink to="FinesToday" style={{ textDecoration: 'none'  , color : "#424242"}}  >
GET
  </NavLink>
   </CardContent>
   
</Card>



<Card

  style={{
    width: 350,
   height :200,
    backgroundColor: '#fafafa' ,
    border: "none",
    boxShadow: "none"
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h4" component="h6" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <CardActions>

  </CardActions>
 
  Yesterday 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#212121"}} >
    Students have to pay  Yesterday
      </Typography>
    < NavLink to="Yesarday" style={{ textDecoration: 'none'  , color : "#424242"}}  >
GET
  </NavLink>
   </CardContent>
   
</Card>

<Card

  style={{
    width: 350,
   height :200,
    backgroundColor: '#fafafa' ,
    border: "none",
    boxShadow: "none"
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h4" component="h6" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <CardActions>

  </CardActions>
 
            All 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#212121"}} >
    Students have to pay  AllTime
    </Typography>
    < NavLink to="FinesAll" style={{ textDecoration: 'none'  , color : "#424242"}}  >
GET
  </NavLink>
   </CardContent>
   
</Card>


</Box>




</div>
</div>
</>
  )
  
}

export default UserAdiition