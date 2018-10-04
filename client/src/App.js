import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import NoMatch from "./components/NoMatch";

import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        {/* <Route exact path="/signup" component={} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
