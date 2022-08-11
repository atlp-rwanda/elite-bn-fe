import React, {useEffect} from 'react'
import '../styles/index.scss'
import Login from '../Views/LoginView'
import HomeView from '../Views/HomeView'
import CounterView from '../Views/CounterView'

import { Route, Routes , BrowserRouter} from 'react-router-dom'



function App() {
  return (
  <BrowserRouter>
   <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="login" element={<Login />} />
        <Route path="count" element={<CounterView />} />
      </Routes>
  </BrowserRouter>
 


      )
}

export default App
