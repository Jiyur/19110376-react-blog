import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function getHost(){
    return window.location.host;
}



export default function ButtonAppBar() {
  const myLink=props=><Link to={getHost()} {...props} />
  function getHost(){
    return '/'
  }
  return (

    <Box sx={{ flexGrow: 1 
    }}>
      <AppBar position="static">
        <Toolbar >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            Blog
          </Typography>
          <Button color="inherit" sx={{ml:'auto'}} component={myLink} >Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
