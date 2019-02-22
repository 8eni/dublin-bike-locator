import React, { Component } from 'react';
// import axios from 'axios';
import GoogleMapReact from 'google-map-react';

import { environment } from '../environment/environment';
import CurrentLocation from '../components/CurrentLocation';
import Marker from '../components/Marker';
import CircularIndeterminate from '../components/CircularIndeterminate';
import StationDetails from '../components/StationDetails';

class Map extends Component {
  constructor(props) {
    super(props)
    this.googleMapsApiKey = environment.google_maps_api_key;
    this.updateStation = this.updateStation.bind(this)
    // this.getStations = this.getStations.bind(this)
    this.state = { 
      station: '',
      stations: []
    }
  }

  componentDidMount() {
    console.log(this.props);
    
    // this.getClosest(this.props.stations)
  }

  updateStation(val) {
    this.setState({ station: val })
  }

  getClosest(stations) {
    const newt = stations.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0))
    // debugger
    return newt[0];
  }

  render() {
    const { center, zoom, stations } = this.props;
    return ( <div><h1>Map</h1> <h4>{ stations.length }</h4></div> );

    // if (Object.keys(center).length && stations.length) {
    //   return (
    //     <div style={{ height: '90vh', width: '100%' }}>
    //       <StationDetails
    //         stationDetails={ this.state.station } />
    //       <GoogleMapReact
    //         bootstrapURLKeys={{ key: this.googleMapsApiKey }}
    //         center={ center }
    //         defaultZoom={ zoom }>
    //         <CurrentLocation
    //           lat={ center.lat }
    //           lng={ center.lng } />
    //         { stations.map((station, i) =>
    //           <Marker
    //             key={ i }
    //             viewStation={ this.updateStation }
    //             lat={ station.position.lat }
    //             lng={ station.position.lng }
    //             station={ station } />
    //         )}
    //       </GoogleMapReact>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <CircularIndeterminate></CircularIndeterminate>
    //   )
    // }
  }
}

export default Map;