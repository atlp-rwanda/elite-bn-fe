import React from 'react'
import './styles/index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { TextField } from '@material-ui/core'
import AllRoutes from './routes'
import Nav from './dammyNav'
import MenuBar from './MenuBar/MenuBar'

function App() {
  return (
    <div>
      <Router>
        <MenuBar />
        <Nav />
        <AllRoutes />
      </Router>
    </div>
  )
}

export default App
