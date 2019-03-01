import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import StationDetails from '../components/StationDetails';

const styles = theme => ({
  root: {
    color: theme.palette.secondary.main100
  }
});

const StationList = ({ classes, stations, currentStationId, showCount }) => 
  (
    <table className={classes.root}>
      <thead>
      <tr>
        <th align="left">Station</th>
        <th align="left">Stands</th> 
        <th align="left">Bikes</th> 
        <th align="left">km</th> 
      </tr>
      </thead>
      <tbody>
      { stations.map((station, i) =>
        (i < parseInt(showCount)) && <StationDetails key={ i } stationDetails={ station } stationId={ currentStationId }/>
      )}
      </tbody>
    </table>
  )

StationList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StationList);