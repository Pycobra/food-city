import CheckoutActionTypes from "./checkout.types"

const INITIAL_STATE = {
    deliver_options: null,
    payment_selection: null,
    paystack_public_key: null,
    flutterwave_public_key: null,
    alertMessage: null,
    isFetching: false,
    payment_success: false,
    errorMessage: null,
}

const CheckoutReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {      
        case CheckoutActionTypes.FETCH_DELIVERY_OPTION_START:
        case CheckoutActionTypes.FETCH_PAYMENT_SELECTION_START:
        case CheckoutActionTypes.FETCH_PAYSTACK_PUBLIC_KEY_START:
        case CheckoutActionTypes.FETCH_FLUTTERWAVE_PUBLIC_KEY_START:
            return{
                ...state,
                isFetching: true,
                deliver_options: null,
                payment_selection: null,
                alertMessage: null,
                errorMessage: null,
            }
        case CheckoutActionTypes.FETCH_DELIVERY_OPTION_SUCCESS:
            return{
                ...state,
                isFetching: false,
                deliver_options: action.payload,
            }
        case CheckoutActionTypes.FETCH_PAYMENT_SELECTION_SUCCESS:
            return{
                ...state,
                isFetching: false,
                payment_selection: action.payload,
            }
        case CheckoutActionTypes.FETCH_MAKE_PAYMENT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                payment_success: action.payload,
            }
        case CheckoutActionTypes.FETCH_PAYSTACK_PUBLIC_KEY_SUCCESS:
            return{
                ...state,
                isFetching: false,
                paystack_public_key: action.payload,
            }
        case CheckoutActionTypes.FETCH_FLUTTERWAVE_PUBLIC_KEY_SUCCESS:
            return{
                ...state,
                isFetching: false,
                flutterwave_public_key: action.payload,
            }
        case CheckoutActionTypes.FETCH_ALERT_MESSAGE:
            return{
                ...state,
                isFetching: false,
                alertMessage: action.payload,
            }
        case CheckoutActionTypes.FETCH_DELIVERY_OPTION_FAILURE:
        case CheckoutActionTypes.FETCH_PAYMENT_SELECTION_FAILURE:
        case CheckoutActionTypes.FETCH_MAKE_PAYMENT_FAILURE:
        case CheckoutActionTypes.FETCH_PAYSTACK_PUBLIC_KEY_FAILURE:
        case CheckoutActionTypes.FETCH_FLUTTERWAVE_PUBLIC_KEY_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}
 
export default CheckoutReducer;