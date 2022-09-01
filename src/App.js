import React from 'react'
import './styles/index.scss'
import { BrowserRouter as Router} from 'react-router-dom'
import ResponsiveAppBar from '../src/MenuBar/MenuBar'
import AllRoutes from './routes'
import MenuBar from './MenuBar/MenuBar'

function App() {
  return (
    <div>
      <Router>
        <MenuBar />
        <AllRoutes />
      </Router>
    </div>
  )
}

export default App
