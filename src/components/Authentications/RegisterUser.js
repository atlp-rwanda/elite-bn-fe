import React from 'react'
import { Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import Button from '@mui/material/Button'
import orange from '@material-ui/core/colors/orange'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Signup = () => {
  const paperStyle = { padding: 20, height: '80vh', width: 469, margin: '50px auto' }
  const btnstyle = { margin: '30px 0' }
  const textField = { margin: '10px 0' }
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#FFC107',
        contrastText: '#fff',
      },
    },
  })

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Typography> First Name</Typography>
        <TextField
          id="outlined-basic"
          label="Enter your First name"
          variant="outlined"
          style={textField}
          fullWidth
          required
        />
        <Typography> Last Name</Typography>
        <TextField
          id="outlined-basic"
          label="Enter your Last name"
          variant="outlined"
          style={textField}
          fullWidth
          required
        />
        <Typography> Username</Typography>
        <TextField
          id="outlined-basic"
          label="Enter your Username"
          variant="outlined"
          style={textField}
          fullWidth
          required
        />
        <Typography> Email</Typography>
        <TextField
          id="outlined-basic"
          label="Enter your email"
          variant="outlined"
          style={textField}
          fullWidth
          required
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
        />
        <ThemeProvider theme={theme}>
          <Button type="submit" color="neutral" variant="contained" style={btnstyle} fullWidth>
            Create an account
          </Button>
        </ThemeProvider>

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
