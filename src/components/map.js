import React, { Component } from 'react'
import HEREMap from 'react-here-maps';

class Mapita extends Component {
    render() {
        return (
            <HEREMap
                appId='kNvcWGeDcX93OKDhzGXy'
                appCode='KxJPW0n6SeLi0AFwUk0EAw'
                center={{ lat: 0, lng: 0 }}
                zoom={14}
            />
        )
    }
}

export default Mapita
