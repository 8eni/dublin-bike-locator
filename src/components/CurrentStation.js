import React from 'react';
import NearMeIcon from '@material-ui/icons/NearMe';

const CurrentStation = ({ station }) => <div className="currentStation"><NearMeIcon /> { station.address } - { station.distance } km</div>

export default CurrentStation;