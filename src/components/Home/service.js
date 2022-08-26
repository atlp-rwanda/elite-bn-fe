import React,{useEffect,useRef,useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import useStyles from './styles'
import Grid from '@material-ui/core/Grid'
function Service() {
    const classes=useStyles()
  return (
    <div className={classes.serviceRoot}>
    <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.service}>
    Our Services
    </Typography>
    <Grid container direction="column" alignItems="center" justify="center" >
    <Card sx={{ maxWidth: 345 }} style={{display: 'inline-block', height:"567"
       , width:"1197"}}>
      <CardMedia
        component="img"
       
        image="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="green iguana"
      />
    
    </Card>
    </Grid>
    <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.service}>
    Our Destination
    </Typography>
    <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
     
     <div className={classes.carding}>

  
     <Card sx={{ maxWidth: 345 }} style={{display: 'inline-block', height:"567"
       , width:"1197"}} className={classes.cardOfFrance}>
      <CardMedia
        component="img"
       
        image="https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="green iguana"
      />
    </Card>

    <Card sx={{ maxWidth: 345 }} 
      >
      <CardMedia
        component="img"
       
        image="https://images.pexels.com/photos/2867769/pexels-photo-2867769.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="green iguana"
      />
    </Card>
    <Card sx={{ maxWidth: 345 }} className={classes.cardOfDubai}
      >
      <CardMedia
        component="img"
       
        image="https://images.pexels.com/photos/3032330/pexels-photo-3032330.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="green iguana"
      />
    </Card>
    </div>  
    </div>
  )
}
export default Service
