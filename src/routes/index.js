
import React from "react";
import Login from "../Views/LoginView";
import HomeView from "../Views/HomeView";

import { Route, Routes } from "react-router-dom";


function AllRoutes(){
    return(
        <div>
          <Routes>
           <Route path='/' element={<HomeView />} /> 
          <Route path='login' element={ <Login />}/>
          </Routes>
        </div>
    )
}
export default AllRoutes
