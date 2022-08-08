import React from 'react'
import './styles/index.scss'
import Nav from './dammyNav'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './routes';
import Login from './components/login';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <AllRoutes />
        <Login />
      </Router>
    </div>
  )
}

export default App;
