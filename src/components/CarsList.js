import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import CarCard from '../components/CarCard';

export default class CarsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carsCollection: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/cars')
      .then((res) => {
        this.setState({ carsCollection: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Grid container spacing={2}>
        {this.state.carsCollection.map((carObj) => (
          <Grid item key={carObj.id} xs={12} sm={4}>
            <CarCard {...carObj} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
