
import {types} from "../types"
import axios from "axios";

const url = "https://elite-bn-be.herokuapp.com/api/v1/user/logout"
// const route="api/v1/user/logout"


export const logoutRequest=(navigate)=>dispatch=>{
    dispatch({type:types.LOGOUT_PENDING})
    return axios.get(url)
 .then(res=>{
        console.log(res)
        dispatch({
            type:types.LOGOUT_SUCCESSFUL,
            message: res.message
          });
          window.location.href = "/home";
    })
    .catch(error=>{
        dispatch({
            type:types.LOGOUT_ERROR,
            error: error.message
          })
          window.location.href = "/login";
    })
}