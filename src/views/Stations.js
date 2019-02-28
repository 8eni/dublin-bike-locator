import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StationList from '../components/StationList';

const styles = () => ({
  root: {
    backgroundColor: '#212121',
    padding: '15px'
  }
})
const Stations = ({ classes, stations }) => <div className={classes.root}><StationList stations={stations} /></div>

Stations.protoTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Stations);