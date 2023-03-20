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
import Home from '../pages/Home.jsx'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ListOutbound from './ListOutbound.js'

import '../pages/User.css'

function UserOutound() {
  return (
    <>
    <div class ="all">  
    <h3 id="p2">Daily Reports Outbound Trips</h3>
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
gap: 2,
gridTemplateColumns: 'repeat(3, 1fr)',
margin :2,


}}
>


<Card

  style={{
    width: 250,
   height :150,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h6" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <CardActions>

  </CardActions>
  < NavLink to="OtboundDamascusToday" style={{ textDecoration: 'none' }}  >
  Damascus
  </NavLink>
             
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
    Outbound  trips daily to damascus
    </Typography>
   </CardContent>

</Card>



<Card

  style={{
    width: 250,
   height :150,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h6" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <CardActions>

  </CardActions>
  < NavLink to="OtboundHomsToday" style={{ textDecoration: 'none' }}  >
  Homs
  </NavLink>
             
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
    Outbound  trips daily to Homs
    </Typography>
   </CardContent>

</Card>
<Card

  style={{
    width: 250,
   height :150,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h6" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <CardActions>

  </CardActions>
  < NavLink to="OtboundDierAtyahToday" style={{ textDecoration: 'none' }}  >
  Dier Atyah 
  </NavLink>
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
    Outbound  trips daily to Dier Atyah 
    </Typography>
   </CardContent>

</Card>
<Card

  style={{
    width: 250,
   height :150,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h6" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <CardActions>

  </CardActions>
  < NavLink to="OtboundAlNabekToday" style={{ textDecoration: 'none' }}  >
  Al Nabek 

  </NavLink>
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
    Outbound  trips daily to Al Nabek 

    </Typography>
   </CardContent>

</Card>
<Card

  style={{
    width: 250,
   height :150,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h6" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <CardActions>

  </CardActions>
  < NavLink to="OtboundYabroudToday" style={{ textDecoration: 'none' }}  >
  Yabroud
  </NavLink> 
   
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
  Outbound trips daily to  Yabroud 

    </Typography>
   </CardContent>

</Card>
<Card

  style={{
    width: 250,
   height :150,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h6" style ={{fontWeight : "bold" , color : "#1769aa"}} >
  <CardActions>

  </CardActions>
  < NavLink to="OtboundQaraToday" style={{ textDecoration: 'none' }}  >
  Qara
  </NavLink>
             
    </Typography>
    <Typography variant="h6" component="h6" style ={{color : "#424242"}} >
    Outbound  trips daily to Qara
    </Typography>
   </CardContent>
</Card>

</Box>


<ListOutbound />

</div>
</div>
</>
  )
  
}

export default UserOutound