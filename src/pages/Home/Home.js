import React from 'react'
import './Home.scss'
import Nav from '../../components/navbar/Nav'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AllTasks from '../../components/allTasks/AllTasks'
import Sidebar from '../../components/sidebar/Sidebar'
import PendingTasks from '../../components/pendingTasks/PendingTasks'

const Home = () => {
    return (
        <div className="home">
            <Router>
                <Sidebar />
                <Nav />
                <Switch>
                    <Route path="/" exact={true}>
                        <Redirect to="/allTasks" />
                    </Route>
                    <Route path="/allTasks" component={AllTasks} />
                    <Route path="/pendingTasks" component={PendingTasks} />
                </Switch>
            </Router>
        </div>
    )
}

export default Home
