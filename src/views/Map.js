import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { environment } from '../environment/environment';
import CurrentLocation from '../components/CurrentLocation';
import MapStyles from '../assets/MapStyles';  
import Marker from '../components/Marker';

class Map extends Component {
  constructor(props) {
    super(props)
    this.googleMapsApiKey = environment.google_maps_api_key;
    this.updateStation = this.updateStation.bind(this)
    this.state = { 
      station: 'station',
      stations: []
    }
  }

  componentDidMount() {
    this.setState({ station: this.state.stations[0] })
  }

  updateStation(val) {
    this.setState({ station: val })
    this.props.updateStation(val);
  }

  render() {
    const { center, zoom, stations, isBike } = this.props;
    return (
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.googleMapsApiKey }}
          center={ center }
          options={ MapStyles }
          defaultZoom={ zoom }>
          <CurrentLocation
            lat={ center.lat }
            lng={ center.lng } />
          { stations.map((station, i) =>
            <Marker
              key={ i }
              number={ isBike ? station.available_bikes : station.available_bike_stands }
              viewStation={ this.updateStation }
              lat={ station.position.lat }
              lng={ station.position.lng }
              station={ station } />
          )}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;