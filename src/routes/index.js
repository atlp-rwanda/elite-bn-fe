import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Views/LoginView'
import HomeView from '../Views/HomeView'
import CounterView from '../Views/CounterView'
import ThemeView from '../Views/ThemeView'
import { ForgotPassword } from '../components/password/ForgotPassword'
import { ResetPassword } from '../components/password/ResetPassword'

import RegisterView from '../Views/RegisterView'
import DashboardView from '../Views/Dashboard'
import PrivateRoutes from '../../utils/privateRoute'
import Logout from '../components/auth/auth.logout'

import Profiles from '../components/profile/profiles'

import RequestView from '../Views/RequestView'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="count" element={<CounterView />} />
          <Route path="theme" element={<ThemeView />} />
          <Route path="dashboard" element={<DashboardView />} />
          <Route path="requests" element={<RequestView/>} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterView />} />
        <Route exact path="/" element={<HomeView />} />
        <Route exact path="logout" element={<Logout/>} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />

        <Route path="logout" element={<Logout/>} />
      
        <Route path="profile" element={<Profiles />} />
      </Routes>
    </div>
  )
}
export default AllRoutes