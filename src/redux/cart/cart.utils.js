


export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        )

    // we return .map its used cos it returns a new array, cos our state will only rerender when its fed a new data 
    if (existingCartItem) {
        var itemPrice = 0
        return cartItems.map(cartItem => {
            if (cartItem.discount_price){itemPrice = cartItem.discount_price} 
            else {itemPrice = cartItem.price}
            return (cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1, total_price: itemPrice + cartItem.total_price,
                    subTotal: itemPrice + cartItem.total_price}
                : cartItem)
        })
    }

    if (cartItemToAdd.discount_price){itemPrice = cartItemToAdd.discount_price} 
    else {itemPrice = cartItemToAdd.price}
    return [...cartItems, {...cartItemToAdd, quantity: 1, total_price: itemPrice, subTotal: itemPrice}];

}
export const subtractItemQuantity = (cartItems, cartItemTosubtractQuantity) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemTosubtractQuantity.id
        )

    // we return .map its used cos it returns a new array, cos our state will only rerender when its fed a new data 
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemTosubtractQuantity.id
        )
    }

    var itemPrice = 0
    return cartItems.map(cartItem => {
        if (cartItem.discount_price){itemPrice = cartItem.discount_price} 
        else {itemPrice = cartItem.price}
        return (cartItem.id === cartItemTosubtractQuantity.id
            ? {...cartItem, quantity: cartItem.quantity - 1, total_price: itemPrice * (cartItem.quantity - 1),
                subTotal: itemPrice * (cartItem.quantity - 1)}
            : cartItem)
    })
}

