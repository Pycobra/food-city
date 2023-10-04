import React, { useRef, useState } from "react";
import { createStructuredSelector} from "reselect"; 
import { connect } from 'react-redux';
import FormInput from "../form-input/form-input.component";
import "./address-form.style.css";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addressSubmitStart } from "../../redux/user/user.action";
import { selectCurrentUser,selectIsFetching, selectAlertMsg } from "../../redux/user/user.selector";
import HoverSpinner from "../hover-spinner/hover-spinner.component";
import { useEffect } from "react";







const DeliveryForm = ({currentUser, alertMsg, isFetching, HandleModal}) => {
    const [addressCredential, setAddressCredential] = useState(
        {full_name: '', email: '', postal_code: '', phone: '', address_line: '', city: ''}
    )
    const {full_name, email, postal_code, phone, address_line, city} = addressCredential
    
    const [fieldErrMsg, setFieldErrMsg] = useState(
        {emailErr: '' , phoneErr: '' , cityErr: '',
        postal_codeErr: '' , full_nameErr: '', address_lineErr: ''})
    const {full_nameErr, emailErr, postal_codeErr, 
        phoneErr, address_lineErr, cityErr} = fieldErrMsg
    
    const dispatch = useDispatch()
    const HandleChange = (e) => {
        const {name, value} = e.target;
        setAddressCredential({...addressCredential, [name]: value})
        setFieldErrMsg({emailErr: '' , phoneErr: '' , cityErr: '',
        postal_codeErr: '' , full_nameErr: '', address_lineErr: ''})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(addressSubmitStart({...addressCredential, customer: currentUser.user_id})) 
    }
    
    return(
        <div className="delivery-form">
            <div className="delivery-form__wrap">
                <h1 className="delivery-form__head">Address</h1>
                <form className="delivery-form__wrap-item" onSubmit={e => handleSubmit(e)}>
                    <FormInput 
                        inputtype="roundbordertype"
                        labelStyle='shrinkable'
                        labelText="Fullname:"
                        name="full_name" 
                        id="full_name"
                        type='text' 
                        helptext="Required"
                        value={full_name}
                        handleChange={(e) => HandleChange(e)}
                        error={full_nameErr}
                        required  /> 
                    <FormInput 
                        inputtype="roundbordertype"
                        labelStyle='shrinkable'
                        labelText="Email:"
                        name="email" 
                        id="email"
                        type='email' 
                        helptext="Required"
                        value={email}
                        handleChange={(e) => HandleChange(e)}
                        error={emailErr}
                        required  /> 
                    <FormInput 
                        inputtype="roundbordertype"
                        labelStyle='shrinkable'
                        labelText="Postal code:"
                        name="postal_code" 
                        id="postal_code"
                        type='number' 
                        helptext="Required"
                        value={postal_code}
                        handleChange={(e) => HandleChange(e)}
                        error={postal_codeErr}
                        required  /> 
                    <FormInput 
                        inputtype="roundbordertype"
                        labelStyle='shrinkable'
                        labelText="Phone:"
                        name="phone" 
                        id="phone"
                        type='number' 
                        helptext="Required"
                        value={phone}
                        handleChange={(e) => HandleChange(e)}
                        error={phoneErr}
                        required  /> 
                    <FormInput 
                        inputtype="roundbordertype"
                        labelStyle='shrinkable'
                        labelText="City:"
                        name="city" 
                        id="city"
                        type='text' 
                        helptext="Required"
                        value={city}
                        handleChange={(e) => HandleChange(e)}
                        error={cityErr}
                        required  /> 
                    <FormInput 
                        inputtype="roundbordertype"
                        labelStyle='shrinkable'
                        labelText="Address line:"
                        name="address_line" 
                        id="address_line"
                        type='text' 
                        helptext="Required"
                        value={address_line}
                        handleChange={(e) => HandleChange(e)}
                        error={address_lineErr}
                        required  /> 

                    <div className="btn-box" style={{position:'relative'}}>
                        <CustomButton type="submit" buttonType="Button">
                            submit
                        </CustomButton>    
                        {
                        isFetching
                        ? <HoverSpinner />
                        : null
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isFetching: selectIsFetching,
    alertMsg:selectAlertMsg,
})
export default connect(mapStateToProps)(DeliveryForm);




