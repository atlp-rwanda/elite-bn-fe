import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Authentications/login'
import RatingI from '../components/Rating/Rating';

function LoginView() {
  const navigate = useNavigate();
   useEffect(()=>{
    const isLoggedIn= localStorage.getItem("jwt");
isLoggedIn ? navigate('/') :'';

},[])

  return (
    <div>
      <Login />
<RatingI/>
    </div>
  )
}
export default LoginView
