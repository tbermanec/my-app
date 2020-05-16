import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core/';
import Link from '@material-ui/core/Link';
import Header from './components/Header';

import CarsList from './components/CarsList';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid>
        <Grid item>
          <Typography variant="h4">Available Cars</Typography>
        </Grid>
      </Grid>

      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <CarsList />
          <Copyright />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
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
