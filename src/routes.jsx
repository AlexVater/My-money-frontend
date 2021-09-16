import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import AuthOrApp from "./AuthOrApp";

export default (props) => (
  <Router>
    <Route path="/" component={AuthOrApp} />
    <Redirect from="*" to="/" />
  </Router>
);
