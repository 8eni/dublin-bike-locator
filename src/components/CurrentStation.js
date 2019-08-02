import React from 'react';
import { withStyles } from '@material-ui/core';
import NearMeIcon from '@material-ui/icons/NearMe';

const useStyles = withStyles(theme => ({
  root: {
    position: 'absolute',
    zIndex: 2,
    background: '#fff',
    width: '80%',
    top: '10px',
    left: '10px',
    padding: '8px 14px',
    borderRadius: '2px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px'
  },
  svg: {
    fontSize: '21px'
  }
}));

export default ({ station }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NearMeIcon className={classes.svg}/> { station.address } - { station.distance } km
    </div>
  )
}