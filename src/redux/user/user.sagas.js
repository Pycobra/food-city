import { takeLatest, all, call, put } from "redux-saga/effects"
import UserActionTypes from "./user.types"
import { 
    ApiPost_account_login, ApiPost_account_signout,
    ApiPost_create_account, 
    get_account_session, ApiPost_address,
    ApiPost_current_user_address,
} from "../../utils/api/account-api.utils"
import {  
    signOutFailure, signOutSuccess,
    signUpFailure, signUpSuccess,
    AlertMessage, addressSubmitFailure,
    emailSignInFailure, emailSignInSuccess,
    fetchCurrentUserAddressSuccess, fetchCurrentUserAddressFailure
} from "./user.action"
import decode from 'jwt-decode'





class CustomError extends Error{
    constructor(msg){
        super();
        this.name = "";
        this.message= msg;
    }
}
export function* SignUp({payload: {email, user_name, password, password2}}) {
    try{
        const response = yield ApiPost_create_account({email, user_name, password, password2})
        if (response.status === 201){
            yield put(signUpSuccess(response))
            yield put(AlertMessage({
                type: 'success', 
                content: "You have successfully registered an account"
            }))
        } else if (response.status === 400) {
            throw new CustomError(response.data)
        }
    } catch (error){
        yield put(signUpFailure(error.message))
    }
}

export function* SignOut() {
    try{
        yield ApiPost_account_signout();
        yield put(signOutSuccess())
    } catch (error){
       yield put(signOutFailure(error.message))
    }
}
export function* SignInWithEmail({payload}) {
    try{
        const user =  yield ApiPost_account_login(payload);
        const userCredentials = decode(user.access)
        yield put(emailSignInSuccess(userCredentials))
        yield put(AlertMessage({
            type: 'success', 
            content: `${userCredentials.user_name} successfully loged in`
        }))
    } catch (error){
        // real api err message = 'No active account found with the given credentials'
        // while error.message is 'Invalid token'
        yield put(emailSignInFailure({
            type: 'failed', 
            content: "Wrong username or paassword"
        }))
    }
}

export function* isUserAuthenticated() {
    try{
        const userAuth =  yield get_account_session();
        const userCredentials = decode(userAuth)
        yield put(emailSignInSuccess(userCredentials))
    } catch (error){
        console.log(error.message)
        yield put(emailSignInFailure({
            type: 'failed', 
            content: null
        }))
    }
}

export function* postAddress({payload}) {
    try{
        const response = yield ApiPost_address(payload);
        if (response.status= 201){
            yield put(AlertMessage({
                type: 'success', 
                content: 'address successfully loged in Added'
            }))
        } else if (response.status === 400) {
            throw new CustomError(response.data)
        }
    } catch (error){
        yield put(addressSubmitFailure(error.message))
    }
}
export function* getCurrentUserAddress({payload}) {
    try{
        const response = yield ApiPost_current_user_address(payload);
        if (response.status= 201){
            yield put(fetchCurrentUserAddressSuccess(response))
        } else if (response.status === 400) {
            throw new CustomError(response.data)
        }
    } catch (error){
        yield put(fetchCurrentUserAddressFailure({
            type: 'failed', 
            content: error.message
        }))
    }
}



export function* onIsUserAuthenticated() {
    yield takeLatest(UserActionTypes.USER_IS_AUTHENTICATED, 
        isUserAuthenticated)
}
export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, 
        SignInWithEmail)
}
export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, 
        SignOut)
}
export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, 
        SignUp)
}
export function* onFetchCurrentUserAddress() {
    yield takeLatest(UserActionTypes.FETCH_ADDRESS_START, 
        getCurrentUserAddress)
}
export function* onAddressSubmiStart() {
    yield takeLatest(UserActionTypes.ADDRESS_SUBMIT_START, 
        postAddress)
}

export function* userSagas() {
    yield all([
        call(onEmailSignInStart), 
        call(onIsUserAuthenticated), 
        call(onSignOutStart), 
        call(onSignUpStart),
        call(onAddressSubmiStart),
        call(onFetchCurrentUserAddress),
        
    ])
}

