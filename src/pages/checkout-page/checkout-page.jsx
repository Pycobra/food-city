import React from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import "./checkout-page.styles.css";
import { createStructuredSelector } from "reselect";
import withSpinner from '../../components/with-spinner/with-spinner.component';
import Checkout from "../../components/checkout/checkout.component.jsx";
import DeliveryAddress from "../../components/delivery-address/delivery-address.components.jsx";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectIsFetching } from "../../redux/checkout/checkout.selector";
import { fetchDeliveryOptionStart, fetchPaymentSelectionStart } from "../../redux/checkout/checkout.action";





const DeliveryAddressWithSpinner = withSpinner(DeliveryAddress)

class CheckoutPage extends React.Component {
    
    componentDidMount(){
        window.scrollTo(0, 0)
        const { getDeliveryOptionStart, getPaymentSelectionStart } =  this.props
        getDeliveryOptionStart()
        getPaymentSelectionStart()
    }

    render(){ 
        const { isFetching, cartItems } =  this.props
        return(
            <section id="checkout-page">
                <Routes>        
                    <Route 
                    index 
                    element={cartItems.length ? <Checkout  /> : <Navigate to="/" replace />} 
                    />   
                    <Route 
                    path='/delivery-and-address'
                    element={<DeliveryAddressWithSpinner isLoading={isFetching} />} 
                    />
                </Routes>
            </section>
        )
    }
}
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    isFetching: selectIsFetching,
})
const mapDispatchToProps = dispatch => ({
    getDeliveryOptionStart : () => dispatch(fetchDeliveryOptionStart()),
    getPaymentSelectionStart : () => dispatch(fetchPaymentSelectionStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
