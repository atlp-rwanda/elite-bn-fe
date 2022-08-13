import React, { useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import api  from '../../../utils/api.js'


const Logout=()=>{
  const navigate=useNavigate()

 
function handleLogout(){
  const jwt=localStorage.getItem("jwt")
  api.get('api/v1/user/logout',{headers:{jwt}})
    .then((res) => {
      localStorage.removeItem('jwt');
    
navigate('/login')

  })
    .catch(error=>{console.log(error)})
}
  
 
   

  
  handleLogout()
    }


export default Logout