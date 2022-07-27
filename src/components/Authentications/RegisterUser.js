import React, { useEffect, useState } from 'react'
import { Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import Button from '@mui/material/Button'
import orange from '@material-ui/core/colors/orange'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
const url = 'https://elite-bn-be.herokuapp.com/api-docs/#/Users/post_api_v1_user_register'

const Signup = ({ handleChange }) => {
  const paperStyle = { padding: 20, height: '80vh', width: 469, margin: '50px auto' }
  const btnstyle = { margin: '20px 0' }
  const textField = { margin: '1px 0' }
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#FFC107',
        contrastText: '#fff',
      },
    },
  })
  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  }
  const validationSchema = yup.object().shape({
    firstName: yup.string().required('Please enter your first name is required'),
    lastName: yup.string().required('Please enter your last name is required'),
    username: yup.string().required('Please enter your username is equired'),
    email: yup.string().email('Please enter a valid email').required('Please Email is required'),
    password: yup
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/,
        'Password must at least contain one uppercase & lowercase letter, number, special character and at least 8 characters'
      )
      .required(' Please enter your password'),
  })
   const onSubmit = (values, props ) => {
     console.log(values)
     setTimeout(() => {
       props.resetForm()
       props.setSubmitting(false)
     }, 2000)


      axios.post(url, values)
      .then((res) => {
        if (res.status === 201) {
          window.location.replace(unverified);
        }
      })
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
              <Typography> First Name</Typography>
              <Field as={TextField}extField
                id="firstName"
                name="firstName"
                label="Enter your First name"
                variant="outlined"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="firstName">
                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>}
              />
              <Typography> Last Name</Typography>
              <Field as={TextField}
                id="lastName"
                name="lastName"
                label="Enter your Last name"
                variant="outlined"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="lastName">
                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>}
              />
              <Typography> Username</Typography>
              <Field as={TextField}
                id="username"
                name="username"
                label="Enter your Username"
                variant="outlined"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="username">
                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                </ErrorMessage>}
              />
              <Typography> Email</Typography>
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
              <Typography> Password</Typography>
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
                  {props.isSubmitting ? 'Loading' : 'Create account'}
                </Button>
              </ThemeProvider>
            </Form>
          )}
        </Formik>
        <Typography>
          {' '}
          Do you have an account ?
          <Link href="#" style={{ color: orange[400] }} underline="none">
            {' '}
            Sign In{' '}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Signup
