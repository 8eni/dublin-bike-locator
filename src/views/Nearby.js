import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LabelIcon from '@material-ui/icons/Label';
import LabelOffIcon from '@material-ui/icons/LabelOff';
import BikeStands from '../components/BikeStands'

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#212121',
    color: '#fff'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    border: 'solid 1px #ccc',
    color: '#fff'
  },
  text: {
    color: '#fff'
  },
  gridContainer: {
    padding: '10px'
  },
  table: {
    width: '100%'
  },
  bike: {
    color: '#ff3d00'
  }
});

function Nearby({ classes, stations, currentStation }) {

  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container >
        <Grid className={classes.grid} item xs={12}>
          <Typography align='center' className={classes.text} variant="h4">{currentStation.address}</Typography>
          <Typography align='center' className={classes.text} variant="subheading">{currentStation.distance} km</Typography>
        </Grid>
        
        <Grid className={classes.grid} item xs={6}>
          <Grid className={classes.grid} container item xs={12}>
            <Grid className={classes.grid} item xs={6}>
              <Typography className={classes.text} align='center'>Stands</Typography>
              <Typography className={classes.text} variant="h6" align='center'><LocalParkingIcon color='primary'/>{currentStation.available_bike_stands}</Typography>
            </Grid>
            <Grid className={classes.grid} item xs={6}>
              <Typography className={classes.text} align='center'>Bikes</Typography>
              <Typography className={classes.text} variant="h6" align='center'><DirectionsBikeIcon className={classes.bike}/>{currentStation.available_bikes}</Typography>
            </Grid>
            
 
          </Grid>
        </Grid>
        <Grid className={classes.grid} item xs={6}>
          <Typography align='center' className={classes.text}>{currentStation.status} - {currentStation.bike_stands} Stands</Typography>
          <Grid className={classes.grid} container item xs={12}>
            <BikeStands bikeStands={currentStation.bike_stands} availableBikes={currentStation.available_bikes} />
          </Grid>
        </Grid>
        <Grid className={classes.grid} item xs={12}>
          <Typography  variant="subheading">Other stations</Typography>
          <table className={classes.table}>
          <tr>
            <th align="left">station</th>
            <th align="left">stands</th> 
            <th align="left">bikes</th>
            <th align="left">distance</th>
          </tr>
          <tr>
            <td>Alpha</td>
            <td>10</td>
            <td>30</td>
            <td>0.25km</td>
          </tr>
          <tr>
            <td>Beta</td>
            <td>10</td>
            <td>30</td>
            <td>0.25km</td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>10</td>
            <td>30</td>
            <td>0.25km</td>
          </tr>
        </table>
      </Grid>
      <Grid className={classes.grid} item xs={12}>
        <Typography align='center' variant="caption">last updated -  14:30</Typography>
      </Grid>
      </Grid>
    </div>
  );
}

Nearby.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nearby);
