import './App.css';
import React from "react";
import { Route, Switch } from "react-dom";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  );
}

export default App;
