import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import NearMeIcon from '@material-ui/icons/NearMe';

const styles = {
  root: {
    width: 500,
    width: '100%',
    position: 'fixed',
    bottom: 0,
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
        className={classes.root}
      >
        <BottomNavigationAction component={Link}
          to="/"
          label="Recent"
          value="Recent"
          label="Recent"
          icon={<RestoreIcon />} />
        <BottomNavigationAction component={Link}
          to="/map"
          label="map"
          value="map"
          label="Map"
          icon={<PersonPinCircleIcon />} />
        
        <BottomNavigationAction component={Link}
          to="/nearest"
          label="nearest"
          value="nearest"
          label="Near by"
          icon={<NearMeIcon />} />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);
