import { call, all, put, takeLatest, delay } from "redux-saga/effects"
import { clearCart, addCartSuccess, addCartFailure, 
    addCartSuccessPopPup, clearCartSuccessPopUp } from "./cart.action"
import UserActionTypes from "../user/user.types"
import CartActionTypes from "./cart.types"


export function* clearCartOnSignOut() {
    yield put(clearCart())
}
export function* addItemStart({payload}) {
    try{
        console.log(payload)
        const successful = yield put(addCartSuccess(payload))
        if (successful) {
            yield put(addCartSuccessPopPup())
            yield delay(3000)
            yield put(clearCartSuccessPopUp())
        };
    } catch (error){
        yield put(addCartFailure(error.message))
    }
}
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, 
        clearCartOnSignOut)
}
export function* onAddItem() {
    yield takeLatest(CartActionTypes.ADD_ITEMS_TO_CART_START, 
        addItemStart)
} 
export function* cartSagas(){
    yield all([
        call(onSignOutSuccess),
        call(onAddItem)
    ])
}
