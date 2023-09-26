import React from "react";
import "./checkout-item.styles.css";
import { connect } from "react-redux";
import { clearItemFromCart, addItemStart, subtractItemQuantity } from "../../redux/cart/cart.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const CheckoutItem = ({items, clearItem, add_item_start, subtract_item_quantity}) => {
    const {id, title, quantity, price, images} = items
    return (
      
        <div id="checkout-item">
            <div className="container">
                <div className="checkout-item__wrap">
                    <ul>
                        <li><img src={images}/></li>
                        <li>${price}</li>
                        <li onClick={e => subtract_item_quantity(items)}><FontAwesomeIcon icon={faMinusCircle} /></li>
                        <li>{quantity}</li>
                        <li onClick={e => add_item_start(items)}><FontAwesomeIcon icon={faPlusCircle} /></li>
                        <li>${parseInt(quantity) * parseInt(price)}</li>
                    </ul>
                </div>
            </div>
        </div>
      )
  }
  

  const mapDispatchToProps = dispatch => ({
      clearItem: item => dispatch(clearItemFromCart(item)),
      add_item_start: item => dispatch(addItemStart(item)),
      subtract_item_quantity: item => dispatch(subtractItemQuantity(item))
  })
  export default connect(null, mapDispatchToProps)(CheckoutItem);