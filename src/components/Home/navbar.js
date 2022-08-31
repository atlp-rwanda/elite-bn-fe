import React from 'react'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import DrawerComponent from './Drawer'
import Service from './service'
import { Box } from '@mui/material'
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(30),
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'orange',
    fontSize: '20px',
    textAlign: 'center',
    marginLeft: theme.spacing(20),
    '&:hover': {
      color: '#FAB33F',
      borderBottom: '1px solid white',
    },
  },
}))

function Navbar() {
  let navigate = useNavigate()
  const location = useLocation()
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Box>
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                HOME
              </Link>
              <Link to="/register" className={classes.link}>
                SIGN UP
              </Link>
              <Link to="/login" className={classes.link}>
                LOGIN
              </Link>
            </div>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
