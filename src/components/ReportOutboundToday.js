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
import '../pages/Root.css'
import OtboundDamascusToday from '../pages/OtboundDamascusToday.jsx'
import OtboundHomsToday from '../pages/OtboundHomsToday.jsx'
import OtboundDierAtyahToday from '../pages/OtboundDierAtyahToday.jsx'
import OtboundAlNabekToday from '../pages/OtboundAlNabekToday.jsx'
import OtboundYabroudToday from '../pages/OtboundYabroudToday.jsx'
import OtboundQaraToday from '../pages/OtboundQaraToday.jsx'







function ReportOutboundToday() {
  return (
    <>
    <div class ="all">
    {/* <div id= "head-one">
    Outbound Trips Daily Reports 
    </div>
          <br/>  */}



<div id="component-two">
<div id ="Reord2">
  <p id ="p">Daily Reports </p>
  <h1 id ="h1"> Outbound Trips</h1>
  < NavLink id="nav2" to="Subscription" style={{ textDecoration: 'none' }}  >View All  </NavLink>

</div>
<Box
sx={{
display: 'grid',
gap: 2,
gridTemplateColumns: 'repeat(3, 1fr)',
margin :2,
paddingLeft : 26

}}
>
<Card

style={{
width: 300,
height :170,
backgroundColor: '#fafafa' ,


}}
variant="outlined"
>
<CardContent>
<Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
<AirportShuttleIcon />
  Damascus 
</Typography>
<Typography variant="h6" component="h2" style ={{color : "#424242"}} >
Outbound trips daily to damascus
</Typography>
</CardContent>
{/* <br /> */}
<CardActions>
< NavLink to="OtboundDamascusToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
</CardActions>
</Card>


<Card

style={{
width: 300,
height :170,
backgroundColor: '#fafafa' ,


}}
variant="outlined"
>
<CardContent>
<Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
<AirportShuttleIcon />
  Homs 
</Typography>
<Typography variant="h6" component="h2" style ={{color : "#424242"}} >
Outbound trips daily to homs
</Typography>
</CardContent>
<br />


<CardActions>
< NavLink to="OtboundHomsToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
</CardActions>
</Card>

<Card

style={{
width: 300,
height :170,
backgroundColor: '#fafafa' ,


}}
variant="outlined"
>
<CardContent>
<Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
<AirportShuttleIcon />
Dier Atyah 
</Typography>
<Typography variant="h6" component="h2" style ={{color : "#424242"}} >
Outbound trips daily to   Dier Atyah
</Typography>
</CardContent>
{/* <br /> */}
<CardActions>
< NavLink to="OtboundDierAtyahToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
</CardActions>
</Card>
<Card

style={{
width: 300,
height :170,
backgroundColor: '#fafafa' ,


}}
variant="outlined"
>
<CardContent>
<Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
<AirportShuttleIcon />
Al Nabek 
</Typography>
<Typography variant="h6" component="h2" style ={{color : "#424242"}} >
Outbound trips daily to   Al Nabek
</Typography>
</CardContent>
{/* <br /> */}
<CardActions>
< NavLink to="OtboundAlNabekToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
</CardActions>
</Card>
<Card

style={{
width: 300,
height :170,
backgroundColor: '#fafafa' ,


}}
variant="outlined"
>
<CardContent>
<Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
<AirportShuttleIcon />
Yabroud 
</Typography>
<Typography variant="h6" component="h2" style ={{color : "#424242"}} >
Outbound trips daily to Yabroud
</Typography>
</CardContent>
{/* <br /> */}
<CardActions>
< NavLink to="OtboundYabroudToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
</CardActions>
</Card>
<Card

style={{
width: 300,
height :170,
backgroundColor: '#fafafa' ,


}}
variant="outlined"
>
<CardContent>
<Typography variant="h5" component="h2" style ={{fontWeight : "bold"}} >
<AirportShuttleIcon />
  Qara 
</Typography>
<Typography variant="h6" component="h2" style ={{color : "#424242"}} >
Outbound trips daily to qara
</Typography>
</CardContent>
<br />
<CardActions>
< NavLink to="OtboundQaraToday" style={{ textDecoration: 'none' }}  >GET  </NavLink>
</CardActions>
</Card>
</Box>
</div>
</div>
</>
  )
}

export default ReportOutboundToday