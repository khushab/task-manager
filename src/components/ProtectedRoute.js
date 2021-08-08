import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector(state => state.isLogged)

    return (
        <Route {...rest} render={(props) => {
            if (auth) {
                return <Component {...props} />
            }
            if (!auth) {
                return (
                    <Redirect to="/login" />
                )
            }
        }}
        />
    )
}

export default ProtectedRoute
