import * as React from 'react';
import useStyles from './styles'
import Typography from '@material-ui/core/Typography'
import MediaCard from './cards'
import places from './places'
import useWindowPosition from './useWindowPosition'
export default function Destination() {
    const classes=useStyles()
    const checked=useWindowPosition('about')
  return (
    <div>
 <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.service}>
    Our Destination
    </Typography>
    <Typography variant="body2" align="center" color="text.secondary" paragraph>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
    <div className={classes.rootDestination} id="header">
       < MediaCard place ={places[0]} checked={checked}/>
       < MediaCard place ={places[1]} checked={checked}/>
       < MediaCard place ={places[2]} checked={checked}/>

        </div>
        </div>
  );
}


