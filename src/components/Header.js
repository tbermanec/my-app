import React from 'react';
import { useAuth0 } from '../utils/react-auth0-spa';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DirectionsCarRoundedIcon from '@material-ui/icons/DirectionsCarRounded';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorPr, setAnchorPr] = React.useState(null);

  let userMail;
  if (user) {
    userMail = user.email;
  }

  //const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseProfile = () => {
    setAnchorPr(null);
  };

  const handleMenu = (event) => {
    setAnchorPr(event.currentTarget);
  };

  return (
    <div>
      <AppBar position="static" className="header-color">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon
              id="simple-menu"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to={'/'}>
                Home
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to={'/cars'}>
                All cars
              </MenuItem>
              {isAuthenticated && (
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to={`/${userMail}/cars`}
                >
                  My cars
                </MenuItem>
              )}
              {isAuthenticated && (
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to={'/add-car'}
                >
                  Add a car
                </MenuItem>
              )}
              {!isAuthenticated && (
                <MenuItem
                  onClick={() => loginWithRedirect({}) && { handleClose }}
                >
                  Log in
                </MenuItem>
              )}
              {isAuthenticated && (
                <MenuItem onClick={() => logout() && { handleClose }}>
                  Log out
                </MenuItem>
              )}
            </Menu>
          </IconButton>

          <Typography
            variant="overline"
            color="inherit"
            className={classes.typographyStyles}
          >
            My_
            <DirectionsCarRoundedIcon />
            _App
          </Typography>
          {!isAuthenticated && (
            <Button color="inherit" onClick={() => loginWithRedirect({})}>
              Log in
            </Button>
          )}

          {isAuthenticated && (
            <Button color="inherit" onClick={() => logout()}>
              Log out
            </Button>
          )}

          {isAuthenticated && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                component={Link}
                to={'/profile'}
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
