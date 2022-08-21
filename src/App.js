import React from 'react'
import './styles/index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './routes'
function App() {
  return (
    <div>
      <Router>
        <AllRoutes />
      </Router>
    </div>
  )
}

export default App
