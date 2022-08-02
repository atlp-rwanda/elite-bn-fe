import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="login">
            <li>Login</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="count">
            <li>Counter</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
