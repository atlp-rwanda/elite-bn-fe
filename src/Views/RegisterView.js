import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Signup from '../components/Authentications/RegisterUser'

function RegisterView() {
  const navigate = useNavigate()
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('jwt')
    isLoggedIn ? navigate('/') : ''
  }, [])
  return (
    <div>
      <Signup />
    </div>
  )
}
export default RegisterView
