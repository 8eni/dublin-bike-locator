import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'block',
    width: '20px',
    height: '20px',
    background: '#64ffda',
    borderRadius: '20px',
    lineHeight: '20px',
    textAlign: 'center',
    margin: '-10px 0 0 -10px'
  },
  active: {
    background: '#e74c3c'
  }
})
class Marker extends Component {

  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.active = true;
    return this.props.viewStation(this.props.station)
  }

  render() {
    const { classes, station, number } = this.props;
    return (
      <div className={`${classes.root} ${station.active ? classes.active : ''}`} onClick={ this.handleClick }>{number}</div>
    )
  }
}

Marker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Marker);