import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarsList from './components/CarsList';
import CreateCar from './components/CreateCar';
import CarForm from './components/CarForm';
import Car from './components/Car';
import UserCars from './components/UserCars';
import UpdateCar from './components/UpdateCar';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

export default (
  <Switch>
    <Route path="/" exact />
    <PrivateRoute path="/profile" component={Profile} />
    <Route path="/cars" component={CarsList} />
    <Route path="/create-car" component={CreateCar} />
    <Route path="/formik" component={CarForm} />
    <Route path="/car/:id" component={Car} />
    <Route path="/:id/cars" component={UserCars} />
    <Route path="/editing/:id" component={UpdateCar} />
  </Switch>
);
