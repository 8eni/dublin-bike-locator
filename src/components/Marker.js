import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'block',
    width: '20px',
    height: '20px',
    background: '#64ffda',
    borderRadius: '20px'
  }
})
class Marker extends Component {

  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.props.viewStation(this.props.station)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} onClick={ this.handleClick }></div>
    )
  }
}

Marker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Marker);