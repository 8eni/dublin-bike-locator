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
    textAlign: 'center'
  },
  active: {
    background: 'red'
  }
})
class Marker extends Component {

  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.active = false;
  }

  handleClick() {
    console.log(this.props.station);
    this.active = true;
    
    return this.props.viewStation(this.props.station)
  }

  render() {
    const { classes, number } = this.props;
    return (
      <div className={`${classes.root} ${this.active ? classes.active : ''}`} onClick={ this.handleClick }>{number}</div>
    )
  }
}

Marker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Marker);