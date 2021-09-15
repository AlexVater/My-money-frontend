import React from "react";
import { Route, Switch } from "react-router-dom";
import BillingCycle from "../../billingCycle/BillingCycle";
import Dashboard from "../../dashboard/Dashboard";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <div className="w-screen">
      <Switch>
        <Route path="/billingCycles">
          <Navbar />
          <BillingCycle />
        </Route>
        <Route path="/">
          <Navbar />
          <Dashboard />
        </Route>
        <Route path="*">
          <Navbar />
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
