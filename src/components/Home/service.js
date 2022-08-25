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
    <Typography
      className={classes.small}
        color="inherit"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
      </Typography>
     
<Grid container spacing={3}>
<Card sx={{ maxWidth: 345 }} style={{display: 'inline-block', height:"567"
       , width:"1197"}}>
      <CardMedia
        component="img"
       
        image="https://media.istockphoto.com/photos/silverback-gorillas-picture-id1091885206?b=1&k=20&m=1091885206&s=612x612&w=0&h=CPF3kYbW2zSGP4ZYVH8pg2VgcPwLrP-Xx7VP4fbi7qI="
        alt="green iguana"
      />
    
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{display: 'inline-block', height:"567"
       , width:"1197"}}>
      <CardMedia
        component="img"
       
        image="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="green iguana"
      />
    
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{display: 'inline-block', height:"567"
       , width:"1197"}}>
      <CardMedia
        component="img"
       
        image="https://images.pexels.com/photos/3071144/pexels-photo-3071144.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="green iguana"
      />
    </Card>
</Grid>
    
    </div>
  )
}
export default Service
