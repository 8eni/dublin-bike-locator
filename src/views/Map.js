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

  apiIsLoaded(map, maps, lat, lng) {
    console.log(lat);
    
    if (map) {
      const latLng = new maps.LatLng(lat, lng); // Makes a latlng
      // debugger
      map.panTo(latLng);
    }
  };
 // https://github.com/google-map-react/google-map-react/issues/407
 // https://stackoverflow.com/questions/52259634/reposition-the-center-of-the-map-when-the-location-changes
  render() {
    const { pan, center, zoom, stations, mapType } = this.props;
    return (
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.googleMapsApiKey }}
          center={ center }
          options={ MapStyles }
          defaultZoom={ zoom }
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps, pan.lat, pan.lng)}
          >
          <CurrentLocation
            lat={ center.lat }
            lng={ center.lng } />
          { stations.map((station, i) =>
            <Marker
              key={ i }
              number={ mapType === 'bike' ? station.available_bikes : station.available_bike_stands }
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