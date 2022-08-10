import { actions } from "@storybook/addon-actions";
import {types} from "../../actions/types"

const initialState={message:null ,pending:false, error:null}

export default function logout(state=initialState,action) {
    switch(action.type) {
        case types.LOGOUT_PENDING:
            return {
                ...state,
                pending:true}
       
          break;
        case types.LOGOUT_SUCCESSFUL:

        return {
            ...state,
            pending:false,
             message:action.message}
          break;
          case types.LOGOUT_ERROR:

        return {
            ...state,
            pending:false, 
            error:action.error}
          break;
        default:
            return state
        
      }

}