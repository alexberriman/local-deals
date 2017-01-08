import React from 'react'

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import FontAwesome from "react-fontawesome"

import classes from './SearchMap.scss'

const position = {
  lat: -33.675960,
  long: 151.306530
}

const defaultZoom = 14

const SearchResultMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={defaultZoom}
      defaultCenter={{lat: position.lat, lng: position.long}}
      onClick={props.onMapClick}
    >
      {props.markers.map((marker, index) => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(index)}
        />
      ))}
    </GoogleMap>
  ))
)

export default class SearchMap extends React.Component {
  /**
   * Set up the SearchMap object
   * @param props
   */
  constructor(props) {
    super(props)

    console.log("search maps instantiated")
    console.log(props)
  }

  /**
   * On mount, retrieve the user's current position
   */
  componentDidMount() {
    console.log('component mounted')

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
      }
    )
  }

  clicked() {
    console.log('map clicked')
  }

  mapLoaded() {
    console.log('map loaded')
  }

  markerClicked() {
    console.log('marker clicked')
  }

  render() {
    const {markers} = this.props
    console.log(markers)
    return (
      <div className={classes.search}>
        <SearchResultMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
          loadingElement={
            <div style={{height: `100%`}}>
              <FontAwesome name='rocket'/>
            </div>
          }
          containerElement={
            <div style={{height: `100%`}}/>
          }
          mapElement={
            <div style={{height: `100%`}}/>
          }
          markers={markers}
          onMapLoad={this.mapLoaded}
          onMapClick={this.clicked}
          onMarkerRightClick={this.markedClicked}
        />
      </div>
    )
  }
}

SearchMap.propTypes = {
  center: React.PropTypes.array,
  zoom: React.PropTypes.number,
  greatPlaceCoords: React.PropTypes.any
}
