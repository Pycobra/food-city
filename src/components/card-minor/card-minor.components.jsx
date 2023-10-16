import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./card-minor.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { clickedCart } from "../../redux/cart/cart.action";

const CardMinor = ({item, vendor, category, addItemStart, HandleModal, onCartItem}) => { 
    let navigate = useNavigate()
    let location = useLocation()
    const dispatch = useDispatch()
    const handleClick = (e) => {
        if (e.target.parentElement.className.baseVal !== 'svg-inline--fa fa-cart-shopping '){
            if (category.name !== "Recently Added Restaurants"){
                navigate(`/restaurant/${vendor.id}/${category.id}/${item.id}/`)
            } else {
                navigate(`/restaurant/${item.id}`)
            }
        } else {
            // onCartItem(item)
            dispatch(clickedCart(item))
            HandleModal(e, "display")
        }
    }
    const title = item.store_name ? `${item.store_name} Restaurant` : item.title
    const image = item.vendor_image ? item.vendor_image : item.images
    return (
            <div className={`card-minor ${!item.store_name ? 'product' : ''}`} onClick={e => handleClick(e)}>
                
                <div className="top-block">
                    <img src={image} alt="img-place" loading="lazy"/>
                    {
                        !item.store_name
                        ? <span className="price">$ {item.price}</span>
                        : null
                    }
                    {
                        !item.store_name
                        ? <span className="cart-icon" ><FontAwesomeIcon icon={faCartShopping} /></span>
                        : null
                    }
                </div> 
                <div className="bottom-block">
                    <h1>{title}</h1>
                </div>
            </div>
    )
}

export default CardMinor;







