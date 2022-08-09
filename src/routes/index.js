import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Views/LoginView'
import HomeView from '../Views/HomeView'
import CounterView from '../Views/CounterView'
import ThemeView from '../Views/ThemeView'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="login" element={<Login />} />
        <Route path="count" element={<CounterView />} />
        <Route path="theme" element={<ThemeView />} />
      </Routes>
    </div>
  )
}
export default AllRoutes
