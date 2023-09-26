import { takeLatest, all, call, put } from "redux-saga/effects"
import CheckoutActionTypes from "./checkout.types"
import { 
    ApiGet_delivery_options,
    ApiGet_payment_slections,
    ApiPost_complete_payment,
    ApiGet_paystack_public_key,
} from "../../utils/api/checkout-api.utils"
import { 
    fetchDeliveryOptionSuccess, fetchDeliveryOptionFailure,
    fetchPaymentSelectionSuccess, fetchPaymentSelectionFailure,
    fetchAlertMessage, fetchVerifyPaymentFailure,
    fetchVerifyPaymentSuccess, fetchPaystackPublicKeySuccess,
    fetchPaystackPublicKeyFailure
} from "./checkout.action"





class CustomError extends Error{
    constructor(msg){
        super();
        this.name = "";
        this.message= msg;
    }
}
export function* getDeliveryOptions() {
    try{
        const response = yield ApiGet_delivery_options()
        if (response.message !== "Network Error"){
            yield put(fetchDeliveryOptionSuccess(response))
            yield put(fetchAlertMessage({'type': 'success', content: "You have changed your option"}))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchDeliveryOptionFailure(error.message))
    }
}

export function* getPaymentSelection({payload}) {
    try{
        const response = yield ApiGet_payment_slections()
        if (response.message !== "Network Error"){
            yield put(fetchPaymentSelectionSuccess(response))
            yield put(fetchAlertMessage({'type': 'success', content: "You have changed your option"}))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchPaymentSelectionFailure(error.message))
    }
}
export function* getVerifyPayment({payload}) {
    console.log(payload, "payloadpayloadpayloadpayload")
    try{
        const response = yield ApiPost_complete_payment(payload)
        if (response.message !== "Network Error"){
            yield put(fetchVerifyPaymentSuccess(response))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchVerifyPaymentFailure(error.message))
    }
}
export function* getPaystackPublicKey() {
    try{
        const response = yield ApiGet_paystack_public_key()
        if (response.message !== "Network Error"){
            yield put(fetchPaystackPublicKeySuccess(response))
        } else {
            throw new CustomError(response.message)
        }
    } 
    catch (error){
        yield put(fetchPaystackPublicKeyFailure(error.message))
    }
}
export function* onFetchDeliveryOptionsStart() {
    yield takeLatest(CheckoutActionTypes.FETCH_DELIVERY_OPTION_START, 
        getDeliveryOptions)
}
export function* onPaymentSelectionStart() {
    yield takeLatest(CheckoutActionTypes.FETCH_PAYMENT_SELECTION_START, 
        getPaymentSelection)
}
export function* onVerifyPaymentStart() {
    yield takeLatest(CheckoutActionTypes.FETCH_VERIFY_PAYMENT_START, 
        getVerifyPayment)
}
export function* onPayStackPublicKeyStart() {
    yield takeLatest(CheckoutActionTypes.FETCH_PAYSTACK_PUBLIC_KEY_START, 
        getPaystackPublicKey)
}
export function* CheckoutSagas() {
    yield all([
        call(onFetchDeliveryOptionsStart), 
        call(onPaymentSelectionStart), 
        call(onVerifyPaymentStart), 
        call(onPayStackPublicKeyStart), 
        
    ])
}

