import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import React from "react";
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

function App() {
  return <div>
    
    <Header></Header>
    <Router>
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
        <Route path="/shipment">
          <Shipment></Shipment>
        </Route>
        

        <Route path="*">
        <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
