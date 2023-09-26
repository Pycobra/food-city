import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector} from "reselect"; 
import { Routes, Route, Navigate} from "react-router-dom";
import withSpinner from '../../components/with-spinner/with-spinner.component';
import Register from '../../components/auth/register.components';
import Login from '../../components/auth/login';
import './auth-page.styles.css'
import { selectCurrentUser } from '../../redux/user/user.selector';
import AlertPopup from '../../components/alert-popup/alert-popup.component';
import { selectAlertMsg } from '../../redux/user/user.selector';





const LoginWithSpinner = withSpinner(Login)
const RegisterWithSpinner = withSpinner(Register)
class AuthPage extends React.Component {
  
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){ 
    const { currentUser, alertMsg } = this.props
    return(
        <div id="auth-page">
            {
                alertMsg ? <AlertPopup msg={alertMsg} /> : null
            }
            <Routes>                
                <Route 
                path='/signup'
                element={currentUser ? <Navigate to="/" replace /> : <RegisterWithSpinner />}
                /> 
                <Route 
                path='/login'
                element={currentUser ? <Navigate to="/" replace /> : <LoginWithSpinner />}
                />     
            </Routes>
        </div>
    )
}
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  alertMsg: selectAlertMsg
})
export default connect(mapStateToProps)(AuthPage);


