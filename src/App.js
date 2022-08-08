import React from 'react'
import './styles/index.scss'
import Nav from './dammyNav'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './routes'
import Logout from './Views/logoutView';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <AllRoutes />
      </Router>
      <Logout />
    </div>
  )
}

export default App
