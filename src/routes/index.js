import React from "react";
import Login from "../Views/LoginView";
import HomeView from "../Views/HomeView";
import CounterView from "../Views/CounterView";
import RegisterView from "../Views/RegisterView";

import { Route, Routes } from "react-router-dom";


function AllRoutes(){
    return(
        <div>
          <Routes>
            <Route path='/' element={<HomeView />} /> 
            <Route path='register' element={<RegisterView />}/>
            <Route path='login' element={ <Login />}/>
            <Route path='count' element={ <CounterView />}/>
          </Routes>
        </div>
    )
}
export default AllRoutes
