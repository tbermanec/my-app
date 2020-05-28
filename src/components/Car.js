import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import {
  Paper,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {},
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id; //grab the ID from the URL
    const { data } = await axios.get(`http://localhost:3001/api/cars/${id}`);
    this.setState({ car: data });
  }

  render() {
    const {
      avatarUrl,
      name,
      shortInfo,
      description,
      imageUrl,
    } = this.state.car;
    return (
      <Grid>
        <Paper>
          <Card>
            <CardHeader
              avatar={<Avatar src={avatarUrl} />}
              title={name}
              subheader={
                'Cijena po danu: ' +
                (shortInfo ? undefined : 'korisnik nije unio cijenu')
              }
            />
            <CardMedia style={{ height: '500px' }} image={imageUrl} />
            <CardContent>
              <Typography variant="body2" component="p">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">RENT</Button>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    );
  }
}
