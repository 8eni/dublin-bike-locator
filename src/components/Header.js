import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import NearMeIcon from '@material-ui/icons/NearMe';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '64px',
    position: 'fixed',
    zIndex: 5,
    width: '100%',
    top: 0,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: '64px',
  },
  toggle: {
    background: theme.palette.secondary.main800,
      '&.Mui-selected': {
        background: theme.palette.primary.main,
      '&:hover': {
        background: theme.palette.primary.main,
      }
    },
    '&:hover': {
      background: theme.palette.secondary.main700
    }
  }
}));

export default function ButtonAppBar({ currentStation }) {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('bike');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log('align ', alignment)
  };
  const children = [
    <ToggleButton className={classes.toggle} key={1} value="bike">
      <DirectionsBikeIcon />
    </ToggleButton>,
    <ToggleButton className={classes.toggle} key={2} value="park">
      <LocalParkingIcon />
    </ToggleButton>,
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            { currentStation.name } <NearMeIcon />{currentStation.distance}km
          </Typography>
          <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                {children}
              </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
