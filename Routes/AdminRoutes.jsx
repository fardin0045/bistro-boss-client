import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../src/Hooks/useAdmin";
import useAuth from "../src/Hooks/useAuth";

const AdminRoutes = ({children}) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <progress className='progress w-56 text-center items-center'></progress>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    
}
export default AdminRoutes;