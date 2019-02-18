import React, { Component } from 'react';
class StationDetails extends Component {

  render() {
    const {
      name,
      available_bikes: bikes,
      available_bike_stands: stands,
      distance
    } = this.props.stationDetails;
    return (name) ?     
      (<div className="station">{ name } Stands - { stands } Bikes - { bikes } - { distance }</div>) :
      (<></>)
  }
}
export default StationDetails;