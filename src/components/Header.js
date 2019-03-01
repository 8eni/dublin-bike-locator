import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NearMeIcon from '@material-ui/icons/NearMe';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    maxHeight: '65px',
    padding: '5px',
    color: '#fff',
    position: 'absolute',
    width: '100%',
    top: 0,
    background: theme.palette.secondary.main,
    borderBottom: `solid 1px ${theme.palette.secondary.main800}`
  }
})

const Header = ({ currentStation, classes }) => 
  <Grid item xs={12} className={`header ${classes.root}`}>
    <Typography align='center' variant="h5" color="inherit">{currentStation.address}</Typography>
    <Typography align='center' variant="subheading" color="inherit"><NearMeIcon fontSize="inherit" /> {currentStation.distance} km</Typography>
  </Grid>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);