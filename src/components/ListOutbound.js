import '../pages/User.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

import Box from '@mui/material/Box';

import {NavLink} from 'react-router-dom'






import React from 'react'

function ListOutbound() {
  return (
    <div style={{paddingLeft:330}}>

    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'  }}>
  <h3 id="p1">All Reports Outbound Trips</h3>
    <nav aria-label="secondary mailbox folders">
    <List>
          
          <ListItem disablePadding>
            < NavLink to="AlldamascusOutboundTrip" style={{ textDecoration: 'none' , color:"black" }}  >
            <ListItemButton >
            <ListItemIcon>
                <DirectionsBusIcon  color="primary"/>
              </ListItemIcon>
            <ListItemText primary="Damascus" />
            </ListItemButton>
                </NavLink>

            
          </ListItem>
        </List>
      </nav>
      <nav aria-label="secondary mailbox folders"   >
    <List>
          
          <ListItem disablePadding>
            < NavLink to="AllhomsOutboundTrip" style={{ textDecoration: 'none' , color:"black"}}  >
            <ListItemButton >
            <ListItemIcon>
                <DirectionsBusIcon color="primary" />
              </ListItemIcon>
            <ListItemText primary="Homs" />
            </ListItemButton>
                </NavLink>

            
          </ListItem>
        </List>
      </nav>
      <nav aria-label="secondary mailbox folders">
    <List>
          
          <ListItem disablePadding>
            < NavLink to="AllDierAtyahOutboundTrip" style={{ textDecoration: 'none' , color:"black"}}  >
            <ListItemButton >
            <ListItemIcon>
                <DirectionsBusIcon  color="primary"/>
              </ListItemIcon>
            <ListItemText primary="Dier Atyah" />
            </ListItemButton>
                </NavLink>

            
          </ListItem>
        </List>
        <List>
          
          <ListItem disablePadding>
            < NavLink to="AllAlNabekOutboundTrip" style={{ textDecoration: 'none', color:"black" }}  >
            <ListItemButton >
            <ListItemIcon>
                <DirectionsBusIcon  color="primary"/>
              </ListItemIcon>
            <ListItemText primary="Al Nabek" />
            </ListItemButton>
                </NavLink>

            
          </ListItem>
        </List>
        <List>
          
          <ListItem disablePadding>
            < NavLink to="AllYabroudOutboundTrip" style={{ textDecoration: 'none', color:"black" }}  >
            <ListItemButton >
            <ListItemIcon>
                <DirectionsBusIcon color="primary" />
              </ListItemIcon>
            <ListItemText primary="Yabroud" />
            </ListItemButton>
                </NavLink>

            
          </ListItem>
        </List>
        <List>
          
          <ListItem disablePadding>
            < NavLink to="AlIQaraOutboundTrip" style={{ textDecoration: 'none' , color:"black"}}  >
            <ListItemButton >
            <ListItemIcon>
                <DirectionsBusIcon color="primary" />
              </ListItemIcon>
            <ListItemText primary="Qara" />
            </ListItemButton>
                </NavLink>

            
          </ListItem>
        </List>
        
      </nav>
    </Box>
    </div>
  )
}

export default ListOutbound