import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LocalParkingIcon from '@material-ui/icons/LocalParking';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: '#424242',
    color: '#fff'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  text: {
    color: '#fff'
  }
});

function StationDetails(props) {
  const { classes, stationDetails } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            {/* <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase> */}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom className={classes.text} variant="h6">{ stationDetails.address }</Typography>
                <Badge className={classes.margin} badgeContent={stationDetails.available_bike_stands} color="primary">
                  <LocalParkingIcon />
                </Badge>
                <Badge className={classes.margin} badgeContent={stationDetails.available_bikes} color="secondary">
                  <DirectionsBikeIcon />
                </Badge>
                {/* <Typography gutterBottom>{ stationDetails.last_update}</Typography> */}
                {/* <Typography color="textSecondary">BIKES: { stationDetails.available_bikes } | SPACES: { stationDetails.available_bike_stands }</Typography> */}
              </Grid>
              {/* <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Show on map</Typography>
              </Grid> */}
            </Grid>

            <Grid item>
              <Typography className={classes.text} variant="h6">{ stationDetails.distance } km</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

StationDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StationDetails);
