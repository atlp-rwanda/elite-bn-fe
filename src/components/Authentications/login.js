import React, { useEffect, useState } from 'react'
import { Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import Button from '@mui/material/Button'
import orange from '@material-ui/core/colors/orange'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const Login = ({ handleChange }) => {
  const paperStyle = { padding: 20, height: '54vh', width: 469, margin: '50px auto'}
  const btnstyle = { margin: '20px 0' }
  const textField = { margin: '15px 5px 5px 0' }
  const btnstylesocial ={margin:'10px 0', backgroundColor: 'transparent', color: '#FFC107'}
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
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/,
        'password must at least contain one uppercase & lowercase letter, number, special character and at least 8 characters'
      )
      .required('Enter your password'),
  })
  const onSubmit = (values, props) => {
    console.log(values)
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {/* <Typography> Email</Typography> */}
              <TextField
                id="outlined-basic"
                label="Enter your email"
                variant="outlined"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              {/* <Typography> Password</Typography> */}
              <TextField
                id="outlined-basic"
                label="Enter your password"
                variant="outlined"
                type="password"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
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

        <Typography>
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
