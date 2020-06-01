import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from 'react-router-dom';

import { useAuth0 } from '../utils/react-auth0-spa';

const backgroundImage =
  'https://images.pexels.com/photos/315952/pexels-photo-315952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Find your ride
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Enjoy secret offers up to -30% off the best luxury cars every weekend.
      </Typography>
      {!isAuthenticated && (
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          onClick={() => loginWithRedirect({})}
        >
          Register
        </Button>
      )}
      {isAuthenticated && (
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component={Link}
          to={'/cars'}
        >
          Find a car
        </Button>
      )}
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
