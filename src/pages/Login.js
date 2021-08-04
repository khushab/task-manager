import React from 'react'
import './login.scss'

const Login = () => {
    return (
        <div className="login">
            <h2>Task Manager</h2>
            <form className="login-form">
                <div className="form-group">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <button>Login</button>
                </div>
                <div className="line"></div>
                <div className="form-group">
                    <button id="create-account">Create New Account</button>
                </div>
            </form>
        </div>
    )
}

export default Login
