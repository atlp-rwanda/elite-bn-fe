import React, { useCallback } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import { logoutRequest } from '../redux/actions/auth/logout'
import { useNavigate } from 'react-router-dom'



const Logout=()=>{
    
    const dispatch= useDispatch()
    const navigate=useNavigate()
function handleLogout(){

dispatch(logoutRequest(navigate))
    console.log("clicked logout")
    navigate("/HomeView") 
   
}
    const btnstyle={margin:'8px 0' , width:'30px'}
    return(
        <Grid>
           
                <Button type='submit' color='primary' variant="contained" style={btnstyle}  onClick={handleLogout} omfullWidth>Logout</Button>
              
        </Grid>
    )
   
}

export default Logout
