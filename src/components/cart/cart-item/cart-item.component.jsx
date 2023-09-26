import React from "react";
import "./cart-item.styles.css";



const CartItems = ({item: {images, price, title, quantity}}) => {
    return(
    <div className="cart-item">
        <img src={images} alt="item" />
        <div className="item-details">
            <span className="title">{title}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
)}

export default CartItems;