import React, { useEffect } from "react";
import "./auth.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { emailSignInStart, signUpStart } from "../../redux/user/user.action"
import { createStructuredSelector} from "reselect"; 
import { useNavigate, useLocation, Link } from "react-router-dom";
import HoverSpinner from "../hover-spinner/hover-spinner.component";
import { 
    selectCurrentUser, selectIsFetching, selectAlertMsg, selectErrorMsg 
} from "../../redux/user/user.selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";








const Login = ({currentUser, emailSignIn, errorMsg, isFetching}) => {
    const [userCredential, setUserCredential] = useState(
        {email: '', password: ''}
    )
    const {email, password} = userCredential
    const [fieldErrMsg, setFieldErrMsg] = useState('')
    
    const HandleChange = (e) => {
        const {name, value} = e.target;
        setUserCredential({...userCredential, [name]: value})
        setFieldErrMsg('')
    }
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(emailSignIn({email, password}))
    }
    
    useEffect(() => {
        if (errorMsg){
            setFieldErrMsg(errorMsg.content)
        }
        
        const Container = document.querySelector("#container")
        Container.classList.remove('addLeftPadding')
        Container.classList.remove('addRightPadding')
    }, [errorMsg])

    return(
        <div id="auth" className="auth">
            <div className="auth-content__wrap">
                <form onSubmit={e => handleSubmit(e)} className="auth-content__wrap-item">
                    <div className="auth-content__row">
                        <div className="auth-content__row-item">
                            <FontAwesomeIcon icon={faUserCircle} />
                            <h1>Login Account</h1>
                        </div>
                        {
                            fieldErrMsg
                            ?<div style={{color: 'var(--red)',fontSize: '12px'}} className="auth-content__row-item err-msg">
                                {fieldErrMsg}
                            </div>
                            : null
                        }
                        <div className="auth-content__row-item">
                            <FormInput 
                                inputtype="roundbordertype"
                                labelStyle='non-shrinkable'
                                labelText="Email:"
                                name="email" 
                                id="login-email"
                                type='email' 
                                helptext="Required"
                                value={email}
                                handleChange={(e) => HandleChange(e)}
                                required  /> 
                            <FormInput 
                                inputtype="roundbordertype"
                                labelStyle='non-shrinkable'
                                labelText="Password:"
                                name="password" 
                                id="login-pwd"
                                type='password' 
                                helptext="Required"
                                value={password}
                                handleChange={(e) => HandleChange(e)}
                                required  /> 
                        </div>

                        <div className="auth-content__row-item">
                            <CustomButton type="submit" buttonType="Button">
                                Login
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
                        Don't have an account?
                    </span>
                    <div className="auth-content__row">
                        <span>Create Account</span>
                        <Link to="/auth/signup">Signup</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isFetching: selectIsFetching,
    errorMsg: selectErrorMsg,
})

const mapDispatchToProps = dispatch => ({
    emailSignIn: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword)),
    signUp: (userCredentials) => dispatch(signUpStart(userCredentials)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);





















