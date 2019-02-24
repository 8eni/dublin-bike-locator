import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { environment } from '../environment/environment';
import CurrentLocation from '../components/CurrentLocation';
import CurrentStation from '../components/CurrentStation';  
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
    
  }

  updateStation(val) {
    this.setState({ station: val })
  }

  render() {
    const { center, zoom, stations } = this.props;
    return (
      <div style={{ height: '94vh', width: '100%' }}>
        <CurrentStation station={ stations[0]} />
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