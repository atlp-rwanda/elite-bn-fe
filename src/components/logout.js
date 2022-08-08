import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'

const Logout=()=>{

    const btnstyle={margin:'8px 0' , width:'30px'}
    return(
        <Grid>
           
                <Button type='submit' color='primary' variant="contained" style={btnstyle}  omfullWidth>Logout</Button>
              
        </Grid>
    )
}

export default Logout
