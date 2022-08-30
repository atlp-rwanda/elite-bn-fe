import { Navigate } from 'react-router-dom'
import React from 'react'
import jwt_decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../src/dammyNav'
// import Nav from '../src/MenuBar/MenuBar'

const PrivateRoutes = () => {
  const dispatch = useDispatch()
  function get(n) {
    const half = location.search.split(`${n}=`)[1]
    return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null
  }
  const token = get('token')
  const accessToken = get('accessToken')
  const refleshToken = get('refleshToken')
  token ? localStorage.setItem('jwt', `${token}`) : ''

  const isLoggedIn = localStorage.getItem('jwt')
  const currentDate = new Date()

  if (isLoggedIn) {
    const decodedToken = jwt_decode(isLoggedIn)

    if (decodedToken.exp * 1000 > currentDate.getTime()) {
      return <Nav />
    }
  } else if (accessToken) {
    localStorage.setItem('accessToken', `${accessToken}`)
    localStorage.setItem('refleshToken', `${refleshToken}`)

    const jwtToken = localStorage.getItem('accessToken')

    if (jwtToken) {
      const decodedToken = jwt_decode(jwtToken)

      if (decodedToken.exp * 1000 > currentDate.getTime()) {
        return <Nav />
      }
    }
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoutes
