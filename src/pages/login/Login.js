import React, { useEffect, useState } from 'react'
import './Login.scss'
import { NavLink as Link, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {
    const auth = useSelector(state => state.isLogged)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            password: password
        }

        console.log(formData)
    }

    return (
        <div className="login">
            {auth ? <Redirect to="/" /> : null}
            <h2>Task Manager</h2>
            <form onSubmit={submitHandler} className="login-form">
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type='submit'>Login</button>
                </div>
                <div className="line"></div>
                <div className="form-group">
                    <Link to="/signup" id="create-account">Create New Account</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
