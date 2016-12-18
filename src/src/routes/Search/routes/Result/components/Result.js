import React from 'react'

import DealResultCard from 'components/DealResultCard'

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
          <DealResultCard
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
