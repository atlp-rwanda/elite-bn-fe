import { Navigate } from 'react-router-dom'
import React from 'react'
import jwt_decode from 'jwt-decode'
import Nav from '../src/dammyNav'
import { useDispatch, useSelector } from 'react-redux'

const PrivateRoutes = () => {
  const dispatch = useDispatch()
  function get(n) {
    var half = location.search.split(n + '=')[1]
    return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null
  }
  let token = get('token')
  token ? localStorage.setItem('jwt', `${token}`) : ''

  const isLoggedIn = localStorage.getItem('jwt')
  let currentDate = new Date()

  if (isLoggedIn) {
    let decodedToken = jwt_decode(isLoggedIn)

    if (decodedToken.exp * 1000 > currentDate.getTime()) {
      return <Nav />
    }
  } else {
    return <Navigate to="/" />
  }
}

export default PrivateRoutes
