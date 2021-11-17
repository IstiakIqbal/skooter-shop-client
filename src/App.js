import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Notfound from "./Pages/Notfound/Notfound";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Login from "./Pages/Registration/Login/Login";
import Register from "./Pages/Registration/Register/Register";
import Skooters from "./Pages/Skooters/Skooters";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/skooters">
              <Skooters></Skooters>
            </Route>
            <PrivateRoute path="/placeOrder/:_id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashBoard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
