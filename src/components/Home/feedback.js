import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'
import Box from '@mui/material/Box';
import StarRateIcon from '@mui/icons-material/StarRate';
import Avatar from '@mui/material/Avatar';
import {StarBorderOutlined} from '@material-ui/icons';
export default function Feedback() {
    const classes=useStyles()
  return (
    <div className={classes.feedbackContainer}>
      <Grid container direction="column" alignItems="center" justify="center" >
    <Typography variant="h4" align="center" marked="center" className={classes.feedbackTypo}> FeedBack for clients </Typography>
    </Grid>
    {/* <Typography variant="body2" color="text.secondary" paragraph>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
    <div className={classes.FeedbackRoot}>
    <Grid container direction="row" alignItems="center" justify="center" >
      <Grid item>
    <Card sx={{ maxWidth: 345 }} className={classes.card1} >
  
      <CardContent  className={classes.content}sx={{display: 'flex' }}>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4382484/pexels-photo-4382484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className={classes.avatar} />
        <Typography gutterBottom variant="h5" component="div" className={classes.eliab}   sx={{
              fontFamily: 'Roboto'
            }}>
         Uwishema 
        </Typography>
        </CardContent>
        <CardContent className={classes.icons}>
        <StarRateIcon/>
        <StarRateIcon/>
        <StarRateIcon/>
        <StarRateIcon/>
        <StarRateIcon/>
        <StarRateIcon/>
        </CardContent>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
    
      </CardContent>
    </Card>
    </Grid>
  
    <Card sx={{ maxWidth: 345 }} >
  
  <CardContent  className={classes.content}sx={{display: 'flex' }}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=600" className={classes.avatar} />
    <Typography gutterBottom variant="h5" component="div" className={classes.eliab}   sx={{
          fontFamily: 'Roboto'
        }}>
     Eliab Ish
    </Typography>
    </CardContent>
    <CardContent className={classes.icons}>
    <StarRateIcon/>
    <StarRateIcon/>
    <StarRateIcon/>
    <StarRateIcon/>
    <StarRateIcon/>
    <StarRateIcon/>
    </CardContent>
    <CardContent>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
</Card>
</Grid>
    </div>

    </div>
  );
}
