import React from 'react';

import StationDetails from '../components/StationDetails';

const Nearest = ({ stations }) => 
  ( stations.map((station, i) =>
      <StationDetails
        key={ i }
        stationDetails={ station } />)
  )

export default Nearest;