import React from 'react'
import './Nav.scss'
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux'

const Nav = () => {
    const dispatch = useDispatch()
    const toggleSidebarHandler = () => {
        dispatch({ type: "open" })
    }

    return (
        <nav>
            <div className="menu">
                <MenuIcon
                    onClick={toggleSidebarHandler}
                    className="menu-icon"
                />
            </div>
            <div className="heading">
                <h1>Task Manager</h1>
            </div>
            <div className="profile">
                <h4>Profile</h4>
            </div>
        </nav>
    )
}

export default Nav
