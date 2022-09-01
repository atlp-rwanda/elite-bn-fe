
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Authentications/login'
// import Feedback from '../components/feedback/Feedback';

function LoginView() {
  const navigate = useNavigate()
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('jwt')
    isLoggedIn ? navigate('/') : ''
    const jwtToken = localStorage.getItem('accessToken')
    jwtToken ? navigate('/') : ''
  }, [])
  return (
    <div>
      <Login />
      {/* <Feedback/> */}
    </div>
  )
}
export default LoginView
