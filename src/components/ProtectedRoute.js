import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, name, ...rest }) => {
    const auth = useSelector(state => state.isLogged)

    return (
        <Route {...rest} render={(props) => {
            if (auth) {
                if (name === "home") {
                    return (
                        <Redirect to="/allTasks" />
                    )
                }
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
