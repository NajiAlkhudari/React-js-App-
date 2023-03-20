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
import './User.css'
// import ReportInboundToday from '../components/ReportInboundToday'
// import ReportOutboundToday from '../components/ReportOutboundToday'
import ReportOneUser from '../components/ReportOneUser.js'
import WithGuard from '../components/WithGuard.js'

import UserInbound from '../components/UserInbound.js'
import UserOutound from '../components/UserOutound.js'
import UserAdiition from '../components/UserAdiition.js'

const Root = () => {
            
            return (
            <div>
            
                  <UserInbound /> 
    <UserOutound />

   <UserAdiition />
   <ReportOneUser /> 


            </div>
            );
}

export default Root;
