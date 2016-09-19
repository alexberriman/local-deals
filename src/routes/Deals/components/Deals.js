import React from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'

import { IconPlace } from 'components/Icons'

import classes from './Deals.scss'
import strings from './Deals.strings'

export default class Deals extends React.Component {

  /**
   * Renders the Deals component.
   */
  render() {
    const { deals } = this.props

    return (
      <div className={classes.container}>
        {deals.map(deal =>
          <DealCard
            deal={deal}
            key={deal.id}
          />
        )}
      </div>
    )
  }
}
Deals.propTypes = {
  deals: React.PropTypes.array.isRequired
}

const DealCard = ({ deal }) => (
  <div className={classes.card}>
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
DealCard.propTypes = {
  deal: React.PropTypes.object.isRequired
}
