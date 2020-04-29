import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import * as AppRoutes from 'config';

import Home from 'container/pages';


const App = () => (
  <Switch>
    <Route
      exact
      path={AppRoutes.Home}
      component={Home}
    />
    <Redirect from="*" to="/error-404" />
  </Switch>
);

export default App;
