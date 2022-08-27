import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Authentications/login'

function LoginView() {
  const navigate = useNavigate();
   useEffect(()=>{
    const isLoggedIn= localStorage.getItem("jwt");
isLoggedIn ? navigate('/') :'';

},[])

  return (
    <div>
      <Login />
    </div>
  )
}
export default LoginView
