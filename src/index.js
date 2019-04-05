import {  } from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
// import './assets/material-kit.css';

const target = document.querySelector('#root');

render(
  <link rel="apple-touch-icon" sizes="180x180" href="https://8eni.github.io/dublin-bike-locator/images/icons/icon-72x72.png"></link>
  <App />,
  target
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
