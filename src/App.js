import React, { Component } from 'react';
import '../public/semantic/dist/semantic.css';
import MapContainer from './components/map/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />
      </div>
    );
  }
}

export default App;
