import React from 'react'
import Login from '../Views/LoginView'
import HomeView from '../Views/HomeView'
import CounterView from '../Views/CounterView'
import Logout from '../components/logout'

import { Route, Routes } from 'react-router-dom'

function AllRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="login" element={<Login />} />
        <Route path="count" element={<CounterView />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    
  )
}
export default AllRoutes
