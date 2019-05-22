import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";

import StationDetails from '../components/StationDetails';

const styles = theme => ({
  root: {
    // display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  }
});

const StationList = ({ classes, stations, currentStationId, showCount }) => 
  (
    <List>
      { stations.map((station, i) =>
        (i < parseInt(showCount)) && <StationDetails key={ i } stationDetails={ station } stationId={ currentStationId }/>
      )}
    </List>
  )

StationList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StationList);