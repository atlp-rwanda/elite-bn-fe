import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import MenuIcon from '@material-ui/icons/Menu'
import { TextField } from '@material-ui/core'

import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {ArrowDownwardOutlined} from '@material-ui/icons';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useStyles from './styles'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
function Home() {
  const classes=useStyles()
  let navigate = useNavigate()
  const location=useLocation()
  const menuItems=[
    {
     text:'Home',
     path:'/'
    },

    {
     text:'services',
     path:'/'
    },
    {
     text:'contact us',
     path:'/'
    }
   
 ]
  return (
    <div className={classes.root}>
        <Paper className={classes.paperContainer} elevation={0} >
              
           
      <AppBar position ="static"elevation={0} style={{background: 'transparent', boxShadow: 'none'}} >
      
        <Toolbar >
        <Grid container direction="column" alignItems="center" justify="center">
<List className={classes.list} 
>
    {menuItems.map(item =>(
<ListItem  key={item.text} id="childId"
onClick={()=>navigate(item.path)}
 className={location.pathname==item.path ? classes.active:null}
>
  <ListItemText  primaryTypographyProps={{
                  noWrap: true,
                  letterSpacing: 0,
                }} className={classes.list} primary={item.text}/>
</ListItem>
   ))}
  </List>
  </Grid>
  
   <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
   <List className={classes.list}>
          <ListItem >
          <ListItemText onClick={()=>navigate('/login')}primary="login" />
          </ListItem>
          <ListItem >
              <ListItemText  onClick={()=>navigate('/register')} primary="sign up" path="/register" primaryTypographyProps={{
                  noWrap: true,
                  letterSpacing: 0,
                }} />
          </ListItem>
        </List>
          </Box>

        </Toolbar>
      </AppBar>
      <Grid container direction="column" alignItems="center" justify="center" className={classes.title} >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome to Barefoot Nomad
      </Typography>
      <Typography
      className={classes.small}
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
       A Whole World On A Single Island
      </Typography>
      <Button
        color="secondary"
        size="large"
        variant="contained"
        component="a"
        href="/"
        sx={{ mt: 8 }}
      >
        Get started
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}  className={classes.inch}>
        Discover the experience
      </Typography>
      <ArrowDownwardOutlined className={classes.arrow} />

          </Grid>
          </Paper>
    </div>
  )
}
export default Home
