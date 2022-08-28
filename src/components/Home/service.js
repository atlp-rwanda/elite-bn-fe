import React,{useEffect,useRef,useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import useStyles from './styles'
import Grid from '@material-ui/core/Grid'
import TitlebarImageList from './image'
import Destination from './destination'

function Service() {
    const classes=useStyles()
  return (
    <div className={classes.serviceRoot} id={"about"}>
    <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.service}>
    Our Services
    </Typography>
    <Grid container direction="column" alignItems="center" justify="center" >
    <TitlebarImageList />
    <Destination />
    </Grid>
    </div>
  )
}
export default Service
