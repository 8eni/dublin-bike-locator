import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import BikeStands from '../components/BikeStands'
import StationList from '../components/StationList';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 5,
    // background: '#212121',
    color: '#ccc'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  // grid: {
  //   borderBottom: 'solid 1px #424242',
  //   color: '#fff'
  // },
  text: {
    color: '#fff'
  },
  // gridContainer: {
  //   padding: '10px'
  // },
  // table: {
  //   width: '100%',
  //   fontSize: '12px'
  // },
  bike: {
    color: '#ff3d00'
  },
  grey: {
    color: '#9e9e9e',
    fontSize: '18px'
  }
});

function Nearby({ classes, stations, currentStation }) {

  return (
    <div className={classes.root}>
      
      <Grid className={classes.gridContainer} container >
      <Chip
          size="small"
          avatar={<Avatar><DirectionsBikeIcon></DirectionsBikeIcon></Avatar>}
          label={currentStation.available_bikes}
          variant="outlined"
          color="primary"
        />
        <Grid className={classes.grid} item xs={8}>
          
          {/* <Grid className={classes.grid} container item xs={12}>
            <Grid  item xs={6}>
              <Typography className={classes.text} align='center'>Stands</Typography>
              <Typography className={classes.text} variant="h6" align='center'><LocalParkingIcon className={classes.bike} />{currentStation.available_bike_stands}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.text} align='center'>Bikes</Typography>
              <Typography className={classes.text} variant="h6" align='center'><DirectionsBikeIcon color='primary' />{currentStation.available_bikes}</Typography>
            </Grid>
          </Grid> */}

          <Grid className={classes.grid}>
          {/* <Typography className={classes.text} variant="caption">Other stations</Typography> */}
          <Paper className={classes.root}>
            <StationList
              stations={stations}
              currentStationId={currentStation.number}
              showCount='6'></StationList>
          </Paper>
          </Grid>

        </Grid>
        <Grid className={classes.grid} item xs={4}>
          <Typography align='center' className={classes.text}>{currentStation.status}</Typography>
          <Grid container item xs={12}>
          <Paper className={classes.root}>
            <BikeStands bikeStands={currentStation.bike_stands} availableBikes={currentStation.available_bikes} />
          </Paper>
          </Grid>
        </Grid>
      {/* <Grid className={classes.grid} item xs={12}>
        <Typography align='center' variant="caption">last updated -  14:30</Typography>
      </Grid> */}
      </Grid>
    </div>
  );
}

Nearby.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nearby);
