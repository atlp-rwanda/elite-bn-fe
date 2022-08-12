import { Navigate } from 'react-router-dom'
import React from 'react'
import jwt_decode from 'jwt-decode'
import Nav from '../src/dammyNav';
import { useDispatch, useSelector } from 'react-redux';
import {authActions} from '../src/redux/features/login'


const PrivateRoutes = () => {
    const dispatch = useDispatch();
  function get(n) {
    var half = location.search.split(n + '=')[1];
    return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null;
}
    let token = get('token');
    token ? localStorage.setItem("jwt", `${token}`):'';

    const isLoggedIn= localStorage.getItem("jwt");
    let currentDate = new Date();

      if(isLoggedIn){
        let decodedToken = jwt_decode(isLoggedIn);
        
        if(decodedToken.exp * 1000 > currentDate.getTime()){
            // dispatch(authActions.login({
            //     isLoggedIn:true,
            // }))
            // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
            // console.log('is loggedin', isLoggedIn)
            return  <Nav/>
        }
      }else{
        
      return  <Navigate to="/login" />
      }
    
}

export default PrivateRoutes