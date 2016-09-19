import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Deals from '../components/Deals'
import { fetchDeals } from 'store/deals/actions'

import strings from './DealsContainer.strings.js'

export default class DealsContainer extends React.Component {

  /**
   * Sets up the component.
   *
   * @param props
   */
  constructor(props) {
    super(props)
    this._onDealClick = ::this._onDealClick
  }

  /**
   * Fetches the user's profile.
   */
  componentDidMount() {
    const { deals, fetchDeals, layout } = this.props
    if (!deals.loading && !deals.deals) {
      fetchDeals()
    }
    layout.setHeader({
      title: strings.title
    })
  }

  /**
   * Navigates to the selected deal.
   *
   * @param deal
   * @private
   */
  _onDealClick(deal) {
    this.props.push(`/deal/${deal.id}`)
  }

  /**
   * Renders the Navigation Drawer.
   *
   * @returns {*}
   */
  render() {
    const { deals } = this.props

    if (deals.loading || !deals.deals) {
      return null
    }

    return (
      <Deals
        {...this.props}
        deals={deals.deals}
        onDealClick={this._onDealClick}
      />
    )
  }
}
DealsContainer.propTypes = {
  deals: React.PropTypes.object.isRequired,
  fetchDeals: React.PropTypes.func.isRequired,
  layout: React.PropTypes.object.isRequired,
  push: React.PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  deals: state.deals
})

const mapDispatchToProps = {
  fetchDeals,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(DealsContainer)
