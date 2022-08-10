import React from 'react'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Grid, Paper, TextField, Typography } from '@material-ui/core'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Alert } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import api from '../../../utils/api'
import * as yup from 'yup'
import axios from 'axios'

export const ForgotPassword = () => {
  const paperStyle = { padding: 20, height: '20%', width: 300 }
  const textfield = { margin: '4px 0' }
  const btnstyle = { margin: '8px 0', display: 'fixed' }

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
  }
  const validate = () => {
    let errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!email) {
      errors.email = 'Email is required'
    } else if (!regex.test(email)) {
      errors.email = 'Please enter a valid email'
    }
    return errors
  }

  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const [Message, setMessage] = useState(null)

  const handleClick = () => {
    setOpen(true)
  }

  const handleSubmit = async () => {
    try {
      await api.post('api/v1/user/forgotPassword', { email })

      setMsg(<Alert severity="success">Check your Email to reset your password</Alert>)
      setError('')
      setEmail('')
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(<Alert severity="error">{`${error.response.data.error}`}</Alert>)
        setMsg('')
      }
    }
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
          <Snackbar open={Message} autoHideDuration={100}>
            <Alert severity="error" sx={{ width: '100%' }}>
              {Message}
            </Alert>
          </Snackbar>
        )}
      </div>
      <Paper elevation={5} style={paperStyle} sx={{ border: 'none' }}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
          {(props) => (
            <Form autoComplete="off" data-testid="form">
              <Typography variant="h6">User Email Address</Typography>

              <Field
                as={TextField}
                id="email"
                label="Enter your email"
                name="email"
                variant="outlined"
                value={email}
                style={textfield}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                error={props.errors.email && props.touched.email}
                helperText={<ErrorMessage data-testid="emailError" name="email" />}
              />
              {error && <div className="styles.error-msg">{error}</div>}
              {msg && <div className="styles.success-msg">{msg}</div>}

              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  color="neutral"
                  variant="contained"
                  data-testid="submit"
                  style={btnstyle}
                  disabled={props.isSubmitting}
                  fullWidth
                  onClick={handleClick}
                >
                  {props.isSubmitting ? 'Loading' : 'submit'}
                </Button>
              </ThemeProvider>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}
