import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'

import Logout from '../src/components/auth/auth.logout'

export default function Nav() {
  const location = useLocation()
  const path = location.pathname
  return (
    <div style={{ display: path === '/dashboard' && 'none' }}>
       <div style={{display: path === "/profile" && "none" }}>
      <nav>
        <ul>
        

        </ul>
      </nav>
      <Outlet />
    </div>
    </div>
  )
}
