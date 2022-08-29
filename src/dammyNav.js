import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()
  const path = location.pathname
  return (
    <div style={{ display: path === '/dashboard' && 'none' }}>
      <nav>
        {/* <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="count">
            <li>Counter</li>
          </Link>
          <Link to="theme">
            <li>Themes</li>
          </Link>
          <Link to="register">
            <li>Register</li>
          </Link>
        </ul> */}
      </nav>
      <Outlet />
    </div>
  )
}
