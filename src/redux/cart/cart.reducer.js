import CartActionTypes from "./cart.types"
import { addItemToCart, subtractItemQuantity } from "./cart.utils"

const INITIAL_STATE = {
    hidden: true,
    isFetching: false,
    cartItemz: [],
    clicked_cart: null,
    errorMessage: undefined,
    alert: false,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden,
            }
        case CartActionTypes.ADD_ITEMS_TO_CART_START:
            return{
                ...state,
                isFetching: true,
            }
        case CartActionTypes.ADD_ITEMS_TO_CART_SUCCESS:
            return{
                ...state,
                isFetching: false,
                cartItemz: addItemToCart(state.cartItemz, action.payload)
            }
        case CartActionTypes.ADD_CART_SUCCESS_POPUP:
            return{
                ...state,
                alert: !state.alert,
            }
        case CartActionTypes.CLEAR_CART_SUCCESS_POPUP:
            return{
                ...state,
                alert: !state.alert,
            }
        case CartActionTypes.ADD_ITEMS_TO_CART_FAILURE:
            return{
                ...state,
                errorMessage: action.payload,
                isFetching: false,
            }
        case CartActionTypes.CLICKED_CART:
            return{
                ...state,
                clicked_cart: action.payload
            }
        case CartActionTypes.CLEAR_ITEMS_FROM_CART:
            return{
                ...state,
                cartItemz: state.cartItemz.filter(cartItem => cartItem.id !== action.payload.id),
            }
        case CartActionTypes.SUBTRACT_ITEM_QUANTITY:
            return{
                ...state,
                cartItemz: subtractItemQuantity(state.cartItemz, action.payload),
            }
        case CartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItemz: []
            }
        default:
            return state
    }
}
 
export default cartReducer;