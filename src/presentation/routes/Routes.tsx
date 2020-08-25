import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { LoginWithInjection } from "@/presentation/pages/authentication";

export const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth/login" component={LoginWithInjection} />
        <Redirect to="/auth/login" />
      </Switch>
    </BrowserRouter>
  );
};
