import React from 'react'
import Login from '../Views/LoginView'
import HomeView from '../Views/HomeView'
import CounterView from '../Views/CounterView'
import { ForgotPassword } from '../Views/Password/ForgotPasswordView'

import { Route, Routes } from 'react-router-dom'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="login" element={<Login />} />
        <Route path="count" element={<CounterView />} />
        <Route path ="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}
export default AllRoutes
