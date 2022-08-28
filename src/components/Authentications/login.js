import React, { useEffect, useState } from 'react'
import { Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import Button from '@mui/material/Button'
import orange from '@material-ui/core/colors/orange'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import api from '../../../utils/api'
import Snackbar from '@mui/material/Snackbar'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/features/login'
import MuiAlert from '@mui/material/Alert'
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Login = () => {
  const paperStyle = {padding: 20, height: '20%', width: 300, margin: '100px auto'}
  const btnstyle = { margin: '8px 0', display: 'fixed' }
  const textField = { margin: '15px 5px 5px 0' }
  const btnstylesocial = { margin: '10px 0', backgroundColor: 'transparent', color: '#FFC107' }
  const signupLink = { margin: '20px 0px 0px 0px' }

  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const theme = createTheme({
    palette: {
      neutral: {
        main: '#FFC107',
        contrastText: '#fff',
      },
    },
  })
  const initialValues = {
    email: email,
    password: password,
  }

  const validate = () => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      errors.email = "Email is required";
    } else if (!regex.test(email)) {
      errors.email = "Please enter a valid email";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 5) {
      errors.password = "Password too short";
    }
    return errors;
  };

  const handleSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)

    api.post('api/v1/user/login', {email,password})
      .then((res) => {

        if (res.status === 200) {

          window.location.replace('/');

          const { token } = res.data;
          
          localStorage.setItem("jwt", `${token}`);

          const dispatch = useDispatch();

          dispatch(setToken(token));

        } 
      }).catch(err =>
        setErrorMessage('Wrong email or password!')
      )
  }


  return (

    <Grid>
       <div>
        {open && <Snackbar open={errorMessage} autoHideDuration={6000} onClose={handleClose} >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }} >
            {errorMessage}
          </Alert>
        </Snackbar>}
      </div>

      <Paper elevation={5} style={paperStyle}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {(props) => (
            <Form >

              <Field as={TextField}
                id="email"
                name="email"
                label="Enter your email"
                variant="outlined"
                style={textField}
                data-testid="emailid"
                value={email}
                onChange= {(e)=> setEmail(e.target.value)}
                fullWidth
                error={props.errors.email && props.touched.email}
                helperText={<ErrorMessage data-testid="emailError" name="email" />}
                
              />
              <Field as={TextField}
                id="password"
                name="password"
                label="Enter your password"
                variant="outlined"
                type="password"
                style={textField}
                value={password}
                onChange= {(e)=> setPassword(e.target.value)}
                fullWidth
                error={props.errors.password && props.touched.password}
                helperText={<ErrorMessage data-testid="pswd" name="password" />}
              />
              <ThemeProvider theme={theme}>
                <Button
                  name="login"
                  type="submit"
                  color="neutral"
                  variant="contained"
                  style={btnstyle}
                  data-testid="Sign in"
                  fullWidth
                  disabled={props.isSubmitting}

                  onClick={handleClick}
                >
                  {props.isSubmitting ? 'Loading' : 'Sign In'}
                </Button>

              </ThemeProvider>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#" style={{ color: orange[400] }} underline="none">
            {' '}
            Forgot password ?{' '}
          </Link>
        </Typography>

        <Button type='submit' color='primary' variant="contained" style={btnstylesocial} startIcon={<GoogleIcon />} fullWidth>Sign in with Google</Button>
        <Button type='submit' color='primary' variant="contained" style={btnstylesocial} startIcon={<FacebookIcon />} fullWidth>Sign in with Facebook</Button>

        <Typography style={signupLink}>
          {' '}
          Don't have an account?
          <Link href="register" style={{ color: orange[400] }} underline="none">
            {' '}
            Sign Up{' '}
          </Link>
        </Typography>

      </Paper>
    </Grid>



  )
}

export default Login


