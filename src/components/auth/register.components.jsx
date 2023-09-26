import React, { useEffect } from "react";
import "./auth.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { signUpStart } from "../../redux/user/user.action"
import { createStructuredSelector} from "reselect"; 
import { useNavigate, useLocation, Link } from "react-router-dom";
import { selectIsFetching, selectErrorMsg, selectAlertMsg } from "../../redux/user/user.selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import HoverSpinner from "../hover-spinner/hover-spinner.component";






const Register = ({signUp, errorMsg, isFetching}) => {
    const [userCredential, setUserCredential] = useState(
        {email: '', password: '', password2: '', user_name: ''})
    const [fieldErrMsg, setFieldErrMsg] = useState(
        {emailErr: '' , passwordErr: '' , 
        password2Err: '' , user_nameErr: '' })

    const {email, password, user_name, password2} = userCredential
    const {emailErr, passwordErr, password2Err, user_nameErr} = fieldErrMsg
    
    const HandleChange = (e) => {
        const {name, value} = e.target;
        setUserCredential({...userCredential, [name]: value})
        setFieldErrMsg({emailErr: '' , passwordErr: '' , 
                        password2Err: '' , user_nameErr: '' })
    }
    useEffect(() => {
        if (errorMsg){
            if (errorMsg.type === 'password'){
                if (errorMsg.content === "Both passwords do not match"){
                    setFieldErrMsg({...fieldErrMsg, password2Err: errorMsg.content})}
                else {
                    setFieldErrMsg({...fieldErrMsg, passwordErr: errorMsg.content})}
            } else if (errorMsg.type === 'email'){
                setFieldErrMsg({...fieldErrMsg, emailErr: errorMsg.content})
            } else if (errorMsg.type === 'user_name') {
                setFieldErrMsg({...fieldErrMsg, user_nameErr: errorMsg.content})
            }
        }
        
        const Container = document.querySelector("#container")
        Container.classList.remove('addLeftPadding')
        Container.classList.remove('addRightPadding')
    }, [errorMsg])
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(signUp({email, user_name, password, password2}))
    }
    
    return(
        <div id="auth" className="auth">
            <div className="auth-content__wrap">
                <form onSubmit={e => handleSubmit(e)} className="auth-content__wrap-item">
                    <div className="auth-content__row">
                        <div className="auth-content__row-item">
                            <FontAwesomeIcon icon={faUserCircle} />
                            <h1>Create Account</h1>
                        </div>

                        <div className="auth-content__row-item">
                            <FormInput 
                                inputtype="roundbordertype"
                                labelStyle='non-shrinkable'
                                labelText="Email:"
                                name="email" 
                                id="signup-email"
                                type='email' 
                                helptext="Required"
                                value={email}
                                handleChange={(e) => HandleChange(e)}
                                error={emailErr}
                                required  /> 
                            <FormInput 
                                inputtype="roundbordertype"
                                labelStyle='non-shrinkable'
                                labelText="Username:"
                                name="user_name" 
                                id="signup-username"
                                type='text' 
                                helptext="Required"
                                value={user_name}
                                handleChange={(e) => HandleChange(e)}
                                error={user_nameErr}
                                required  /> 
                            <FormInput 
                                inputtype="roundbordertype"
                                labelStyle='non-shrinkable'
                                labelText="Password:"
                                name="password" 
                                id="signup-pwd"
                                type='password' 
                                helptext="Required"
                                value={password}
                                handleChange={(e) => HandleChange(e)}
                                error={passwordErr}
                                required  /> 
                            <FormInput 
                                inputtype="roundbordertype"
                                labelStyle='non-shrinkable'
                                labelText="Password2:"
                                name="password2" 
                                id="signup-pwd2"
                                type='password' 
                                helptext="Required"
                                value={password2}
                                handleChange={(e) => HandleChange(e)}
                                error={password2Err}
                                required  /> 
                        </div>

                        <div className="auth-content__row-item">
                            <CustomButton type="submit" buttonType="Button">
                                Signup
                            </CustomButton>    
                            {
                            isFetching
                            ? <HoverSpinner />
                            : null
                            }
                        </div>
                    </div>
                </form>



                <div className="auth-content__wrap-item">
                    <span className="auth-content__row">
                        Do you have an account?
                    </span>
                    <div className="auth-content__row">
                        <span>Login your Account</span>
                        <Link to="/auth/login">Login</Link>  
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    errorMsg: selectErrorMsg,
    alertMsg: selectAlertMsg,
})

const mapDispatchToProps = dispatch => ({
    signUp: (userCredentials) => dispatch(signUpStart(userCredentials)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Register);





















