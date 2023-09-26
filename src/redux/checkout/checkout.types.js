const CheckoutActionTypes = {
    FETCH_DELIVERY_OPTION_START: "FETCH_DELIVERY_OPTION_START",
    FETCH_PAYMENT_SELECTION_START: "FETCH_PAYMENT_SELECTION_START",
    FETCH_PAYSTACK_PUBLIC_KEY_START: "FETCH_PAYSTACK_PUBLIC_KEY_START",
    FETCH_VERIFY_PAYMENT_START: "FETCH_VERIFY_PAYMENT_START",
    FETCH_DELIVERY_OPTION_SUCCESS: "FETCH_DELIVERY_OPTION_SUCCESS",
    FETCH_PAYMENT_SELECTION_SUCCESS: "FETCH_PAYMENT_SELECTION_SUCCESS",
    FETCH_VERIFY_PAYMENT_SUCCESS: "FETCH_VERIFY_PAYMENT_SUCCESS",
    FETCH_PAYSTACK_PUBLIC_KEY_SUCCESS: "FETCH_PAYSTACK_PUBLIC_KEY_SUCCESS",
    FETCH_DELIVERY_OPTION_FAILURE: "FETCH_DELIVERY_OPTION_FAILURE",
    FETCH_VERIFY_PAYMENT_FAILURE: "FETCH_VERIFY_PAYMENT_FAILURE",
    FETCH_PAYSTACK_PUBLIC_KEY_FAILURE: "FETCH_PAYSTACK_PUBLIC_KEY_FAILURE",
    FETCH_PAYMENT_SELECTION_FAILURE: "FETCH_PAYMENT_SELECTION_FAILURE",
    FETCH_ALERT_MESSAGE: "FETCH_ALERT_MESSAGE"
}
export default CheckoutActionTypes;