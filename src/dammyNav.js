import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'

import Logout from '../src/components/auth/auth.logout'

export default function Nav() {
  const location = useLocation()
  const path = location.pathname
  return (
    <div style={{ display: path === '/DashboardLayout' && 'none' }}>
      <nav>
        <ul>
        

        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
