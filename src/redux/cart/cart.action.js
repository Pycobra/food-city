import CartActionTypes from "./cart.types"


export const togleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})
export const addItemStart = item => ({
    type: CartActionTypes.ADD_ITEMS_TO_CART_START,
    payload: item
})
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEMS_FROM_CART,
    payload: item
})
export const addCartSuccess = item => ({
    type: CartActionTypes.ADD_ITEMS_TO_CART_SUCCESS,
    payload: item
})
export const addCartSuccessPopPup = () => ({
    type: CartActionTypes.ADD_CART_SUCCESS_POPUP,
})
export const clearCartSuccessPopUp = () => ({
    type: CartActionTypes.CLEAR_CART_SUCCESS_POPUP,
})
export const addCartFailure = errorMessage => ({
    type: CartActionTypes.ADD_ITEMS_TO_CART_FAILURE,
    payload: errorMessage
})
export const subtractItemQuantity = item => ({
    type: CartActionTypes.SUBTRACT_ITEM_QUANTITY,
    payload: item
})
export const clickedCart = item => ({
    type: CartActionTypes.CLICKED_CART,
    payload: item
})
export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
}) 