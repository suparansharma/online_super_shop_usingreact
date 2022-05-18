import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from "./Component/Review/Review";
import Inventor from "./Component/Inventor/Inventor";
import Nomatch from "./Component/Nomatch/Nomatch";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Login from "./Component/Login/Login";
import Shipment from "./Component/Shipment/Shipment";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App(props) {
  const [loggedInUser,setLoggedInUser] = useState({});
  return(
     <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <h3>{loggedInUser.email}</h3>
    
    <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/">
        <Shop></Shop>
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>

        <Route path="/review">
          <Review></Review>
        </Route>

        <Route path="/inventor">
          <Inventor></Inventor>
        </Route>
        <Route path="/product/:productKey">
        <ProductDetails></ProductDetails>
        </Route>

        <Route path="/login">
        <Login></Login>
        </Route>
        <PrivateRoute path="/shipment">
          <Shipment></Shipment>
        </PrivateRoute>
        

        <Route path="*">
        <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>)
}

export default App;
