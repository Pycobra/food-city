import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import "./checkout.styles.css";
import { createStructuredSelector } from "reselect";
import { 
    selectCartItems, selectCartTotalPrice, 
    selectCartItemsCount, selectTotalAmount,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ApiPost_complete_payment } from "../../utils/api/checkout-api.utils";
import { 
    fetchDeliveryOptionStart, fetchVerifyPaymentStart, 
    fetchPaystackPublicKeyStart, fetchPaymentSelectionStart, fetchFlutterwavePublicKeyStart 
} from "../../redux/checkout/checkout.action";
import { 
    selectPaystackPublicKey, selectFlutterwavePublicKey, 
    selectPaymentSelection, selectDeliveryOptions 
} from "../../redux/checkout/checkout.selector";
import { usePaystackPayment, PaystackButton } from "react-paystack";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { PAYSTACK_PUBLIC_KEY, FLUTTERWAVE_PUBLIC_KEY } from "./constant";






const Checkout = ({cartItems, total_price, itemCount, totalAmount, 
    getPaystackPublicKeyStart, paymentSelection, verifyPaymentStart, 
    paystackPublicKey, currentUser, delivery_options,
    flutterwavePublicKey}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [config, setConfig] = useState({})
    const [callbackInfo, setCallbackInfo] = useState({})
    
    const initializePaystackPayment = usePaystackPayment(config);
    const initializeFlutterPayment = useFlutterwave(config);
    const onSuccess = (response) => {
        console.log(response, 'callbackInfo is amount callbackInfo is amount')
        if (response && callbackInfo.id && callbackInfo.payment_name 
            && callbackInfo.amount !== 0){
            dispatch(fetchVerifyPaymentStart({
                ref: callbackInfo.payment_name === "paystack-payment"
                    ? response.reference
                    : callbackInfo.payment_name === "flutterwave-payment"
                    ? response.tx_ref
                    : null,
                cartItems, 
                user: currentUser.user_id, 
                total_quantity: itemCount, 
                delivery_address: localStorage.getItem('address'), 
                delivery_instructions: localStorage.getItem('delivery'), 
                total_paid: totalAmount + defaultDelivery.delivery_price, 
                amount: totalAmount + defaultDelivery.delivery_price, 
                payment_option: callbackInfo.id, //paymentDetail.id,
                payment_name: callbackInfo.payment_name//paymentDetail.name
            }))
        }
    }
    const onClose = () => {
        alert('Transaction was not completed, payment was canceled.');
    }
    
    const HandlePayment = e => {
        if (!currentUser){
            navigate('/auth/login')
            return
        }
        const delivery = localStorage.getItem('delivery')
        const address = localStorage.getItem('address')
        if (!delivery || !address){
            navigate('/checkout/delivery-and-address')
            alert("You have not chosen a delivery method or address")
        } 
        else if (currentUser && defaultDelivery && cartItems){
            var amount = totalAmount
            if (defaultDelivery) {
                var amount = (totalAmount + defaultDelivery.delivery_price)
            }
            var obj ={}
            if (e.currentTarget.dataset.name === "paystack-payment"
                && paystackPublicKey){
                var obj = {
                    publicKey: paystackPublicKey,
                    email: currentUser.email,
                    amount: amount * 100,
                    currency: 'NGN',
                    reference: '' + Math.floor((Math.random() * 1000000000) + 1),
                    metadata: { 
                        name: currentUser.user_name, 
                        phone: currentUser.phone 
                    },
                }
            }
            else if (e.currentTarget.dataset.name === "flutterwave-payment"
                && flutterwavePublicKey){
                var obj = {
                    public_key: flutterwavePublicKey,
                    amount,
                    currency: 'NGN',
                    tx_ref: '' + Math.floor((Math.random() * 1000000000) + 1),
                    payment_options: "card,mobilemoney,ussd",
                    customer: { 
                        email: currentUser.email,
                        name: currentUser.user_name, 
                        phone: currentUser.phone 
                    },
                }
            }
            setCallbackInfo({
                id: e.currentTarget.id, 
                amount,
                payment_name: e.currentTarget.dataset.name
            })
            setConfig(obj)
        }
    }

    const [defaultDelivery, setDefaultDelivery] = useState(null)
    useEffect(() => {
        const delivery_id = localStorage.getItem('delivery')
        const default_delivery = delivery_options 
                            ? delivery_options.find(itm => 
                                parseInt(itm.id) === parseInt(delivery_id)
                            ) : null
        setDefaultDelivery(default_delivery)
        const Container = document.querySelector("#container")
        Container.classList.remove('addLeftPadding')
        Container.classList.remove('addRightPadding')
    }, [delivery_options])
    
    useEffect(() => {
        if (Object.keys(config).length && Object.keys(callbackInfo).length){
            if (callbackInfo.payment_name==="paystack-payment") 
                initializePaystackPayment(onSuccess, onClose)
            else if (callbackInfo.payment_name==="flutterwave-payment"){
                initializeFlutterPayment({
                    callback: (response) => onSuccess(response),
                    onclose
                })
            }
        }
    }, [config, callbackInfo])
    
    useEffect(() => {
        dispatch(fetchPaymentSelectionStart())
        dispatch(fetchDeliveryOptionStart())
        dispatch(fetchPaystackPublicKeyStart())
        dispatch(fetchFlutterwavePublicKeyStart())

        const delivery_id = localStorage.getItem('delivery')
        const default_delivery = delivery_options 
                            ? delivery_options.find(itm => 
                                parseInt(itm.id) === parseInt(delivery_id)
                            ) : null
        setDefaultDelivery(default_delivery)
    }, [])
    
    return (
        <div id="checkout-listing">
            <div className="main-head"><h1>Your Cart</h1></div>
            <div className="container">
                <div className="checkout-l__wrap">
                    <div className="checkout-l__wrap-item">
                        <header>
                            <ul>
                                <li>Product</li>
                                <li>Price</li>
                                <li></li>
                                <li>Quantity</li>
                                <li></li>
                                <li>Total</li>
                            </ul>
                        </header>
                        {
                            cartItems.map((obj, ind) => 
                                <CheckoutItem key={ind} items={obj} />
                            )
                        }

                        <footer className="checkout-footer">
                            <div className="footer-item__wrap">
                                <ul>
                                    <li>TOTAL</li>
                                    <li></li>
                                    <li></li>
                                    <li>{itemCount}</li>
                                    <li></li>
                                    <li>${total_price}</li>
                                </ul>
                            </div>
                        </footer>

                    </div>
                    <div className="checkout-l__wrap-item">
                        <div className="checkout-total">
                            <div className="checkout-total__row">
                                <div className="checkout-t__row-item">
                                    <span>Pay Now</span>
                                    <span>${total_price}</span>
                                </div>
                                <div className="checkout-t__row-item">
                                    <span>Delivery fee</span>
                                    <span>${
                                        defaultDelivery ? defaultDelivery.delivery_price : 0
                                    }</span>
                                </div>
                            </div>
                            <div className="checkout-total__row">
                            {
                                paymentSelection
                                ? (
                                    paymentSelection.map(i => 
                                    i.name==="Paystack"
                                    ? <div key={`${i.id}${i.name}`} id={i.id} data-name="paystack-payment" 
                                        className="checkout-t__row-item paystack" 
                                        onClick={e => HandlePayment(e)}>
                                        <img alt="img-place" src={require("../../Media/images/paystack/paystack.png")} loading="lazy"/>
                                    </div>
                                    : i.name==="FlutterWave"
                                    ? <div key={`${i.id}${i.name}`} id={i.id} data-name="flutterwave-payment" 
                                        className="checkout-t__row-item flutterwave" 
                                        onClick={e => HandlePayment(e)}>
                                        <img alt="img-place" src={require("../../Media/images/flutterwave/flutterwave.png")} loading="lazy"/>
                                    </div>
                                    : null)
                                )
                                : null
                            }
                            </div>
                            {/* <PaystackButton {...componentProps} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total_price: selectCartTotalPrice,
    itemCount: selectCartItemsCount,
    currentUser: selectCurrentUser,
    totalAmount: selectTotalAmount,
    paystackPublicKey: selectPaystackPublicKey,
    paymentSelection: selectPaymentSelection,
    delivery_options: selectDeliveryOptions,
    flutterwavePublicKey: selectFlutterwavePublicKey
})
const mapDispatchToProps = dispatch => ({
    verifyPaymentStart: (obj) => dispatch(fetchVerifyPaymentStart(obj)),
    getPaystackPublicKeyStart : () => dispatch(fetchPaystackPublicKeyStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
// export default Checkout;