import React, { Component } from 'react';
class Marker extends Component {

  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.props.viewStation(this.props.station)
  }

  render() {
    return (
      <div className="marker" onClick={ this.handleClick }></div>
    )
  }
}
export default Marker;