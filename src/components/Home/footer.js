import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@mui/material/Typography';
import useStyles from './styles'
import Box from '@mui/material/Box';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StarRateIcon from '@mui/icons-material/StarRate';
import {StarBorderOutlined} from '@material-ui/icons';
import Container from '@mui/material/Container';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from "react-router-dom";
export default function Footer() {
    const classes=useStyles()
  return (
  <footer>
 <Box bgcolor='#484A50' color="common.white" px={{xs:3,sm:10}} py={{xs:5,sm:10}}>
  <Container maxWidth="lg">
<Grid container spacing ={5}  wrap="nowrap">
<Grid item xs={12} sm={4}>
<Box >
<Typography className={classes.footerTitle}>
About us
</Typography>
</Box>
<Box> 
<Typography paragraph color="common.white">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nulla atque assumenda voluptates quibusdam sapiente molestias, expedita provident reiciendis sequi animi fuga unde eaque itaque. Velit, autem. Eum, dolor quod?
</Typography>
</Box>
</Grid>
<Grid item xs={12} sm={4}>
<Typography className={classes.footerTitle}>
Legal
</Typography>
<Box>
<Typography paragraph color="common.white" >
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nulla atque assumenda voluptates quibusdam sapiente molestias, expedita provident reiciendis sequi animi fuga unde eaque itaque. Velit, autem. Eum, dolor quod?
</Typography>
</Box>
</Grid>
<Grid item xs={12} sm={4}>
<Typography className={classes.footerTitle}>
Useful links
</Typography>
<Box>
<Link to="/" className={classes.link}>
              Home
            </Link> <br />
            <Link to="/" className={classes.link}  onClick={() => window.location.replace("/#about")}>
             services
            </Link> <br />
            <Link to="/login" className={classes.link}>
              Login
            </Link> <br />
            <Link to="/register" className={classes.link}>
              Register
            </Link>
</Box>
</Grid>
<Grid item xs={12} sm={4}>
<Box >
<Typography className={classes.footerTitle}>
Join us on :
</Typography>
</Box>
<Box>
<YouTubeIcon  sx={{color:'red',fontSize:70}}/><br />
</Box>
</Grid>
</Grid>
<Box borderBottom={1}>
</Box>
<Box sx={{ display: 'flex' ,justifyContent: 'space-around'}} className={classes.boxFooter}>
<Typography>
Copyright  &reg; Barefoot Normad, All rights reserved 
</Typography>
<Typography>
Barefoot Nomad {new Date().getFullYear()}
</Typography>
<Typography>
Developed by Elite Team
</Typography>  
</Box>
  </Container>
 </Box>
  </footer>
  );
}

