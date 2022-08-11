
import {types} from "../types"
import axios from "axios";


const url = "https://elite-bn-be.herokuapp.com/api/v1/user/logout"



export const logoutRequest=()=>dispatch=>{
    
    dispatch({type:types.LOGOUT_PENDING})
    return axios.get(url)
 .then(res=>{
        console.log(res)
        dispatch({
            type:types.LOGOUT_SUCCESSFUL,
            message: res.message
          });

          if (res){
            alert("Successful Logged out")
          }else{
            alert("please login")
          }
    })
    .catch(error=>{
        dispatch({
            type:types.LOGOUT_ERROR,
            error: error.message
          });
         alert("Opps sommething happened please try again later or login")
          
    })
}