import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import City from '../containers/City';
import NotFound from '../containers/404';

class SubRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/city" component={City} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default SubRouter;
