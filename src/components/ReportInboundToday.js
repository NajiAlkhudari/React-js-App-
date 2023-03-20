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
import Date from './Date.js'
import Report from '../pages/Report.jsx'
import InboundDamascusToday from '../pages/InboundDamascusToday.jsx'
import InboundHomsToday from '../pages/InboundHomsToday.jsx'
import InboundDierAtyahToday from '../pages/InboundDierAtyahToday.jsx'
import InboundAlNabekToday from '../pages/InboundAlNabekToday.jsx'
import InboundYabroudToday from '../pages/InboundYabroudToday.jsx'
import InboundQaraToday from '../pages/InboundQaraToday.jsx'

import '../pages/Root.css'
function ReportInboundToday() {
  return (
    <>
              <div class ="all">  
              {/* <div id= "head-one">
              Inbound Trips Daily Reports 
              </div>
                    <br/>  */}


<div id="component-one">
<div id ="Reord">
  <p id ="p">Daily Reports </p>
  <h1 id ="h1"> Inbound Trips</h1>
  < NavLink id="nav" to="Report" style={{ textDecoration: 'none' }}  >View All  </NavLink>

</div>
<Box
  sx={{
    display: 'grid',
    gap: 2,
    gridTemplateColumns: 'repeat(3, 1fr)',
    margin :2,
    paddingLeft : 30

  }}
>

 
<Card

  style={{
    width: 300,
   height :170,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
  <AirportShuttleIcon />
            Damascus 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
  Inbound trips daily from damascus
    </Typography>
   </CardContent>
   {/* <br /> */}
  <CardActions>
  < NavLink to="InboundDamascusToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
  </CardActions>
</Card>

  
<Card

  style={{
    width: 300,
   height :170,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
  <AirportShuttleIcon />
            Homs 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
  Inbound trips daily from homs
    </Typography>
   </CardContent>
   {/* <br /> */}
  <CardActions>
  < NavLink to="InboundHomsToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
  </CardActions>
</Card>

<Card

  style={{
    width: 300,
   height :170,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
  <AirportShuttleIcon />
  Dier Atyah 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
  Inbound trips daily from   Dier Atyah
    </Typography>
   </CardContent>
   {/* <br /> */}
  <CardActions>
  < NavLink to="InboundDierAtyahToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
  </CardActions>
</Card>
<Card

  style={{
    width: 300,
   height :170,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
  <AirportShuttleIcon />
  Al Nabek 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
  Inbound trips daily from   Al Nabek
    </Typography>
   </CardContent>
   {/* <br /> */}
  <CardActions>
  < NavLink to="InboundAlNabekToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
  </CardActions>
</Card>
<Card

  style={{
    width: 300,
   height :170,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
  <AirportShuttleIcon />
  Yabroud 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
  Inbound trips daily from Yabroud
    </Typography>
   </CardContent>
   {/* <br /> */}
  <CardActions>
  < NavLink to="InboundYabroudToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
  </CardActions>
</Card>
<Card

  style={{
    width: 300,
   height :170,
    backgroundColor: '#f5f5f5' ,
  

  }}
  variant="outlined"
>
  <CardContent>
  <Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
  <AirportShuttleIcon />
            Qara 
    </Typography>
    <Typography variant="h6" component="h2" style ={{color : "#424242"}} >
  Inbound trips daily from qara
    </Typography>
   </CardContent>
   <br />
   
  <CardActions>
  < NavLink to="InboundQaraToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
  </CardActions>
</Card>
</Box>
{/* <div>
<Date />
</div> */}
</div>

</div>

</>
  )
  
}

export default ReportInboundToday