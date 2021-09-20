import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import AuthOrApp from "./AuthOrApp";

const RoutesApp = (props) => (
  <Router>
    <Route path="/" component={AuthOrApp} />
    <Redirect from="*" to="/" />
  </Router>
);

export default RoutesApp;
