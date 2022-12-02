import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const PrivateRouter = ({ children }) => {
    let location = useLocation();
    const { user,loading } = useContext(AuthContext);
    if (loading) {
        // loader section
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRouter;