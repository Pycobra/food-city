import { Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../redux/user/user.selector';
import { createStructuredSelector} from "reselect"; 
import { connect } from 'react-redux';







const PrivateRoute = ({ children, currentUser }) => //<>{children}</>
{
    // const loggedIn = useAuthStore((state) => state.isLoggedIn)();
    return currentUser ? <>{children}</> : <Navigate to="/auth/login" />;
};
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(PrivateRoute);