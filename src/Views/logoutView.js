import React from 'react'
import {  Button } from '@material-ui/core'
const LogoutView=()=>{

    const btnstyle={margin:'8px 0' , width:'30px'}
    return(
        <Grid>
           
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Logout</Button>
              
        </Grid>
    )
}

export default LogoutView
