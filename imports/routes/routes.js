import { Meteor } from "meteor/meteor";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Signup from "../ui/Signup";
import Dashboard from "../ui/Dashboard";
import NotFound from "../ui/NotFound";
import Login from "../ui/Login";

const history = createHistory();
const unauthenticatedPages = ["/", "/signup"];
const authenticatedPages = ["/dashboard"];

export const onAuthChange = isAuthenticated => {
  const pathname = location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.push("/dashboard");
  }

  if (isAuthenticatedPage && !isAuthenticated) {
    history.push("/");
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
