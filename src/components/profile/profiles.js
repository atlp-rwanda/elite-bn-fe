import React,{useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {format} from 'date-fns'
import ToolBar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import useStyles from './styles'
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import ListItemButton from '@mui/material/ListItemButton';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import api from '../../../utils/api'
import { setToken } from '../../redux/features/registerReducer'
import { useDispatch, useSelector } from 'react-redux';
import {  toast, ToastContainer } from 'react-toastify';
import Dboard from '../../Layouts/DashboardLayout'

import {
  getProfileData,
  updateProfileData,
  thisUser,
} from '../../redux/features/profile';
import { 
  HttpsOutlined, 
  PermIdentity, 
  NotificationImportantOutlined,
  SubjectOutlined,
  CardTravelOutlined,LocalAirportOutlined,CommentOutlined} 
  from '@material-ui/icons';
import {
  CardActions,
  Button,
  MenuItem,
  Select,
  InputLabel,
} from '@material-ui/core';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const handleClose = () => {
  setOpen(false);
};
function Profiles(){
  const dispatch = useDispatch();
const userProfile= {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    nationality: '',
    department: '',
    preferredLanguage: '',
    preferredCurrency: '',
    lineManager: '',
    phone: '',
    birthdate: '',
  }
}
 const [error, setError]= useState('')
 const [severity, setSeverity]= useState('')
 const { profile } = useSelector(thisUser);
  useEffect(() => {
    const renderState = async () => {
      await api
        .get('/api/v1/user/profile')
        .then((res) => {
          const profile = res.data
          console.log(profile)
          dispatch(getProfileData(profile));
        })
        .catch((err) => {
          // alert(err)
          // console.log(err)
        });
    };
    renderState();
  }, [profile]);
  
  console.log('this is profile',profile)

  const handleChange = (e) => {
    dispatch(
      getProfileData({
        ...profile.user,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleReset = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  const handleUpdate = async () => {
    const {
      gender,
      nationality,
      department,
      preferredLanguage,
      preferredCurrency,
      lineManager,
      firstName,
      phone,
      lastName,
      birthdate,
    } = profile?.payload;

    await api
      .patch('/api/v1/user/profile', {
        gender,
        nationality,
        department,
        preferredLanguage,
        preferredCurrency,
        lineManager,
        phone,
        firstName,
        lastName,
        birthdate,
      })
      .then((res) => {
        console.log('updated successful',res.data)
        dispatch(updateProfileData(res.data));
       setError('Profile Updated Successfully')
       setSeverity('success')
      })

      .catch((err) => {
        if (!err?.response) {
          setError(`${err.response}`)
          setSeverity('error')
        }
       
        else {
          setError(`profile update failed`)
          setSeverity('error')
        }
      });
  };

  

  
  
       
          
  const FORM_VALIDATION = yup.object().shape({
    gender: yup.mixed().oneOf(['male', 'female', 'prefer not say']),
    nationality: yup.string(),
    department: yup.string(),
    lineManager: yup.string(),
    preferredLanguage: yup.string(),
    preferredCurrency: yup.string(),
    phone: yup
      .number()
      .integer()
      .typeError('Please enter a valid number'),
   birthdate: yup.date().min('12-31-1800').max('12-31-2010'),
  });
  const classes=useStyles()
  let navigate = useNavigate()
  const location=useLocation()
  const drawerWidth=240
  const toolbar=48
  const menuItems=[
     {
      text:'dashboard',
      icon:<SubjectOutlined color='secondary' fontSize="small"/>,
      path:'/dashboard'
     },

     {
      text:'accommodations',
      icon:<CardTravelOutlined color='secondary'fontSize="small" />,
      path:'/accomodation'
     },
     {
      text:'chats',
      icon:<CommentOutlined color='secondary' fontSize="small"/>,
      path:'/chats'
     },
     {
      text:'profile',
      icon:<HttpsOutlined color='secondary'fontSize="small" />,
      path:'/profile'
     },
     {
      text:'trip Requests',
      icon:<LocalAirportOutlined color='secondary' fontSize="small"/>,
      path:'/trip'
     }
  ]
return (
 
  <div className={classes.root}>
        <Dboard>
    {/* <AppBar className={classes.app}
    style={{width:`calc(100% - ${drawerWidth}px)`,backgroundColor:'white'}}
      elevation={0}
    > 
      <ToolBar >
      <Typography className={classes.date}>
  Today is The &nbsp;
             {format(new Date(),'do MMMM Y')}
          </Typography>
          <NotificationImportantOutlined onClick={()=>navigate('/notifications')}
             color="secondary" fontSize="small"/>
         
          <Typography
    className={classes.avatar}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              color: 'black',
              textDecoration: 'none',
            }}
          >
      {profile?.payload?.user?.firstName}
          </Typography>
          <Avatar alt="Julien Ishimwe" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAM1BMVEXk5ueutLfn6eq6vsGrsbTZ3N3q7O3KztDg4uPW2dq2u768wcPDx8nR1NazuLvAxMelq6+s5OhrAAADSklEQVR4nO2aybakIAxAIcyKw/9/bavPqvaUVgHRRBfcrQvvCWEKEaJSqVQqlUqlUqlUKpXKGQDgboUVa0F4Y4wXYG92AvAhNnpFKmfEjUbWDHKyeDMp9dHfIwTQ9aPcoUcV7A02ptd7mb8YtewRgvhFZhGSHasP+G+heQkNnDZG/raZfHq2+IA5SOE9TAkEJhWaNT48Nj5HZvZRLD6JLN74DPTDBUOuzeRDPt+hy7eRciS2EVAgQz9c4EqCM/kEUp/cWfWmodxOf+5Ux+ExlOEptSHdvMqm1erj6XzaYhupHdloFSfyTEOlAyFrJ/+EarRswf6wIRDpQIOx0Y5IB5U6UrdEyYPTkVTH1IDTkTQ6gNTRJDbTmvwwHdQ8p9om0DokNk/LnYfNLGFwNlTrDnJVVlRbeo/SiUQ6tkVNLaq7X+mtZsXQ2EzJg9EhLGQgDjw6kt20MKNFedFCjBZlkceq4lso3b1mIhTr0JYw1JOCk1s0fUNdrrRFNYyRtrwzUzJUivyxJLOqvNhwVJbz10LaUtOL3PShL+P+kVeS47LJO/gwTKr/Pqn80T2jzXLn+iWke+bnRxDD+E1Ia8f/OAtGHUZIy+GWx3SA0O6EtIwsq82xkHBqec1f2wz6truzzWBpezCdi23bRheMuL0zBADsCtzYp7L82y+hmWMzhye6LsyNKtxWYMEHF9Ura94TXOtxTiDXea5hm2MShkZuNPbrzvSl5VAC66e59HUB3DqNuo8BCNdDECZmqWzCNFA1GAF0Ktl6cWDUO3F9ExZ4V+7yMhrMtVkEImJl/oTaC6sqAOjIbCJ02ZEjnJVZhEZ3RVKDwJXgDoR6c3raJ459hUInT0LXhWb16c8chr434+GF8CUN7JvIbx9smTl5e0H6DKiELm//yPVpMDY0sVl82ifZIF5NoLgmWeZTmM+ocn+JT9k9lVZGljWFlfQGYskv1JEsf58UtGagXvWKfTKHi2z9+9DJfLKlnlVvn6ziIVNwJrI2C2SXDoKc8JDuDh86GR2glktmYkz3rnAl8kz6aMg4VjLjoRQQfZwnSI4Wy4r8Qqfuypypk5E8tMeunU7iGM+ymW90EisPuEZxkjxlAC8Jm0qlUqlUnso/xP0nnQPE+MgAAAAASUVORK5CYII=" />
      </ToolBar>
    </AppBar>
 
    <Drawer
      className={classes.drawer} 
      variant="permanent"
      anchor= "left"
     classes={{ paper:classes.paperDrawer }}
   >
   <div>
   <Typography
   className={classes.title}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',

            }}
          >
            Barefoot Normad
          </Typography>
   </div>
 
  <List className={classes.list}>
    {menuItems.map(item =>(
<ListItem key={item.text}
onClick={()=>navigate(item.path)}
 className={location.pathname==item.path ? classes.active:null}
>
  <ListItemIcon>{item.icon}</ListItemIcon>
  <ListItemText primary={item.text}/>
</ListItem>
   ))}
  </List>
    </Drawer>
    <Box className={classes.form} style= {{width:`calc(100% - ${drawerWidth}px)`,backgroundColor:'white'}}> */}
  <Grid container direction="column" alignItems="center" justify="center">
  {/* <Grid
              item
              xs={12}
              style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
              <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      >
              <PermIdentity
                style={{ width: '3rem', height: '3rem', color: '#FAB33F', }}
              />
              <Typography>Account Settings</Typography>
              </Box>
            </Grid> */}
          
            {/* <Grid
            container
            spacing={4}
            sx={{
              color: 'red',
              '& .MuiGrid-container': { with: '300rem', color: 'red' },
            }}
          >
            </Grid> */}
            <div>
        {open && <Snackbar open={error} autoHideDuration={6000} onClose={handleClose} >
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }} >
            {error}
          </Alert>
        </Snackbar>}
      </div>
      {/* {profile?.payload?.user && */}
        <Grid
        item
        xs={12}
      >
      <Formik
        initialValues= {profile?.payload?.user==undefined  ? userProfile : profile?.payload?.user}
        validationSchema={
          FORM_VALIDATION
        }
        onSubmit={handleUpdate}
      >
        <Form
          className={classes.container}
          data-testid="profile-form"
          sx={{
            '& .MuiOutlinedInput-input': {
              width: '25rem',
            },
          }}
        >
            <Grid container  spacing={2}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="firstName"
                defaultValue={ profile?.payload?.user==undefined  ? userProfile?.firstName :profile?.payload?.user?.firstName}
                label="First Name"
                onChange={handleChange}
                data-testid="firstName" 
                className={classes.inputBtn}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                   variant="outlined"
                   name="lastName"
                   onChange={handleChange}
                   defaultValue={ profile?.payload?.user==undefined  ? userProfile?.lastName :profile?.payload?.user?.lastName}
                   label="Last Name"
                   data-testid="lastName"
                   className={classes.inputBtn}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="email"
                defaultValue={ profile?.payload?.user==undefined  ? userProfile?.email :profile?.payload?.user?.email}
                label="Email"
                onChange={handleChange}
                data-testid="email"
                className={classes.inputBtn}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="Gender"> Gender </InputLabel>
              <Select
                defaultValue={ profile?.payload?.user==undefined  ? userProfile?.gender:profile?.payload?.user?.gender}
                name="gender"
                onChange={handleChange}
                variant="outlined"
                labelId="Gender"
                data-testid="gender"
                className={classes.inputBtn}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="prefer not say">Prefer not say</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
            variant="outlined"
            name="nationality"
            label="Nationality"
            data-testid="nationality"
            defaultValue={ profile?.payload?.user==undefined  ? userProfile?.nationality :profile?.payload?.user?.nationality}
            onChange={handleChange}
            className={classes.inputBtn}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="department"
                label="Department"
                data-testid="department"
                defaultValue={ profile?.payload?.user==undefined  ? userProfile?.department :profile?.payload?.user?.department}
                onChange={handleChange}
                className={classes.inputBtn}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
               variant="outlined"
               name="preferredLanguage"
               label="Preferred Language"
               data-testid="preferredLanguage"
               defaultValue={ profile?.payload?.user==undefined  ? userProfile?.preferredLanguage :profile?.payload?.user?.preferredLanguage}
               onChange={handleChange}
               className={classes.inputBtn}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
               variant="outlined"
               name="preferredCurrency"
               label="Preferred Currency"
               data-testid="preferredCurrency"
               defaultValue={ profile?.payload?.user==undefined  ? userProfile?.preferredCurrency :profile?.payload?.user?.preferredCurrency}
               onChange={handleChange}re
               className={classes.inputBtn}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                  variant="outlined"
                  name="lineManager"
                  label="Line Manager"
                  data-testid="lineManager"
                  defaultValue={ profile?.payload?.user==undefined  ? userProfile?.lineManager :profile?.payload?.user?.lineManager}
                  onChange={handleChange}
                  className={classes.inputBtn}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                 variant="outlined"
                 name="phone"
                 label="Phone Number"
                 data-testid="phone"
                 defaultValue={ profile?.payload?.user== undefined  ? userProfile?.phone :profile?.payload?.user?.phone}
                 onChange={handleChange}
                 className={classes.inputBtn}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
            id="date"
            data-testid="dob"
            label="Date of Birth"
            type="date"
            name="birthdate"
            className={classes.inputBtn}
            defaultValue={ profile?.payload?.user==undefined  ? userProfile?.birthdate :profile?.payload?.user?.birthdate}
            format="MM/dd/yyyy"
            min="1900-12-31"
            max="2010-12-31"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
              />
            </Grid>
            <Grid direction="column" alignItems="center" justify="center">
            <Grid item xs={12} center>
              <CardActions className={classes.actions}>
                <Button
                 id="save"
                 typeof="submit"
                 color="primary"
                 variant="contained"
                 className={classes.save}
                 onClick={handleUpdate }
                 style={{backgroundColor: '#3f50b5', color: '#FFFFFF'}}
                > Update
                </Button>
                <Button
                 typeof="button"
                 color="secondary"
                 className={classes.cancel}
                 variant="outlined"
                 onClick={handleReset}
                >
                  CANCEL
                </Button>
              </CardActions>
              </Grid>
            </Grid>
            </Grid>
            </Form>
      </Formik>
      </Grid>
      {/* // } */}
     
     </Grid>
     </Dboard>
     </div>
)

}
export default Profiles