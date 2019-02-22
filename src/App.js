import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

import { environment } from 'environment/environment';
import Recent from './views/Recent';
import Map from './views/Map';
import Nearest from './views/Nearest';
import BottomNav from './components/BottomNav';
import CircularIndeterminate from './components/CircularIndeterminate';

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
    this.getStations = this.getStations.bind(this)
    this.state = {
      center: {}, 
      zoom: 16,
      stations: []
    }
  }

  componentDidMount() {
    this.getGeolocation();
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.getStations(pos.coords.latitude, pos.coords.longitude)
        this.setState({
          center: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }
        });
      });
    }
  }

  async getStations(lat, lng) {
    const { dbBaseUrl, dbContract, dbApiKey} = environment;
    const response = await fetch(`${dbBaseUrl}stations?contract=${dbContract}&apiKey=${dbApiKey}`)
    const json = await response.json();
    const result = this.appendDistance(json, lat, lng);
    this.setState({ stations: this.getClosest(result) });
  }

  appendDistance(response, lat, lng) {
    const result = response.map(item => {
      item.distance = this.distance(lat,lng, item.position.lat, item.position.lng, 'K').toFixed(2);
      return item;
    })
    return result;
  }

  getClosest(stations) {
    return stations.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0))
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
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={(props) => <Recent {...props} bool={ true } />} />
            <Route
              path="/map"
              render={(props) => <Map {...props}
                stations={ this.state.stations }
                center={ this.state.center }
                zoom={ this.state.zoom }
              />} />
            <Route exact path="/nearest" component={Nearest} />
              <BottomNav />
          </div>
        </Router>   
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
