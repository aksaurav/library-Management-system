import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Categories from "../pages/Categories";
import ProtectedRoute from "./ProtectedRoute";

const Routes = ({ isAuthenticated }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <ProtectedRoute
          path="/categories"
          component={Categories}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
