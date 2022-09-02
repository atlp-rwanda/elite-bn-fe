import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Authentications/login'
import MenuBar from '../MenuBar/MenuBar'

import Footer from '../components/Home/footer'

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
      <MenuBar />
      <Login />
      <Footer />
    </div>
  )
}
export default LoginView
