import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarsList from './components/CarsList';
import CreateCar from './components/CreateCar';
import CarForm from './components/CarForm';
import Car from './components/Car';
import UserCars from './components/UserCars';
import EditCar from './components/EditCar';

export default (
  <Switch>
    <Route path="/" exact />
    <Route path="/cars" component={CarsList} />
    <Route path="/create-car" component={CreateCar} />
    <Route path="/formik" component={CarForm} />
    <Route path="/car/:id" component={Car} />
    <Route path="/:id/cars" component={UserCars} />
    <Route path="/cars/:id/edit" component={EditCar} />
  </Switch>
);
