import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) =>
    //             user.email ? (
    //                 children
    //             ) : (
    //                 <Navigate
    //                     to={{
    //                         pathname: '/login',
    //                         state: { from: location },
    //                     }}
    //                 />
    //             )
    //         }
    //     />
    // );
    return user.email ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
