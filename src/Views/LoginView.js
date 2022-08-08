import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{

    const paperStyle={padding :20,height:'50vh',width:400, margin:"20px auto"}
    const btnstyle={margin:'8px 0', background: '#FFC107'}
    const btnstylesocial={margin:'8px 0', background: 'transparent', color: '#FFC107'}
    const txtcolor={color:'#FFC107'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <TextField label='email' placeholder='Enter your email' fullWidth required/>
                <TextField label='password' placeholder='Enter your password' type='password' fullWidth required/>
              
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" style={txtcolor}>
                        Forgot password ?
                </Link>

                <Button type='submit' color='primary' variant="contained" style={btnstylesocial} fullWidth>Sign in with Google</Button>
                <Button type='submit' color='primary' variant="contained" style={btnstylesocial} fullWidth>Sign in with Facebook</Button>
                

                </Typography>
                <Typography > Don't have an account?
                     <Link href="#" style={txtcolor}>
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login

