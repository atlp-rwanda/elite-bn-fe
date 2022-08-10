import React from 'react'
import { useState } from 'react'
import { Grid, Paper, TextField, Typography } from '@material-ui/core'
import Button from '@mui/material/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import { Alert } from '@mui/material'
import api from '../../../utils/api'
import * as yup from 'yup'

import { useNavigate } from 'react-router-dom'

export const ResetPassword = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [confirm_password, setconfirmpassword] = useState('')

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

  const handleClick = () => {
    setOpen(true)
  }

  const initialValues = {
    password: password,
    confirm_password: confirm_password,
  }

  const validate = () => {
    let errors = {}
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/
    if (!password) {
      errors.password = 'Password is required'
    } else if (!regex.test(password)) {
      errors.password =
        'Password must at least contain one uppercase & lowercase letter, number, special character and at least 8 characters'
    }
    if (!confirm_password) {
      errors.confirm_password = ' confirm password is required'
    } else if (password !== confirm_password) {
      errors.password = 'password do not match'
    }
    return errors
  }

  const handleSubmit = async () => {
    function get(n) {
      var half = location.search.split(n + '=')[1]
      return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null
    }
    const token = get('token')

    try {
      await api.put(`api/v1/user/resetPassword?token=${token}`, { password, confirm_password })

      setMsg(<Alert> Password reset successfully</Alert>)

      setTimeout(()=>{
        navigate('/login',{replace :true})
      },2000)
        
      setPassword('')
      setconfirmpassword('')
      setError('')
      
    } catch (err) {
      err.response.data.Error
        ? setError(<Alert severity="error">{`${err.response.data.Error}`}</Alert>)
        : setError(<Alert severity="error"> Expired link or invalid</Alert>)
      setMsg('')
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
      <Paper elevation={5} style={paperStyle}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
          {(props) => (
            <Form autoComplete="off" data-testid="form">
              <Typography variant="h6">Add a new Password</Typography>

              <Field
                as={TextField}
                id="password"
                name="password"
                label="Enter Password"
                type="password"
                variant="outlined"
                value={password}
                style={textfield}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                error={props.errors.password && props.touched.password}
                helperText={<ErrorMessage data-testid="pswd" name="password" />}
              />
              <Field
                as={TextField}
                id="password"
                name="password"
                label="Confirm Password"
                type="password"
                inputProps={{ 'data-testid': 'content-input' }}
                variant="outlined"
                value={confirm_password}
                style={textfield}
                onChange={(e) => setconfirmpassword(e.target.value)}
                fullWidth
                error={props.errors.confirm_password && props.touched.confirm_password}
                helperText={<ErrorMessage data-testid="cpswd" name="confirm_password" />}
              />

              {error && <div className="styles.error-msg">{error}</div>}
              {msg && <div className="styles.success-msg">{msg}</div>}
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  color="neutral"
                  variant="contained"
                  data-testid="reset"
                  style={btnstyle}
                  disabled={props.isSubmitting}
                  fullWidth
                  onClick={handleClick}
                >
                  {props.isSubmitting ? 'Loading' : 'reset password'}
                </Button>
              </ThemeProvider>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}
