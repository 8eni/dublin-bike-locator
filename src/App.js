import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';
import Login from './views/Login';
import Signup from './views/Signup';
import Country from './views/Country';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/country" component={Country} />
        </Switch>
      </Router>
    );
  }
}

export default App;
