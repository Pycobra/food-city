import React from "react";
import { connect, useDispatch } from "react-redux";
import CustomButton from "../../custom-button/custom-button.component";
import "./cart-dropdown.styles.css";
import { useNavigate } from "react-router-dom"
import CartItems from "../cart-item/cart-item.component";
import { selectCartItems } from "../../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';
import { togleCartHidden } from "../../../redux/cart/cart.action";



const CartDropdown = ({cartItems, currentUser, togleCartHidden, togle_cart_hidden}) => {
    const navigate = useNavigate()
    const OnCardClick = window.onclick = function(event) {
        const clickedClass = event.target.className
        if (clickedClass === 'cart-dropdown' || clickedClass === 'container') {
            togle_cart_hidden()
        }
        else{
            return  
        }
    }
    
    const HandleClick = (e) => {
        togleCartHidden()
        if (!cartItems.length){ 
        // else {
            const allItem = document.querySelectorAll('.header-ul .header-li')
            const home = document.querySelector('.header-ul .header-li:first-child')
            Array.from(allItem).map(i => {
                i.classList.remove('active')
                var footer = i.querySelector('.header-li-footer')
                if (footer){ i.removeChild(footer)}
            })
            home.classList.add('active')
            home.insertAdjacentHTML('beforeend', "<span class='header-li-footer'></span>")
    
            alert("your cart is empty")
            return
        }
        navigate('/checkout')
    }

    return (
        <div className="cart-dropdown" onClick={e => OnCardClick(e)}>
            <div className="container">
                <div className="cart-dropdown__wrap">
                    <div className="cart-dropdown__item-col" >
                        {
                            cartItems.length
                            ? cartItems.map((item) => (
                                <CartItems key={item.id} item={item} />
                            ))
                            : <span className="empty-message">your cart is empty</span>
                        }
                    </div>
                    <CustomButton onClick={(e) => HandleClick(e)} buttonType="CartCustomBtn" style={{border: '1px solid var(--brown18)',background: 'var(--brown1)'}} >
                        GO TO CHECKOUT
                    </CustomButton>
                </div>
            </div>
        </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})
const mapDispatchToProps = dispatch => ({
    togleCartHidden: () => dispatch(togleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);