import React, { useEffect, useState } from 'react'
import { Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import Button from '@mui/material/Button'
import orange from '@material-ui/core/colors/orange'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import sweerAlt from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
const API_URL = 'https://elite-bn-be.herokuapp.com/api/v1/user/login'




const Login = ({ handleChange }) => {
    const navigate= useNavigate()
    const paperStyle = { padding: 20, height: '54vh', width: 469, margin: '50px auto'}
    const btnstyle = { margin: '8px 0', display:'fixed' }
    const textField = { margin: '15px 5px 5px 0' }
    const btnstylesocial ={margin:'10px 0', backgroundColor: 'transparent', color: '#FFC107'}
    const signupLink = {margin: '20px 0px 0px 0px'}

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#FFC107',
        contrastText: '#fff',
      },
    },
  })
  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Please Email is required'),
    password: yup
      .string().required(' Please enter your password'),
  })

  const handleSubmit = (values, props ) => {
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)

     axios.post(API_URL, values)
     .then((res) => {
       if (res.status === 200) {

        sweerAlt.fire(`Hey`, 'Welcome to Barefoot Nomad', 'success');
        navigate('/')
       }else{
        sweerAlt.fire('Oops...', `${err.response.data.message}`, 'error');
       }
     }).catch(err=>sweerAlt.fire('Oops...', `${err.response.data.message}`, 'error'))
 }

 
  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form >
              <Field as={TextField}
                id="email"
                name="email"
                label="Enter your email"
                variant="outlined"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="email">
                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>}
              />
              <Field as={TextField}
                id="password"
                name="password"
                label="Enter your password"
                variant="outlined"
                type="password"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="password">
                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>}
              />
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  color="neutral"
                  variant="contained"
                  style={btnstyle}
                  disabled={props.isSubmitting}
                  fullWidth
                >
                {props.isSubmitting ? 'Loading' : 'SIGN IN'}

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
        <Button type='submit' color='primary' variant="contained" style={btnstylesocial} startIcon={<FacebookIcon />}  fullWidth>Sign in with Facebook</Button>
        
        <Typography style={signupLink}>
           {' '}
           Don't have an account?
           <Link href="#" style={{ color: orange[400] }} underline="none">
             {' '}
             Sign Up{' '}
           </Link>
         </Typography>
      </Paper>
    </Grid>
  )
}

export default Login

