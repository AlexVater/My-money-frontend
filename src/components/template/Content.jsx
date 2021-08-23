import React from "react";
import { Route, Switch } from "react-router-dom";
import BillingCycle from "../../billingCycle/BillingCycle";
import Dashboard from "../../dashboard/Dashboard";

const Content = () => {
  return (
    <div className="w-screen">
      <Switch>
        <Route path="/billingCycles">
          <BillingCycle />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="*">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
