import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Sidebar from './components/sidebar/Sidebar'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch()
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// <button onClick={() => dispatch({ type: 'SIGN_IN' })}>SIGN_IN</button>
//         <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>