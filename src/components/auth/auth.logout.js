import React, { useCallback, useState,useEffect } from 'react'
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
  }).catch(error=>{console.log(error)})
}
useEffect(() => {
handleLogout()
}, [])
return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh'
  }}>
    <p>Logging out!!!</p>
    </div>
)
}
export default Logout
