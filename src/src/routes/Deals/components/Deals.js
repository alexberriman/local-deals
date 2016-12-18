import React from 'react'

import DealCard from 'components/DealCard'

import classes from './Deals.scss'

export default class Deals extends React.Component {

  /**
   * Renders the Deals component.
   */
  render() {
    const { deals, onDealClick } = this.props

    return (
      <div className={classes.container}>
        {deals.map(deal =>
          <DealCard
            deal={deal}
            key={deal.id}
            onClick={onDealClick}
          />
        )}
      </div>
    )
  }
}
Deals.propTypes = {
  deals: React.PropTypes.array.isRequired,
  onDealClick: React.PropTypes.func
}
Deals.defaultProps = {
  onDealClick: () => {}
}
