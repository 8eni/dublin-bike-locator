// import React from 'react';
// import Button from '@material-ui/core/Button';

// const StationDetails = ({ stationDetails }) => (stationDetails) ?
  // <div>
  //   { stationDetails.name } Stands - { stationDetails.available_bikes } 
  //   Bikes - { stationDetails.available_bike_stands } - { stationDetails.distance }
  //   <Button variant="contained" color="primary">
  //     Hello Worlds
  //   </Button>
  // </div> :
//   <div>none</div>

// export default StationDetails;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
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
});

function StationDetails(props) {
  const { classes, stationDetails } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            {/* <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase> */}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">{ stationDetails.address }</Typography>
                <Typography gutterBottom>{ stationDetails.last_update}</Typography>
                <Typography color="textSecondary">BIKES: { stationDetails.available_bikes } | SPACES: { stationDetails.available_bike_stands }</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{ stationDetails.distance }Km</Typography>
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
