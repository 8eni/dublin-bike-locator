import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StationList from '../components/StationList';

const styles = () => ({
  root: {
    padding: '15px'
  }
})
const Stations = ({ classes, stations, currentStation }) =>
  <div>
    <StationList className={classes.root}
      stations={stations} 
      currentStationId={ currentStation.number } 
      showCount={stations.length} />
  </div>

Stations.protoTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Stations);