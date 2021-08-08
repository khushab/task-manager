import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch()
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// <button onClick={() => dispatch({ type: 'SIGN_IN' })}>SIGN_IN</button>
//         <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>