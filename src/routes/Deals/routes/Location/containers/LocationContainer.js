import React from 'react'
import { connect } from 'react-redux'

import Location from '../components/Location'
import { fetchDeal } from '../../View/modules/actions'

import strings from './LocationContainer.strings.js'

class DealContainer extends React.Component {

  /**
   * Fetches the user's profile.
   */
  componentDidMount() {
    const { fetchDeal, layout, params } = this.props
    fetchDeal(params.id)
    layout.setHeader({
      displayMenuAsBackButton: true
    })
  }

  /**
   * Updates the document title when the deal has loaded.
   *
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    const { deal } = nextProps
    if (this.props.deal.deal === null && deal.deal) {
      this.props.layout
        .setTitle(deal.deal.title)
        .updateHeader({
          title: deal.deal.title
        })
    }
  }

  /**
   * Renders the Navigation Drawer.
   *
   * @returns {*}
   */
  render() {
    const { deal } = this.props

    if (deal.loading || !deal.deal) {
      return null
    }

    return (
      <Location
        {...this.props}
        deal={deal.deal}
      />
    )
  }
}
DealContainer.propTypes = {
  deal: React.PropTypes.object.isRequired,
  fetchDeal: React.PropTypes.func.isRequired,
  layout: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  deal: state.dealView
})

const mapDispatchToProps = {
  fetchDeal
}

export default connect(mapStateToProps, mapDispatchToProps)(DealContainer)
