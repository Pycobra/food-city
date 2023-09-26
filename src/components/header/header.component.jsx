import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component"
import SiteLogo from "../site-logo/site-logo.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate,  } from "react-router-dom";
import CartDropdown from "../cart/cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faCutlery,  } from "@fortawesome/free-solid-svg-icons"
import CartIcon from "../cart/cart-icon/cart-icon.component";
import { togleCartHidden } from "../../redux/cart/cart.action";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.action";



const Header = ({cartHidden, currentUser, togle_cart_hidden, signOut}) => {
    console.log(cartHidden, 'cartHidden')
    const navigate = useNavigate()
    const HandleClick = (e, str) => {
        const elem = e.currentTarget
        const allItem = document.querySelectorAll('.header-ul .header-li')

        Array.from(allItem).map(i => {
            i.classList.remove('active')
            var footer = i.querySelector('.header-li-footer')
            if (footer){ i.removeChild(footer)}
        })
        if (str==='header-li'){
            if (!elem.parentElement.classList.contains("for-cart")){
                elem.classList.add('active')
                elem.insertAdjacentHTML('beforeend', "<span class='header-li-footer'></span>")
                
                if (document.querySelector('.cart-dropdown')){
                    togle_cart_hidden()
                }
            }

            if (elem.parentElement.classList.contains("for-cart")){
                togle_cart_hidden()
                elem.parentElement.classList.add('active')
                elem.parentElement.insertAdjacentHTML('beforeend', "<span class='header-li-footer'></span>") 

                if (document.querySelector('.cart-dropdown')){
                    elem.parentElement.classList.remove('active')
                    document.querySelector('.header-ul .header-li.for-cart .header-li-footer').remove()
                }   
            }
        } 
        if (str==='mobile'){
            navigate('/checkout')
        }
        else if (str==='auth'){
            signOut()
        }
    }

    return (
        <header id="header-item">
            <div className="h-item">
                <div className="container">
                    <div className="h-item__wrap">
                        <div className="box-1">
                            <SiteLogo />
                        </div>
                        <div className="box-2">
                            <ul className="header-ul">
                                <li className="header-li" onClick={e => {
                                    HandleClick(e, 'header-li')
                                    navigate('/')
                                    }}>
                                    <div className="header-li-head">
                                        <span className="header-li-text">Home</span>
                                        <span className="icon"><FontAwesomeIcon  icon={faHome} /></span>
                                    </div>
                                </li>
                                <li className="header-li"  onClick={e => HandleClick(e, 'header-li')}>
                                    <div className="header-li-head">
                                        <span className="header-li-text">Recipe</span>
                                        <span className="icon"><FontAwesomeIcon  icon={faCutlery} /></span>
                                    </div>
                                </li>
                                <li className="header-li for-cart">
                                    <CartIcon place='header' HandleClick={HandleClick}/>
                                </li>
                                <div className="auth-header-btn">
                                    {
                                        currentUser 
                                        ? <span onClick={e => HandleClick(e, 'auth')}>Logout</span>
                                        : <Link className="header-li-text" to="/auth/login">
                                            <span>SignIn</span>
                                        </Link>
                                    }
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {
                cartHidden 
                ? null
                : <CartDropdown togle_cart_hidden={togle_cart_hidden} />
            }
        </header>
    )
}





const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutStart()),
    togle_cart_hidden: () => dispatch(togleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);



