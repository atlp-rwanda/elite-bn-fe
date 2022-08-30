import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {useLocation, useNavigate} from 'react-router-dom';
import DrawerComponent from "./Drawer";
import Service from './service'
import { Box } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    align: 'center',
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    textAlign: 'right',
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: '#FAB33F',
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  let navigate = useNavigate()
  const location=useLocation()
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Box align='center' > 
          <div className={classes.navlinks} >
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/" className={classes.link} onClick={() => window.location.replace("/#about")}>
             services
            </Link>
            <Link to="/logout" className={classes.link}>
              Log out
            </Link>
          </div>
          </Box>

        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;