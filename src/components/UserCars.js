import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core/';

import CarCard from '../components/CarCard';

export default class CarsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carsCollection: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id; //grab the ID from the URL
    axios
      .get(`http://localhost:3001/api/${id}/cars`)
      .then((res) => {
        this.setState({ carsCollection: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Grid container>
          <Typography>Cars from the user</Typography>
        </Grid>
        <Grid container spacing={2}>
          {this.state.carsCollection.map((carObj) => (
            <Grid item key={carObj.id} xs={12} sm={4}>
              <CarCard {...carObj} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
