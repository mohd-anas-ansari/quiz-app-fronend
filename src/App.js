import React from "react";
import "bulma/css/bulma.css";
import HomePage from "./views/auth/HomePage";
import { Route, Switch } from "react-router-dom";
import Login from "./views/auth/login";
import Signup from "./views/auth/signup";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

export default App;
