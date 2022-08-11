import React from 'react'
import './styles/index.scss'
import Nav from './dammyNav'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './routes'
import Logout from './components/logout';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <AllRoutes />
        <Logout />
      </Router>
     
    </div>
  )
}

export default App
