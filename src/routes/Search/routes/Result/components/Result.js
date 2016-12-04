import React from 'react'

import DealCard from 'components/DealCard'

import classes from './Result.scss'

export default class Result extends React.Component {

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
Result.propTypes = {
  deals: React.PropTypes.array.isRequired,
  onDealClick: React.PropTypes.func
}
Result.defaultProps = {
  onDealClick: () => {}
}
