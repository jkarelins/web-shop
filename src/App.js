import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Homepage from "./components/homepage/Homepage";
import CategoriePage from "./components/CategoriePage";
import Header from "./components/Header";
import ProductPage from "./components/productpage/ProductPage";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/:id" component={CategoriePage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
