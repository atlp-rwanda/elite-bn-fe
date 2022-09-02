import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import useStyles from './styles'
import Destination from './destination'
export default function MediaCard({ place, checked }) {
  const classes = useStyles()
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card sx={{ maxWidth: 645, backgroundColor: '#D9D9D9', margin: '20px' }} elevation={0}>
        <CardMedia
          sx={{ height: 440 }}
          component="img"
          height="140"
          image={place.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h3" component="div" className={classes.titleCards}>
            {place.title}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  )
}
