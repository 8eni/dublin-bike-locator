import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { environment } from '../environment/environment';
import CurrentLocation from '../components/CurrentLocation';
import Marker from '../components/Marker';

class Map extends Component {
  constructor(props) {
    super(props)
    this.googleMapsApiKey = environment.google_maps_api_key;
    this.updateStation = this.updateStation.bind(this)
    this.state = { 
      station: '',
      stations: []
    }
  }

  componentDidMount() { }

  updateStation(val) {
    this.setState({ station: val })
  }

  getClosest(stations) {
    const newt = stations.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0))
    return newt[0];
  }

  render() {
    const { center, zoom, stations } = this.props;
    return (
      <div style={{ height: '94vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.googleMapsApiKey }}
          center={ center }
          defaultZoom={ zoom }>
          <CurrentLocation
            lat={ center.lat }
            lng={ center.lng } />
          { stations.map((station, i) =>
            <Marker
              key={ i }
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