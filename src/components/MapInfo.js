import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiY2dvbnphcnUiLCJhIjoiY2sybmRia2NhMDB0dzNtbDk2YjYzdHNqbyJ9.d6EpSBUDXqxRQTycAACMEw'
});


class MapInfo extends Component {


  render() {
    return (
      <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '80vh',
        width: '80vw'
      }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>

      </Map>
    );
  }
}

export default MapInfo;