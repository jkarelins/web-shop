import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Homepage from "./components/homepage/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
