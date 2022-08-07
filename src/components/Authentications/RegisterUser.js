import React, { useEffect, useState } from 'react'
import { Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import Button from '@mui/material/Button'
import orange from '@material-ui/core/colors/orange'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const Signup = ({ handleChange }) => {
  const paperStyle = { padding: 20, height: '80vh', width: 469, margin: '50px auto' }
  const btnstyle = { margin: '20px 0' }
  const textField = { margin: '5px 0' }
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
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    username: yup.string().required('Required'),
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
              <Typography> First Name</Typography>
              <TextField
                id="outlined-basic"
                label="Enter your First name"
                variant="outlined"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="firstName" />}
              />
              <Typography> Last Name</Typography>
              <TextField
                id="outlined-basic"
                label="Enter your Last name"
                variant="outlined"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="lastName" />}
              />
              <Typography> Username</Typography>
              <TextField
                id="outlined-basic"
                label="Enter your Username"
                variant="outlined"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
              />
              <Typography> Email</Typography>
              <TextField
                id="outlined-basic"
                label="Enter your email"
                variant="outlined"
                style={textField}
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Typography> Password</Typography>
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
