import UserActionTypes from "./user.types"


export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
export const fetchAllUsersStart = () => ({
    type: UserActionTypes.FETCH_ALL_USERS_START
})
export const fetchAllUsersSuccess = (data) => ({
    type: UserActionTypes.FETCH_ALL_USERS_SUCCESS,
    payload: data
})
export const fetchAllUsersFailure = errorMessage => ({
    type: UserActionTypes.FETCH_ALL_USERS_FAILURE,
    payload: errorMessage
})
export const addressSubmitStart = data => ({
    type: UserActionTypes.ADDRESS_SUBMIT_START,
    payload: data
})
export const addressSubmitSuccess = data => ({
    type: UserActionTypes.ADDRESS_SUBMIT_SUCCESS,
    payload: data
})
export const addressSubmitFailure = errorMessage => ({
    type: UserActionTypes.ADDRESS_SUBMIT_FAILURE,
    payload: errorMessage
})
export const fetchCurrentUserAddressStart = (id) => ({
    type: UserActionTypes.FETCH_ADDRESS_START,
    payload: id
})
export const fetchCurrentUserAddressSuccess = (data) => ({
    type: UserActionTypes.FETCH_ADDRESS_SUCCESS,
    payload: data
})
export const fetchCurrentUserAddressFailure = errorMessage => ({
    type: UserActionTypes.FETCH_ADDRESS_FAILURE,
    payload: errorMessage
})
export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})
export const emailSignInSuccess = user => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})
export const emailSignInFailure = errorMessage => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: errorMessage
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})
export const signOutFailure = errorMessage => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: errorMessage
})
export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
}) 
export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
})
export const signUpFailure = errorMessage => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: errorMessage
})
export const signUpSuccess = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: userCredentials
})

export const AlertMessage = msg => ({
    type: UserActionTypes.ALERT_MESSAGE,
    payload: msg
})  
export const fetchIsUserAuthenticated = () => ({
    type: UserActionTypes.USER_IS_AUTHENTICATED
})
