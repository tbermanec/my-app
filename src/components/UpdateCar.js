import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const axios = require('axios');

export default class UpdateCar extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      manufacturer: '',
      description: '',
      imageUrl: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    const id = this.props.match.params.id; //grab the ID from the URL
    const { data } = await axios.get(`http://localhost:3001/api/cars/${id}`);
    this.setState({ ...data });
    console.log(data);
  }

  handleSubmit = (event) => {
    const id = this.props.match.params.id; //grab the ID from the URL
    axios
      .put(`http://localhost:3001/api/cars/${id}`, {
        name: 'nekaj',
        manufacturer: 'nekaj',
        year: '1232',
        imageUrl: 'nekaj',
        description: 'nekaj',
      })
      .then((res, req) => {
        console.log(res.data);
        console.log(this.state.name);
        console.log('ovo je req: ' + req);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   handleClearForm(e) {
  //     this.setState({
  //       this.params.name: '',
  //       manufacturer: '',
  //       description: '',
  //       imageUrl: '',
  //     });
  //   }

  render(prps) {
    // const { name } = this.data.car;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '10px' }}>
            <Grid container spacing={3} justify="center" direction="column">
              <Grid item xs={6}>
                <Typography variant="h5">
                  Edit a car {this.state.name}
                </Typography>
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
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    action={this.handleClearForm}
                  >
                    Cancel
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
