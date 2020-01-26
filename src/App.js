import { createBrowserHistory } from "history";
import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";

import "./App.css";
import TableView from "./views/TableView";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/table/:tableId">
            <TableView />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
