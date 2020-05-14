import React, { Component } from 'react';
import axios from 'axios';

export default class CarsList extends Component {
  state = {
    carsCollection: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/cars')
      .then((res) => {
        const carsCollection = res.data;
        this.setState({ carsCollection });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <ul>
        {this.state.carsCollection.map((car) => (
          <li>{car.name}</li>
        ))}
      </ul>
    );
  }
}
