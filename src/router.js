import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarsList from './components/CarsList';
import CreateCar from './components/CreateCar';
import FormCar from './components/FormCar';
import Car from './components/Car';
import UserCars from './components/UserCars';
import UpdateCar from './components/UpdateCar';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import ProductHero from './components/ProductHero';

export default (
  <Switch>
    <Route path="/" exact component={ProductHero} />
    <PrivateRoute path="/profile" component={Profile} />
    <Route path="/layout" component={Layout} />
    <Route path="/layout" component={ProductHero} />

    <Route path="/cars" component={CarsList} />
    <PrivateRoute path="/create-car" component={CreateCar} />
    <Route path="/add-car" component={FormCar} />
    <Route path="/car/:id" component={Car} />
    <Route path="/:id/cars" component={UserCars} />
    <Route path="/editing/:id" component={UpdateCar} />
  </Switch>
);
