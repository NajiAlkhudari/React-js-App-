import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import {Link} from 'react-router-dom'


export const Footer: FC = (): ReactElement => {
  return (
    
    <Box
      sx={{
      
    backgroundColor: "#cfd8dc",
     width: '100%',
    // position: 'fixed',
    // bottom: 0,
    padding: 20,
    height:50

      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
          <Grid item>
        <a href='https://www.facebook.com/kalamoonofficial'> 
        <FacebookIcon  style={{ fill: '#424242' }}/>
        </a>
        
      <a href="https://www.google.com/search?q=%D8%AF%D8%B1%D8%AC%D8%A7%D8%AA+%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9+%D8%AF%D9%8A%D8%B1%D8%B9%D8%B7%D9%8A%D8%A9&ei=vWTXY-OTGp-jkdUPvoGW4AE&ved=0ahUKEwij5q2n1u78AhWfUaQEHb6ABRwQ4dUDCA8&uact=5&oq=%D8%AF%D8%B1%D8%AC%D8%A7%D8%AA+%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9+%D8%AF%D9%8A%D8%B1%D8%B9%D8%B7%D9%8A%D8%A9&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIJCAAQDRCABBATMggIABAWEB4QEzoICAAQogQQsAM6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToICAAQgAQQsQM6CAguELEDEIMBOgUIABCABDoICAAQsQMQgwE6CwguEIAEELEDEIMBOhAIABCABBCxAxCDARBGEIACOgYIABAWEB46BwgAEA0QgAQ6BggAEB4QDToICAAQFhAeEA86BwgAEIAEEBM6CggAEBYQHhAPEBM6DQgAEBYQHhAPEPEEEBM6CAgAEB4QDRATOgoIABAWEB4QChATOgoIABAIEB4QDRATOgoIABAeEA0QDxATOgwIABAIEB4QDRAPEBNKBAhBGAFKBAhGGABQlRJYkldgi1loBHAAeACAAd4BiAHGGpIBBjAuMjEuMZgBAKABAcgBAsABAQ&sclient=gws-wiz-serp">

          <ThermostatIcon style ={{ fill: '#424242' }}/>
        </a>
        
        <a   target="_blank"  href="http://www.uok.edu.sy/" style={{ textDecoration: 'none'}}>kalamoon</a>
 
      </Grid>

            <br />
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              { `© ${new Date().getFullYear()}  University of Kalamoon `}

            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;