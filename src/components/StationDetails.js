import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  currentStation: {
    backgroundColor: theme.palette.secondary.main800
  }
});

function StationDetails(props) {
  const { classes, stationDetails, stationId } = props;
  return (
    <tr className={stationDetails.number === stationId ? classes.currentStation : ''}>
      <td>{stationDetails.address}</td>
      <td>{stationDetails.available_bike_stands}</td>
      <td>{stationDetails.available_bikes}</td>
      <td>{stationDetails.distance} km</td>
    </tr>
  );
}

StationDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StationDetails);
