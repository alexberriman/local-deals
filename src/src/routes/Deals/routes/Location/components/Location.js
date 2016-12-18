import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import { IconPlace } from 'components/Icons'

import classes from './Location.scss'

export default class Location extends React.Component {

  /**
   * Renders the Deals component.
   */
  render() {
    const { deal } = this.props

    return (
      <div className={classes.container}>

      </div>
    )
  }
}
Location.propTypes = {
  deal: React.PropTypes.object.isRequired
}
