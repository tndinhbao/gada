import React, { Component } from 'react';
import GoogleApiWrapper from './GoogleApiComponent';
import Map from './Map';


export class Container extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    const initialCenter = {
        lat: '10.7582777',
        lng: '106.67761250000001'
    }
    return (
      <div>
          <Map google={this.props.google} initialCenter={initialCenter} zoom={14} 
          centerAroundCurrentLocation/>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA2Tl2z7h95DgF_v1fRUodWvtnDWkQgdHc'
})(Container)