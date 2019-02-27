import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ViewListIcon from '@material-ui/icons/ViewList';
import MapIcon from '@material-ui/icons/Map';
import NearMeIcon from '@material-ui/icons/NearMe';

const styles = {
  root: {
    width: 500,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px -1px 4px -1px'
  },
};

class BottomNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}>
        <BottomNavigationAction component={Link}
          to="/"
          label="Near by"
          value="Near by"
          label="Near by"
          icon={<NearMeIcon />} />
        <BottomNavigationAction component={Link}
          to="/map"
          label="map"
          value="map"
          label="Map"
          icon={<MapIcon />} />
        <BottomNavigationAction component={Link}
          to="/stations"
          label="stations"
          value="stations"
          label="Stations"
          icon={<ViewListIcon />} />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);
