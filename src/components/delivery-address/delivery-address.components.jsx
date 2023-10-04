import React, { useEffect } from "react";
import "./delivery-address.styles.css";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector} from "reselect"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faInfo, faPlus } from "@fortawesome/free-solid-svg-icons";
import CardDeliveryAddress from "./card.components";
import Modal from "../modal/modal.components";
import DeliveryForm from "./address-form.component";
import PrivateRoute from "../../layout/PrivateRoute";
import { selectCurrentUser, selectCurrentUserAddress } from "../../redux/user/user.selector";
import { fetchDeliveryOptionStart, fetchPaymentSelectionStart } from "../../redux/checkout/checkout.action";
import { 
    selectDeliveryOptions, selectPaymentSelection, 
    selectAlertMessage, selectIsFetching
} from "../../redux/checkout/checkout.selector";
import { selectIsFetching as selectIsFetchingUser } from "../../redux/user/user.selector";
import { fetchCurrentUserAddressStart } from "../../redux/user/user.action";




var cnt = 0
const DeliveryAddress = ({currentUser, currentUserAddressStart, 
    isFetching, delivery_options, payment_selection, 
    current_user_address, isFetchingUser}) => {

    const [defaultAddress, setDefaultAddress] = useState(null)
    const [defaultDelivery, setDefaultDelivery] = useState(null)
    const [defaultAddressID, setDefaultAddressID] = useState(null)
    const [defaultDeliveryID, setDefaultDeliveryID] = useState(null)
    const [allAddress, setAllAddress] = useState(null)
    const [allDelivery, setAllDelivery] = useState(null)
    const [caretBoolAddress, setCaretBoolAddress] = useState(true)
    const [caretBoolDelivery, setCaretBoolDelivery] = useState(true)

    const HandleChange = (e, id) => {
        const {name} = e.target;
        if (name === 'addressOption2'){
            localStorage.setItem('address', id);
            const address_id = localStorage.getItem('address')
            setDefaultAddressID(address_id)
        }
        if (name === 'deliveryOption2'){
            localStorage.setItem('delivery', id);
            const delivery_id = localStorage.getItem('delivery')
            setDefaultDeliveryID(delivery_id)
        }
    }
    useEffect(() => {
        if (currentUser) {
            currentUserAddressStart(currentUser['user_id'])
        }
        const Container = document.querySelector("#container")
        Container.classList.remove('addLeftPadding')
        Container.classList.remove('addRightPadding')
    }, [currentUser])
    useEffect(() => {
        window.scrollTo(0, 0)
        const delivery_id = localStorage.getItem('delivery')
        const all_delivery = delivery_options 
                            ? delivery_options.filter((itm, ind) => {
                                if (parseInt(itm.id) === parseInt(delivery_id)) setDefaultDelivery(itm)
                                return parseInt(itm.id) !== parseInt(delivery_id)
                            }) : null
        setAllDelivery(all_delivery)
        const address_id = localStorage.getItem('address')
        const all_address = current_user_address 
                            ? current_user_address.filter((itm, ind) => {
                                console.log(itm.id, address_id, "pop===pop")
                                if (itm.id === address_id) setDefaultAddress(itm) 
                                return itm.id !== address_id
                            }) : null
        setAllAddress(all_address)
        if (!isFetchingUser && clickedBtn) 
            setModalDisplay(false)
    }, [delivery_options, current_user_address,
        defaultAddressID, defaultDeliveryID, 
        isFetchingUser])
        
    const [modalDisplay, setModalDisplay] = useState(false)
    const [clickedBtn, setClickedBtn] = useState(false)
    const HandleModal = (e, str) => {
        if (e.target.className==="modal" || str==="display"){
            setModalDisplay(!modalDisplay)
        }
        if (e.target.classList.contains("custom-button")){
            setClickedBtn(true)
        }
    }
    // useEffect(() => {
    //     if (!isFetchingUser && clickedBtn) 
    //         setModalDisplay(false)
    // }, [isFetchingUser])
    
    const HideCards = (e) => {
        const {className} = e.currentTarget
        if (className==="toggle-delivery"){
            const elem = document.querySelector(".delivery.other_card-col_container")
            elem.classList.toggle('slide')   
            setCaretBoolDelivery(!caretBoolDelivery)
        }
        if (className==="toggle-address"){
            const elem = document.querySelector(".address.other_card-col_container")
            elem.classList.toggle('slide')            
            setCaretBoolAddress(!caretBoolAddress)
        }

    }
    
    return(
        <div id="deliver-address-details">
            {
                modalDisplay
                ? <PrivateRoute>
                    <Modal HandleModal={HandleModal}> <DeliveryForm HandleModal={HandleModal}/> </Modal>
                  </PrivateRoute>
                : null
            }
            <div className="first-box">
                <div className="block block1">
                    <div className="head">
                        <span>Delivery Options</span>
                        <span>Please select your delivery options</span>
                    </div>

                    <div className="messages">
                        <div className="body">
                            <span>
                                <FontAwesomeIcon icon={faInfo} style={{marginRight:'5px'}}/>  
                                <span className="text">Please select a delivery method</span>
                            </span>
                            <div className="clear-delivery-msg">&times;</div>
                        </div>
                    </div>

                    <div className="card-col">
                        {
                            defaultDelivery
                            ? <div> 
                                <CardDeliveryAddress value={defaultDelivery} naming="deliveryOption" HandleChange={HandleChange}/>
                                <div>
                                    <button className="toggle-delivery" onClick={e => HideCards(e)}>
                                        <span>hide other delivery method</span>
                                        <FontAwesomeIcon icon={caretBoolDelivery ? faCaretDown : faCaretUp} style={{marginLeft:"5px", color:"var(--green)"}}/>         
                                    </button>
                                </div>
                            </div>
                            : null
                        }
                        <div className="delivery other_card-col_container">
                            {
                                allDelivery
                                ? allDelivery.map((item, ind) => 
                                    <CardDeliveryAddress key={ind} value={item} naming="deliveryOption2" HandleChange={HandleChange}/>
                                )
                                : null
                            }
                        </div>
                    </div>
                </div>

                <div className="block block2">
                    <div className="head">
                        <span>Delivery Address</span>
                        <span>Please select your delivery address</span>
                    </div>

                    <div className="messages">
                        <div className="body">
                            <span style={{display:'flex', flexWrap:'no-wrap'}}>
                                <FontAwesomeIcon icon={faInfo} style={{marginRight:'5px'}}/>  
                                <span className="text">Please select a delivery address</span>
                            </span>
                            <div className="clear-address-msg">&times;</div>
                        </div>
                    </div>

                    <div className="card-col">
                        {
                            defaultAddress
                            ? <div> 
                                <CardDeliveryAddress value={defaultAddress} naming="addressOption" HandleChange={HandleChange}/>
                                <div>
                                    <button className="toggle-address" onClick={e => HideCards(e)}>
                                        <span>hide other delivery address</span>
                                        <FontAwesomeIcon icon={caretBoolAddress ? faCaretDown : faCaretUp} style={{marginLeft:"5px",color:"var(--green)"}} />        
                                    </button>
                                </div>
                            </div>
                            : null
                        }

                        <div className="address other_card-col_container">       
                            {
                                allAddress
                                ? allAddress.map((item, ind) => 
                                    <CardDeliveryAddress key={ind} value={item} naming="addressOption2" HandleChange={HandleChange}/>
                                )
                                : null
                            }                   
                        </div>
                        <div className=" card3" onClick={e => HandleModal(e,'display')}>
                            <div className="card-wrap">
                                <FontAwesomeIcon icon={faPlus} style={{marginRight:'5px'}}/>  
                                <span>Add address</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    alertMessage: selectAlertMessage,
    isFetching: selectIsFetching,
    isFetchingUser: selectIsFetchingUser,
    delivery_options: selectDeliveryOptions,
    payment_selection: selectPaymentSelection,
    current_user_address: selectCurrentUserAddress,
})

const mapDispatchToProps = dispatch => ({
    deliveryOptionStart : () => dispatch(fetchDeliveryOptionStart()),
    paymentSelectionStart : () => dispatch(fetchPaymentSelectionStart()),
    currentUserAddressStart : (id) => dispatch(fetchCurrentUserAddressStart(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddress);


