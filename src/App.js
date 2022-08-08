import React from 'react'
import './styles/index.scss'
import { BrowserRouter as Router} from 'react-router-dom'
import ResponsiveAppBar from '../src/MenuBar/MenuBar'
import AllRoutes from './routes'
import Nav from './dammyNav'
import MenuBar from './MenuBar/MenuBar'
import { ToastContainer } from 'react-toastify';

function App() {


  return (
    <div>
     < ToastContainer />
      <Router>
          <MenuBar />
          <Nav />
        <AllRoutes />
      </Router>
    </div>
  )
}

export default App
