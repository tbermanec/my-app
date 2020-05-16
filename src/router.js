import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import CarsList from './components/CarsList';

export default (
  <Switch>
    <Route path="/" exact />
    <Route path="/cars" component={CarsList} />
  </Switch>
);
