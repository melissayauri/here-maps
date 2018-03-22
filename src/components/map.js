import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
class MyMap extends Component {
 static defaultProps = {
  center: {
   lat: -12.111062,
   lng: -77.0315913
  },
  zoom: 12
 };

 render() {
  return (
   <div style={{ height: '70vh', width: '100%' }}>
    <GoogleMapReact
     bootstrapURLKeys={{ key: 'AIzaSyDT1FgK8pARI-hv79674w5U05px8_Vt5zI'}}
     defaultCenter={this.props.center}
     defaultZoom={this.props.zoom}
    >
    </GoogleMapReact>

   </div>
  );
 }
}
export default MyMap;
