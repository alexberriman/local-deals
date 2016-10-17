import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import { IconPlace } from 'components/Icons'

import classes from './Deal.scss'

export default class Deal extends React.Component {

  /**
   * Renders the Deals component.
   */
  render() {
    const { deal } = this.props

    return (
      <div className={classes.container}>
        <img src={deal.image_url} />
        <h2 className={classes.title}>{deal.title}</h2>
        <span className={classes.location}>
          <IconPlace /> {deal.location}
        </span>
        <div className={classes.description}>
          {deal.description}
        </div>
      </div>
    )
  }
}
Deal.propTypes = {
  deal: React.PropTypes.object.isRequired
}
