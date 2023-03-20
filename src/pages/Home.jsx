import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {NavLink} from 'react-router-dom'


export default function Home() {
  
  return (
    <div >
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'  }}>
  
    <nav aria-label="secondary mailbox folders">
    <List>
          
          <ListItem disablePadding>
            < NavLink to="InboundDamascusToday" style={{ textDecoration: 'none' }}  >
            <ListItemButton >
            <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            <ListItemText primary="Inbound today trip" />
            </ListItemButton>
                </NavLink>

            
          </ListItem>
        </List>
      </nav>
      <nav aria-label="secondary mailbox folders">
    <List>
          
          <ListItem disablePadding>
            < NavLink to="InboundDamascusToday" style={{ textDecoration: 'none' }}  >
            <ListItemButton >
            <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            <ListItemText primary="Inbound today trip" />
            </ListItemButton>
                </NavLink>

            
          </ListItem>
        </List>
      </nav>
      <nav aria-label="secondary mailbox folders">
    <List>
          
          <ListItem disablePadding>
            < NavLink to="InboundDamascusToday" style={{ textDecoration: 'none' }}  >
            <ListItemButton >
            <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            <ListItemText primary="Inbound today trip" />
            </ListItemButton>
                </NavLink>

            
          </ListItem>
        </List>
      </nav>
    </Box>
    </div>
  );
}