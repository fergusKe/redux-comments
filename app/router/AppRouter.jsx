import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../containers';
import SubRouter from './SubRouter';

const customHistory = createBrowserHistory();

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <App>
          <Route path="/" component={SubRouter} />
        </App>
      </Router>
    );
  }
}
