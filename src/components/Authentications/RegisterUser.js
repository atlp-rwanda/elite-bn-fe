import React, { useEffect, useState } from 'react'
import { Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import Button from '@mui/material/Button'
import orange from '@material-ui/core/colors/orange'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
// import Snackbar from '@mui/material/Snackbar'
// import Alert from '@mui/material/Alert'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../../utils/api'
import { setToken } from '../../redux/features/registerReducer'
import { ErrorAlert, InfoAlert, SuccessAlert, WarnAlert } from '../Notifications/toastAlert'
import { Stack } from '@mui/material'
import { alertActions } from '../../redux/features/toastAlert'

const Signup = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: '20%',
    width: 320,
  }
  const alertStyle = {
    position: 'fixed',
    zIndex: '2000',
    right: '3%',
    bottom: '30px',
    transition: 'all 300ms linear 0s',
  }
  const btnstyle = { margin: '8px 0', display: 'fixed' }
  const textField = { margin: '4px 0' }
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
    firstName: yup.string().min(3).required('Please enter your first name is required'),
    lastName: yup.string().min(3).required('Please enter your last name is required'),
    username: yup.string().min(3).required('Please enter your username is equired'),
    email: yup.string().required('Please enter a valid email'),
    password: yup
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/)
      .required(
        'Password must at least contain one uppercase & lowercase letter, number, special character and at least 8 characters'
      ),
  })
  const [open, setOpen] = useState(false)
  // const [errorMessage, setErrorMessage] = useState(null)
  const { warnMessage, infoMessage, errorMessage, successMessage } = useSelector(
    (state) => state.alert
  )

  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
    api
      .post('api/v1/user/register', values)
      .then((response) => {
        if (response.status === 200) {
          window.location.replace('/')
          const { token } = response.data

          localStorage.setItem('jwt', `${token}`)

          const dispatch = useDispatch()

          dispatch(setToken(token))
        }
      })
      .catch((err) => {
        const dispatch = useDispatch()
        // setErrorMessage(err.response.data['Error:'])
        dispatch(alertActions.error({ message: `${err.response.data['Error:']}` }))
        setInterval(() => {
          dispatch(alertActions.error({ message: null }))
        }, 15000)
      })
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '90vh' }}
    >
      <div>
        {open && (
          <Snackbar open={errorMessage} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          </Snackbar>
        )} */}
        <Stack sx={alertStyle} spacing={2}>
          {warnMessage && <WarnAlert />}
          {infoMessage && <InfoAlert />}
          {successMessage && <SuccessAlert />}
          {errorMessage && <ErrorAlert />}
        </Stack>
      </div>
      <Paper elevation={5} style={paperStyle}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {errorMessage && <Snackbar open={errorMessage} message={errorMessage} />}
              <Field
                as={TextField}
                id="firstName"
                name="firstName"
                label="Enter your First name"
                variant="outlined"
                style={textField}
                fullWidth
                error={props.errors.firstName && props.touched.firstName}
                helperText={<ErrorMessage name="firstName" />}
              />

              <Field
                as={TextField}
                id="lastName"
                name="lastName"
                label="Enter your Last name"
                variant="outlined"
                style={textField}
                fullWidth
                error={props.errors.lastName && props.touched.lastName}
                helperText={<ErrorMessage name="lastName" />}
              />

              <Field
                as={TextField}
                id="username"
                name="username"
                label="Enter your Username"
                variant="outlined"
                style={textField}
                fullWidth
                error={props.errors.username && props.touched.username}
                helperText={<ErrorMessage name="username" />}
              />

              <Field
                as={TextField}
                id="email"
                name="email"
                label="Enter your email"
                variant="outlined"
                style={textField}
                fullWidth
                error={props.errors.email && props.touched.email}
                helperText={<ErrorMessage name="email" />}
              />

              <Field
                as={TextField}
                id="password"
                name="password"
                label="Enter your password"
                variant="outlined"
                type="password"
                style={textField}
                fullWidth
                error={props.errors.password && props.touched.password}
                helperText={<ErrorMessage name="password" />}
              />
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  data-testid="Create account"
                  color="neutral"
                  variant="contained"
                  style={btnstyle}
                  disabled={props.isSubmitting}
                  fullWidth
                  onClick={handleClick}
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
          <Link href="/" style={{ color: orange[400] }} underline="none">
            {' '}
            Sign In{' '}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Signup
