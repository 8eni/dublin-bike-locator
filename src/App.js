import React, { Component } from 'react';
import './App.css';
import Map from './views/Map';

class App extends Component {

  constructor(){
    super();
    this.state = {
      center: {}, 
      zoom: 16
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    }
  }

  render() {
    return (
      <Map center={ this.state.center } zoom={ this.state.zoom }/>
    );
  }
}

export default App;
