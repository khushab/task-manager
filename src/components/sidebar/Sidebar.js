import React from 'react'
import './Sidebar.scss'
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink as Link } from 'react-router-dom';

const Sidebar = () => {
    const sidebarToggleValue = useSelector(state => state.toggleSidebar)
    const dispatch = useDispatch()

    const toggleSidebarHandler = () => {
        dispatch({ type: 'close' })
    }

    return (
        <div className={sidebarToggleValue ? "sidebar" : "sidebar hidden"}>
            <div className="heading">
                <div className="logo-content">
                    <h2>Menu</h2>
                </div>
                <ClearIcon onClick={toggleSidebarHandler} className="close" />
            </div>
            <ul className="nav-list">
                <li>
                    <Link
                        to="/"
                        exact={true}
                        activeClassName="active"
                    >
                        All tasks
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        activeClassName="active"
                    >
                        Pending Task
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        activeClassName="active"
                    >
                        Completed Task
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        activeClassName="active"
                    >
                        Notes
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar
