import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class BikeStands extends Component {

  createTable = (bikeStands, availableBikes) => {
    let table = []
    for (let i = 0; i < bikeStands; i++) {
      table.push(
        <Grid item xs={6}
          align={ Math.abs(i % 2) == 1 ? "left" : "right"}
          className={`stand ${(availableBikes > i ? 'bike' : 'nobike')}`}>
          <span>{ i+1 }</span>
        </Grid>
        )
    }
    return table
  }
 
  render() {
    const { bikeStands, availableBikes } = this.props;
    return(
      <Grid container item xs={12} className="bike-stand-container">
        {this.createTable(bikeStands, availableBikes)}
      </Grid>
    )
  }

}

export default BikeStands;