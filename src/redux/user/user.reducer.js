import UserActionTypes from "./user.types"
import { SortErrorMessage } from './utils'

const INITIAL_STATE = {
    currentUser: null,
    alertMessage: null,
    errorMessage: null,
    isFetching: false,
    curren_user_address: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.EMAIL_SIGN_IN_START:
        // case UserActionTypes.GOOGLE_SIGN_IN_START:
        case UserActionTypes.SIGN_UP_START:
        case UserActionTypes.SIGN_OUT_START:
            return{
                ...state,
                isFetching: true,
                errorMessage: null,
                alertMessage: null,
                currentUser: null,
            }
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
        // case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_UP_SUCCESS:
            return{
                ...state,
                isFetching: false,
                currentUser: action.payload,
            }
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        // case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.ADDRESS_SUBMIT_FAILURE:
        case UserActionTypes.FETCH_ADDRESS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload.type!=='failed' 
                            ? SortErrorMessage(action.payload) 
                            : action.payload,
            }
        case UserActionTypes.ADDRESS_SUBMIT_START:
            return{
                ...state,
                isFetching: true,
                errorMessage: null,
                alertMessage: null,
            }
        case UserActionTypes.FETCH_ADDRESS_START:
            return{
                ...state,
                isFetching: true,
                curren_user_address: null,
                errorMessage: null,
                alertMessage: null,
            }
        case UserActionTypes.ADDRESS_SUBMIT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                curren_user_address: null,
                errorMessage: null,
                alertMessage: action.payload,
            }
        case UserActionTypes.ALERT_MESSAGE:
            return{
                ...state,
                isFetching: false,
                alertMessage: action.payload,
            }
        case UserActionTypes.FETCH_ADDRESS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                curren_user_address: action.payload,

            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                isFetching: false,
            }
        default:
            return state
    }
}
 
export default userReducer;