import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core/';
import Link from '@material-ui/core/Link';
import Header from './components/Header';
import router from './router';
import { Router } from 'react-router-dom';
import { useAuth0 } from './utils/react-auth0-spa';
import history from './utils/history';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      auth_id: null,
    };
  }

  componentDidMount() {
    const { loading } = useAuth0;
    if (loading) {
      return <div>Loading...</div>;
    }
  }

  render() {
    return (
      <Router history={history}>
        <Grid container direction="column">
          <Grid item>
            <Header user={this.state.auth_id} />
          </Grid>

          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              {router}

              <Copyright />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </Router>
    );
  }
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        My Car App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default App;
