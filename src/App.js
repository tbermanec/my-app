import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core/';
import Link from '@material-ui/core/Link';
import Header from './components/Header';
import router from './router';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Grid container direction="column">
        <Grid item>
          <Header />
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
