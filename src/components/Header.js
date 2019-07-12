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
    flexGrow: 1,
    position: 'fixed',
    zIndex: 5,
    width: '100%',
    top: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ currentStation }) {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log('align ', alignment)
  };
  const children = [
    <ToggleButton key={1} value="left">
      <DirectionsBikeIcon />
    </ToggleButton>,
    <ToggleButton key={2} value="right">
      <LocalParkingIcon />
    </ToggleButton>,
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
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
