import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

import { environment } from './environment/environment';
import Map from './views/Map';
import Header from './components/Header';
import CircularIndeterminate from './components/CircularIndeterminate';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#212121',
      main50: '#fafafa',
      main100: '#f5f5f5',
      main200: '#eeeeee',
      main300: '#e0e0e0',
      main400: '#bdbdbd',
      main500: '#9e9e9e',
      main600: '#757575',
      main700: '#616161',
      main800: '#424242'
    },
  },
});
class App extends Component {
  

  constructor(){
    super();
    this.getStations = this.getStations.bind(this)
    this.handleName = this.handleName.bind(this)
    this.updateStation = this.updateStation.bind(this)
    this.state = {
      center: { }, 
      zoom: 16,
      stations: [],
      station: '',
      type: 'bike' // Add Pre-screen to decide this state
    }
  }
  

  componentDidMount() {
    this.getGeolocation();
    // Refresh every 60 seconds
    setInterval(() => {
      this.getStations(this.state.center.lat, this.state.center.lng)
    }, 60000)
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.setState({
          center: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }
        }, () => this.getStations(this.state.center.lat, this.state.center.lng));
      });
      this.watchGeoLocation();
    } else {
      // Set 'center' to city center
      this.setState({
        center: {
          lat: 53.347316, lng: -6.259184
        }
      }, () => this.getStations(this.state.center.lat, this.state.center.lng));
      
    }
  }

  watchGeoLocation() {
    navigator.geolocation.watchPosition(pos => {
      this.setState({
        center: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });
    })
  }

  updateStation(val) {
    const setActiveStation = this.state.stations.map(s => (val.number === s.number) ? (s.active = true, s) : (s.active = false, s))
    this.setState({ 
      station: val,
      stations: setActiveStation
    })
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
    const result = stations.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0));
    result[0].active = true;
    this.setState({ station: result[0] } )
    return result;
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
  
  handleName(e, a) {
    return this.state.type !== a && a !== null && this.setState({ type: a });
  }
  
  render() {
    if (this.state.stations.length) {
      return (
        <MuiThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div id="wrapper">
          <Header 
            currentStation={ this.state.station }
            mapType={this.state.type}
            setName={this.handleName} />
          <div className='main'>
            <Route
              path="/"
              render={(props) => <Map {...props}
                mapType={ this.state.type }
                updateStation={ this.updateStation }
                stations={ this.state.stations }
                center={ this.state.center }
                zoom={ this.state.zoom }
              />} />
              </div>
          </div>
        </BrowserRouter>   
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
