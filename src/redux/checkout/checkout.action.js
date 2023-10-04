import CheckoutActionTypes from "./checkout.types"


export const fetchDeliveryOptionStart = () => ({
    type: CheckoutActionTypes.FETCH_DELIVERY_OPTION_START
})
export const fetchDeliveryOptionSuccess = (data) => ({
    type: CheckoutActionTypes.FETCH_DELIVERY_OPTION_SUCCESS,
    payload: data
})
export const fetchDeliveryOptionFailure = errorMessage => ({
    type: CheckoutActionTypes.FETCH_DELIVERY_OPTION_FAILURE,
    payload: errorMessage
})
export const fetchPaymentSelectionStart = () => ({
    type: CheckoutActionTypes.FETCH_PAYMENT_SELECTION_START
})
export const fetchPaymentSelectionSuccess = Obj => ({
    type: CheckoutActionTypes.FETCH_PAYMENT_SELECTION_SUCCESS,
    payload: Obj
})
export const fetchPaymentSelectionFailure = errorMessage => ({
    type: CheckoutActionTypes.FETCH_PAYMENT_SELECTION_FAILURE,
    payload: errorMessage
})
export const fetchVerifyPaymentStart = (obj) => ({
    type: CheckoutActionTypes.FETCH_VERIFY_PAYMENT_START,
    payload: obj
})
export const fetchVerifyPaymentSuccess = Obj => ({
    type: CheckoutActionTypes.FETCH_VERIFY_PAYMENT_SUCCESS,
    payload: Obj
})
export const fetchVerifyPaymentFailure = errorMessage => ({
    type: CheckoutActionTypes.FETCH_VERIFY_PAYMENT_FAILURE,
    payload: errorMessage
})
export const fetchPaystackPublicKeyStart = () => ({
    type: CheckoutActionTypes.FETCH_PAYSTACK_PUBLIC_KEY_START
})
export const fetchPaystackPublicKeySuccess = Obj => ({
    type: CheckoutActionTypes.FETCH_PAYSTACK_PUBLIC_KEY_SUCCESS,
    payload: Obj
})
export const fetchPaystackPublicKeyFailure = errorMessage => ({
    type: CheckoutActionTypes.FETCH_PAYSTACK_PUBLIC_KEY_FAILURE,
    payload: errorMessage
})
export const fetchFlutterwavePublicKeyStart = () => ({
    type: CheckoutActionTypes.FETCH_FLUTTERWAVE_PUBLIC_KEY_START
})
export const fetchFlutterwavePublicKeySuccess = Obj => ({
    type: CheckoutActionTypes.FETCH_FLUTTERWAVE_PUBLIC_KEY_SUCCESS,
    payload: Obj
})
export const fetchFlutterwavePublicKeyFailure = errorMessage => ({
    type: CheckoutActionTypes.FETCH_FLUTTERWAVE_PUBLIC_KEY_FAILURE,
    payload: errorMessage
})
export const fetchAlertMessage = Obj => ({
    type: CheckoutActionTypes.FETCH_ALERT_MESSAGE,
    payload: Obj
})