import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Grid from '@material-ui/core/Grid'
import InstagramIcon from '@mui/icons-material/Instagram'
import Typography from '@mui/material/Typography'
import useStyles from './styles'
import Box from '@mui/material/Box'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import StarRateIcon from '@mui/icons-material/StarRate'
import { StarBorderOutlined } from '@material-ui/icons'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Container from '@mui/material/Container'
import RoomIcon from '@material-ui/icons/Room'
import { Link } from 'react-router-dom'
export default function Footer() {
  const classes = useStyles()
  return (
    <div>
        <footer>
      <Box bgcolor="#484A50" color="common.white" px={{ xs: 5, sm: 10 }} py={{ xs: 5, sm: 10 }} className={classes.footerWidth}>
        <Container maxWidth="lg">
          <Grid container spacing={5} wrap="nowrap" item xs={12} >
            <Grid item xs={12} sm={3}>
              <Box>
                <Typography className={classes.footerTitle}>About us</Typography>
              </Box>
              <Box>
                <Typography paragraph color="common.white">
                  Barefoot Nomad helps clients to travel in difeerent places around the world. Our
                  aim is to provide better travelling services and quality.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.footerTitle}>Legal</Typography>
              <Box>
                <Typography paragraph color="common.white">
                  The rules and regulation should be followed. The user experience with this product
                  is suitable for use terms and conditon should be implemented.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography className={classes.footerTitle}>Join us on :</Typography>
              </Box>
              <Box>
                <YouTubeIcon />
                <br />
                <InstagramIcon />
                <br />
                <LinkedInIcon />
              </Box>
            </Grid>
          </Grid>
          <Box borderBottom={1}></Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-around' }}
            className={classes.boxFooter}
          >
            <Typography>Copyright &reg; Barefoot Normad, All rights reserved</Typography>
            <Typography>Barefoot Nomad {new Date().getFullYear()}</Typography>
            <Typography>Developed by Elite Team</Typography>
          </Box>
        </Container>
      </Box>
    </footer>
      
    </div>

  )
}
