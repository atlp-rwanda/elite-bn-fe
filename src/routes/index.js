import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Views/LoginView'
import HomeView from '../Views/HomeView'
import CounterView from '../Views/CounterView'
import ThemeView from '../Views/ThemeView'
import RegisterView from '../Views/RegisterView'
import DashboardView from '../Views/Dashboard'
import UserRoleView from '../Views/userRolesView'
import PrivateRoutes from '../../utils/privateRoute'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<HomeView />} />
          <Route path="count" element={<CounterView />} />
          <Route path="theme" element={<ThemeView />} />
          <Route path="dashboard" element={<DashboardView />} />
          <Route path="roles" element={<UserRoleView />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterView />} />

      </Routes>
    </div>
  )
}
export default AllRoutes
