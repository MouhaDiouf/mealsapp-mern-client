import { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import { MyContext } from "./context";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ErrorPage from "./pages/404/404.js";
import Login from "./pages/Login/Login";
import Singup from "./pages/Signup/Singup";
import { useContext } from "react";
import axios from "./Axios";

function App() {
  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    axios.post("/auto-login").then(({ data }) => setUser(data));
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {!user && (
          <>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Singup />
            </Route>
          </>
        )}
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
