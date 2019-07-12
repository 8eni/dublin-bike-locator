import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NearMeIcon from '@material-ui/icons/NearMe';
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    maxHeight: '65px',
    padding: '5px',
    // color: '#fff',
    position: 'fixed',
    zIndex: 5,
    width: '100%',
    top: 0,
    // background: theme.palette.secondary.main,
    // borderBottom: `solid 1px ${theme.palette.secondary.main800}`
  }
})

const Header = ({ currentStation, classes }) => 
  <Grid item xs={12} className={`header ${classes.root}`}>
    <Typography align='center' variant="h5" color="inherit">
      {currentStation.address} <NearMeIcon fontSize="inherit" /> {currentStation.distance} km
    </Typography>
    <Typography align='center' >
    <Chip
      size="small"
      avatar={<Avatar>{currentStation.available_bikes}</Avatar>}
      label={<DirectionsBikeIcon></DirectionsBikeIcon>}
      variant="outlined"
      color="primary"/>
    <Chip
      size="small"
      avatar={<Avatar>{currentStation.available_bike_stands}</Avatar>}
      label={<LocalParkingIcon></LocalParkingIcon>}
      variant="outlined"
      color="secondary"/>
    </Typography>
  </Grid>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);