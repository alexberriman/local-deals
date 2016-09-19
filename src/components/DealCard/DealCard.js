import React from 'react'

import { Card, CardTitle, CardText } from 'material-ui/Card'
import { IconPlace } from 'components/Icons'

import classes from './DealCard.scss'

export default class DealCard extends React.Component {

  /**
   * Sets up the component.
   *
   * @param props
   */
  constructor(props) {
    super(props)
    this._onClick = ::this._onClick
  }

  /**
   * Handles a click on the deal.
   *
   * @private
   */
  _onClick() {
    const { deal, onClick } = this.props
    onClick(deal)
  }

  /**
   * Renders the deal card.
   *
   * @returns {XML}
   */
  render() {
    const { deal } = this.props

    return (
      <div
        className={classes.card}
        onClick={this._onClick}
      >
        <Card>
          <img src={deal.image_url} />
          <CardTitle
            subtitle={<span className={classes.subtitle}><IconPlace />{deal.location}</span>}
            title={deal.title}
          />
          <CardText>
            {deal.description}
          </CardText>
        </Card>
      </div>
    )
  }
}
DealCard.propTypes = {
  deal: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
}
