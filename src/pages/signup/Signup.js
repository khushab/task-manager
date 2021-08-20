import React, { useState } from 'react'
import './Signup.scss'
import { NavLink as Link, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Signup = () => {
    const auth = useSelector(state => state.isLogged)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const formData = { name, email, password }
        console.log(formData)
    }

    return (
        <div>
            {auth ? <Redirect to="/" /> : null}
            <div className="signup">
                <h2>Task Manager</h2>
                <form onSubmit={submitHandler} className="signup-form">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            required
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type='submit'>Sign Up</button>
                    </div>
                    <div className="line"></div>
                    <div className="form-group">
                        <Link to="/login" id="login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
