import React, { Component } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

import { environment } from '../environment/environment';
import CurrentLocation from '../components/CurrentLocation';
import Marker from '../components/Marker';
import StationDetails from '../components/StationDetails';

class Map extends Component {
  constructor(props) {
    super(props)
    this.dbBaseUrl = environment.db_base_url;
    this.dbContract = environment.db_contract;
    this.dbApiKey = environment.db_api_key;
    this.googleMapsApiKey = environment.google_maps_api_key;
    this.updateStation = this.updateStation.bind(this)
    this.getStations = this.getStations.bind(this)
    this.state = { 
      station: '',
      stations: []
    }
  }

  componentDidMount() {
    this.getStations();
  }

  updateStation(val) {
    this.setState({ station: val })
  }

  getClosest(stations) {
    const newt = stations.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0))
    return newt[0];
  }

  distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit==="K") { dist = dist * 1.609344 }
      if (unit==="N") { dist = dist * 0.8684 }
      return dist;
    }
  }

  getStations() { // Move 
    axios.get(`${this.dbBaseUrl}stations?contract=${this.dbContract}&apiKey=${this.dbApiKey}`)
      .then(res => {
        const result = res.data.map(item => {
          item.distance = this.distance(
            this.props.center.lat,
            this.props.center.lng,
            item.position.lat, item.position.lng, 'K');
            return item.toFixed(2);
        })
        this.setState({ 
          stations: result,
          station: this.getClosest(result)
        })
      });
  }

  render() {
    const { center, zoom } = this.props
    if (Object.keys(center).length && this.state.stations.length) {
      return (
        <div style={{ height: '100vh', width: '80%' }}>
          <StationDetails
            stationDetails={ this.state.station } />
          <GoogleMapReact
            bootstrapURLKeys={{ key: this.googleMapsApiKey }}
            center={ center }
            defaultZoom={ zoom }>
            <CurrentLocation
              lat={ center.lat }
              lng={ center.lng } />
            { this.state.stations.map((station, i) =>
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
    } else {
      return (
        <h1>Loading</h1>
      )
    }
  }
}

export default Map;