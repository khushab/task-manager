import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import ProtectedRoute from "./components/ProtectedRoute";
import AllTasks from "./components/allTasks/AllTasks";
import PendingTasks from "./components/pendingTasks/PendingTasks";
import Nav from "./components/navbar/Nav";

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.isLogged)
  return (
    <Router>
      <div className="App">
        {auth && <Sidebar />}
        {auth && <Nav />}
        <Switch>
          <ProtectedRoute exact path="/" name="home" component={AllTasks} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/" exact={true}>
            <Redirect to="/allTasks" />
          </Route> */}
          <ProtectedRoute path="/allTasks" component={AllTasks} />
          <ProtectedRoute path="/pendingTasks" component={PendingTasks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// <button onClick={() => dispatch({ type: 'SIGN_IN' })}>SIGN_IN</button>
//         <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>