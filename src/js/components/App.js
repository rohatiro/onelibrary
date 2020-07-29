import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import "bootstrap/dist/css/bootstrap.css";
import "../../css/App.css";

import "bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <div className="olib overflow-auto">
        <Header />
        <div className="olib__container container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
