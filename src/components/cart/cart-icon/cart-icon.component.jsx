import React from "react";
import "./cart-icon.styles.css";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";



const CartIcon = ({itemCount, togle_cart_hidden, place, HandleClick}) => {
    const itemCountLenght = `${itemCount}`
    const navigate = useNavigate()
    const CartHandler = (e) => {
        if (place==="header"){
            HandleClick(e, "header-li")
        } else {
            navigate('/checkout')
        }
    }
    return (
    <div className={`cart-icon ${place==="header" ? 'header-li-head' : 'mobile'}`}
        onClick={e => CartHandler(e)}>
        
        {
            place==="header" 
            ? <span style={{marginLeft: '8px'}} className="header-li-text" >Cart</span>
            : null
        }
        <div className="icon-wrap">
            <div className="icon">
                <FontAwesomeIcon  icon={faShoppingCart} />
                <span className={`${itemCountLenght.length === 1 
                                    ? 'item-count1' 
                                    : itemCountLenght.length === 2 
                                    ? 'item-count2' 
                                    : 'item-count3'} item-count`}>{itemCountLenght}</span>
            </div>
        </div>
    </div>
)}
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
export default connect(mapStateToProps)(CartIcon);



