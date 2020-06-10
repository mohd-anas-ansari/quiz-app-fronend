import React from "react";
import "bulma/css/bulma.css";
import HomePage from "./views/auth/HomePage";
import { Route, Switch } from "react-router-dom";

import CreateQuiz from "./views/auth/createQuiz";
import Header from "./views/common/Header";
import Login from "./views/auth/login";
import Signup from "./views/auth/signup";
import "./assets/stylesheets/main.scss";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/quiz" component={CreateQuiz} />
      </Switch>
    </>
  );
}

export default App;
