import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Homepage from "./components/homepage/Homepage";
import Header from "./components/Header";
import ProductPage from "./components/productpage/ProductPage";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import ClosedOrders from "./components/closeorders/ClosedOrders";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/orders" component={ClosedOrders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
