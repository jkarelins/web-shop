import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Homepage from "./components/homepage/Homepage";
import ProductPage from "./components/productpage/ProductPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
