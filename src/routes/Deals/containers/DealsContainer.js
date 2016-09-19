import React from 'react'
import { connect } from 'react-redux'

import Deals from '../components/Deals'
import { fetchDeals } from 'store/deals/actions'

import strings from './DealsContainer.strings.js'

export default class DealsContainer extends React.Component {

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
      />
    )
  }
}
DealsContainer.propTypes = {
  deals: React.PropTypes.object.isRequired,
  fetchDeals: React.PropTypes.func.isRequired,
  layout: React.PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  deals: state.deals
})

const mapDispatchToProps = {
  fetchDeals
}

export default connect(mapStateToProps, mapDispatchToProps)(DealsContainer)
