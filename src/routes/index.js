import React from 'react'
import Login from '../Views/LoginView'
import HomeView from '../Views/HomeView'
import CounterView from '../Views/CounterView'

import { Route, Routes } from 'react-router-dom'

function AllRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="login" element={<Login />} />
        <Route path="count" element={<CounterView />} />
      </Routes>
    
  )
}
export default AllRoutes
