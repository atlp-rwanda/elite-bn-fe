import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Authentications/login'
import Chat from '../components/chat/chat';

function LoginView() {
  const navigate = useNavigate();
   useEffect(()=>{
    const isLoggedIn= localStorage.getItem("jwt");
isLoggedIn ? navigate('/') :'';

},[])

  return (
    <div>
      <Login />
      {/* <Chat/> */}
    </div>
  )
}
export default LoginView
