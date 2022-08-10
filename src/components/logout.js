import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import { logoutRequest } from '../redux/actions/auth/logout'


const Logout=()=>{
    const dispatch=useDispatch()
function handleLogout(){
dispatch(logoutRequest())
    console.log("clicked logout")
}
    const btnstyle={margin:'8px 0' , width:'30px'}
    return(
        <Grid>
           
                <Button type='submit' color='primary' variant="contained" style={btnstyle}  onClick={handleLogout} omfullWidth>Logout</Button>
              
        </Grid>
    )
}

export default Logout
