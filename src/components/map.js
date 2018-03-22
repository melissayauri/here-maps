import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class MyMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      center: {
      lat: -12.111062,
      lng: -77.0315913
     }
    };
    this.onMyPos = this.onMyPos.bind(this);
  }

onMyPos() {
  this.search();
}

search() {
  //alert('funciona!!')
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const coords = position.coords;
                console.log(coords)
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            })
        }
  }


  render() {
     const {center} = this.state
    return (
      <div style={{ height: '80vh', width: '100%' }}>
      <button onClick={this.onMyPos}>Mi ubicacion</button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDT1FgK8pARI-hv79674w5U05px8_Vt5zI'}}
          defaultCenter={center}
          defaultZoom={12}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default MyMap;