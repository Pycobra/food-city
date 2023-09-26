import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItemz
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItem) => (
        cartItem.reduce(
            (accumulatedQuantity, cartItemz) => 
            accumulatedQuantity + cartItemz.quantity, 
            0
        )
    )
)
export const selectTotalAmount= createSelector(
    [selectCartItems],
    (cartItem) => (
        cartItem.reduce(
            (accumulatedQuantity, cartItemz) => 
            accumulatedQuantity + cartItemz.subTotal, 
            0
        )
    )
)
export const selectCartAddSuccessAlert = createSelector(
    [selectCart],
    (cart) => cart.alert
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)
export const selectClickedCart = createSelector(
    [selectCart],
    (cart) => cart.clicked_cart
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (cartItem) => (
        cartItem.reduce(
            (accumulatedQuantity, cartItemz) => 
            cartItemz.discount_price ? accumulatedQuantity + cartItemz.quantity * cartItemz.discount_price :
            accumulatedQuantity + cartItemz.quantity * cartItemz.price, 
            0
        )
    )
)
