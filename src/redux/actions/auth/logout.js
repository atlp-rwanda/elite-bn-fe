
import {types} from "../types"
import axios from "axios";

const url = "https://elite-bn-be.herokuapp.com/api/v1/user/logout"
// const route="api/v1/user/logout"


export const logoutRequest=()=>dispatch=>{
    dispatch({type:types.LOGOUT_PENDING})
    return axios.get(url)
 .then(res=>{
        console.log(res)
        
    })
    .catch(error=>{
        console.log(error)
    })
}