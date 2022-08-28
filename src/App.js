import React from 'react'
import './styles/index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './routes'
import ChatComponent from './components/chat/chat';


function App() {
  return (
    <div style={{height: '100vh'}}>
      <Router>
        <AllRoutes />
      </Router>
     
      {/* <Snackbar
       open={true}
       anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
       message="I love snacks"
       >
             <p>Helooo from this snackbar</p> 
          </Snackbar> */}
 
    </div>
  )
}

export default App
