import React from 'react'
import './styles/index.scss'
import Nav from './dammyNav'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './routes';
import { hot } from 'react-hot-loader/root'

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <AllRoutes />
      </Router>
    </div>
  )
}

export default App;
