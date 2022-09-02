import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Profiles from '../components/profile/profiles'

function profileView() {
  const navigate = useNavigate()
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('jwt')
    isLoggedIn ? navigate('/profile') : ''
  }, [])
  return (
    <div>
      <Profiles />
    </div>
  )
}
export default profileView
