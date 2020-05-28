import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

export default class CreateCar extends Component {
  state = {
    name: '',
    manufacturer: '',
    year: '',
    description: '',
    imageUrl: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:3001/api/cars', {
        name: this.state.name,
        manufacturer: this.state.manufacturer,
        year: this.state.year,
        description: this.state.description,
        imageUrl: this.state.imageUrl,
      })
      .then((res, req) => {
        console.log(res.data);
        console.log(this.state.name);
        console.log('ovo je req: ' + req);
      })
      .catch(function (error) {
        console.log(error);
      });

    //TODO
    this.props.history.push('/');
  };

  // handleCancel() {
  //   this.setState({
  //     title: '',
  //     author: '',
  //     url: '',
  //   });
  // }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '10px' }}>
            <Grid container spacing={3} justify="center" direction="column">
              <Grid item xs={6}>
                <Typography variant="h5">Add new car</Typography>
              </Grid>
            </Grid>
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={3} justify="center">
                <Grid item xs={6}>
                  <TextField
                    label="Name"
                    id="outlined-size-normal"
                    variant="outlined"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} justify="center">
                <Grid item xs={6}>
                  <TextField
                    label="Manufacturer"
                    id="outlined-size-normal"
                    variant="outlined"
                    onChange={(e) =>
                      this.setState({ manufacturer: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} justify="center">
                <Grid item xs={6}>
                  <TextField
                    label="Year"
                    id="outlined-size-normal"
                    variant="outlined"
                    onChange={(e) => this.setState({ year: e.target.value })}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} justify="center">
                <Grid item xs={6}>
                  <TextField
                    label="ImageUrl"
                    id="outlined-size-normal"
                    variant="outlined"
                    onChange={(e) =>
                      this.setState({ imageUrl: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} justify="center">
                <Grid item xs={6}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={5}
                    variant="outlined"
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3} justify="center">
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" type="submit">
                    Primary
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
