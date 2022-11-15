// react and functional imports
import React from "react";
import { Route, Switch } from "react-router-dom";

// file imports
import Layout from "./Layout"
import NotFound from "./NotFound";


function Routes() {
  return (
    <Switch>
      <Route exaxt={true} path="/">
        <Layout />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
