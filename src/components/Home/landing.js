import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AppBar from '@mui/material/AppBar'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import MenuIcon from '@material-ui/icons/Menu'
import { TextField } from '@material-ui/core'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Footer from './footer'
import { CssBaseline } from '@material-ui/core'

import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { ArrowDownwardOutlined } from '@material-ui/icons'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import useStyles from './styles'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/system'
import Service from './service'
import Feedback from './feedback'
import LandingNav from './landingNav'
import Destination from './destination'

function Landing() {
  const section = useRef(null)
  const goToSection = () => window.scrollTo({ top: section.current.offsetTop, behavior: 'smooth' })
  const classes = useStyles()
  let navigate = useNavigate()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('xs'))
  console.log(matches)
  const location = useLocation()
  const handleClick = () => {
    const [scrollDown, setScrollDown] = useState(false)
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setScrollDown(true)
        } else {
          setScrollDown(false)
        }
      })
    }, [])
  }

  const divStyle = {
    width: 'fit-content',
  }

  return (
    <div className={classes.root} style={divStyle}>
      <Paper className={classes.paperContainer} elevation={0}>
        <LandingNav />
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.title}
          item xs={12}
        >
          <Typography
            color="inherit"
            align="center"
            variant="h2"
            marked="center"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
          >
            Welcome to Barefoot Nomad
          </Typography>
          <Typography
            className={classes.small}
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
          >
            A Whole World On A Single Island.
          </Typography>
          <Button
            style={{
              backgroundColor: '#FAB33F',
            }}
            color="secondary"
            size="large"
            variant="contained"
            component="a"
            sx={{ mt: 8 }}
          >
            Get started
          </Button>
          <Typography variant="body2" color="inherit" sx={{ mt: 2 }} className={classes.inch}>
            Discover the experience
          </Typography>
          <ArrowDownwardOutlined className={classes.arrow} onClick={goToSection} />
        </Grid>
      </Paper>

      <div ref={section}>
        <Footer />
      </div>
    </div>
  )
}
export default Landing
