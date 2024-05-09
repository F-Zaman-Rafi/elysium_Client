import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Providers/useAuth";

// oruri
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        <p>Loading..........</p>
    }

    if (user) return children


    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>

};

export default PrivateRoute;