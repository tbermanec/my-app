import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DirectionsCarRoundedIcon from '@material-ui/icons/DirectionsCarRounded';

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography varaiant="title" color="inherit">
            My
            <DirectionsCarRoundedIcon />
            App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
