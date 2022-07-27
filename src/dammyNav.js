import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="register">
            <li>Register</li>
          </Link>
          <Link to="login">
            <li>Login</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="count">
            <li>Counter</li>
          </Link>
          <Link to="theme">
            <li>Themes</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
