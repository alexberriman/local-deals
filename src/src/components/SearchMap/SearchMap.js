import React from 'react'

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import FontAwesome from "react-fontawesome"

import classes from './SearchMap.scss'

const SearchResultMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{lat: -25.363882, lng: 131.044922}}
      onClick={props.onMapClick}
    >

    </GoogleMap>
  ))
)

export default class SearchMap extends React.Component {
  _lorem() {
    console.log('lorem ipsum')
  }

  render() {
    return (
      <div className={classes.search}>
        <SearchResultMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
          loadingElement={
            <div style={{height: `100%`}}>
              <FontAwesome name='rocket' />
            </div>
          }
          containerElement={
            <div style={{height: `100%`}}/>
          }
          mapElement={
            <div style={{height: `100%`}}/>
          }
          onMapLoad={this._lorem}
          onMapClick={this._lorem}
          onMarkerRightClick={this._lorem}
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
