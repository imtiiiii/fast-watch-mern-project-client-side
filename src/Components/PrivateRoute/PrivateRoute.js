
// this route is for private route only.
// user can view this pages if they are logged in 
import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    console.log(isLoading)
    if (isLoading === null || isLoading === "true")
        return < CircularProgress />

    return (
        <Route
            {...rest}
            render=
            {
                ({ location }) =>
                    user ? (children) :
                        <Redirect to={
                            {
                                pathname: "/login",
                                state: { from: location },


                            }
                        }></Redirect>

            }
        >
        </Route>
    );
};

export default PrivateRoute;