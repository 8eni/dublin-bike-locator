import React, { Component } from 'react';
import './App.css';
import Map from './views/Map';
import axios from 'axios';
import { environment } from 'environment/environment';
import BottomNav from './components/BottomNav';
import CircularIndeterminate from './components/CircularIndeterminate';
import StationDetails from './components/StationDetails';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#263238',
    },
  },
});
class App extends Component {

  constructor(){
    super();
    this.dbBaseUrl = environment.db_base_url;
    this.dbContract = environment.db_contract;
    this.dbApiKey = environment.db_api_key;
    this.getStations = this.getStations.bind(this)
    this.state = {
      center: {}, 
      zoom: 16,
      stations: []
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.getStations(position.coords.latitude, position.coords.longitude)
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    }
  }

  getStations(lat, lng) {
    axios.get(`${this.dbBaseUrl}stations?contract=${this.dbContract}&apiKey=${this.dbApiKey}`)
      .then(res => {
        const result = res.data.map(item => {
          item.distance = this.distance(
            lat,
            lng,
            item.position.lat, item.position.lng, 'K').toFixed(2);
            return item;
        })
        this.setState({ 
          stations: this.getClosest(result)
        })
      });
  }

  getClosest(stations) {
    return stations.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0))
    // debugger
    // return newt[0];
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

  render() {
    if (this.state.stations.length) {
      return (
        <MuiThemeProvider theme={theme}>
          { this.state.stations.map((station, i) =>

            <StationDetails
            key={ i }
            stationDetails={ station } />
            // <Marker
            //   key={ i }
            //   viewStation={ this.updateStation }
            //   lat={ station.position.lat }
            //   lng={ station.position.lng }
            //   station={ station } />
          )}
          {/* <Map stations={ this.state.stations } center={ this.state.center } zoom={ this.state.zoom }/> */}
          <BottomNav />
        </MuiThemeProvider>
      );
    } else {
      return (
      <MuiThemeProvider theme={theme}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CircularIndeterminate></CircularIndeterminate>
      </div>
      </MuiThemeProvider>
      )
    }
  }
}

export default App;
