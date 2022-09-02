import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Signup from '../components/Authentications/RegisterUser'
import MenuBar from '../MenuBar/MenuBar'

import Footer from '../components/Home/footer'

function RegisterView() {
  const navigate = useNavigate()
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('jwt')
    isLoggedIn ? navigate('/') : ''
  }, [])
  return (
    <div>
      <MenuBar />
      <Signup />
      <Footer />
    </div>
  )
}
export default RegisterView
