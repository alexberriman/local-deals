import React from 'react'

import GoogleMap from 'google-map-react';

import classes from './SearchMap.scss'


export default class SearchMap extends React.Component {
  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  }

  render() {
    return (
      <div className={classes.search}>

      </div>
    )
  }
}

SearchMap.propTypes = {
  center: React.PropTypes.array,
  zoom: React.PropTypes.number,
  greatPlaceCoords: React.PropTypes.any
}
