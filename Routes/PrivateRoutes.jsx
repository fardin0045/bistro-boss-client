
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../src/Hooks/useAuth';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation()
    if(loading){
        return <progress className='progress w-56 text-center items-center'></progress>
    }
    if(user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;