import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = withStyles(theme => ({
  root: {
    display: 'block',
    width: '28px',
    height: '28px',
    background: theme.palette.secondary.main800,
    color: 'white',
    borderRadius: '28px',
    lineHeight: '28px',
    textAlign: 'center',
    margin: '-10px 0 0 -10px',
    fontSize: '14px'
  },
  active: {
    background: theme.palette.primary.main,
    color: 'black'
  }
}));

class Marker extends Component {
  constructor() {
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

export default useStyles(Marker);