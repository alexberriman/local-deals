import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Deals from '../components/Result'
import { IconClose, IconSearch } from 'components/Icons'
import { fetchDeals } from 'store/deals/actions'
import SearchMap from 'components/SearchMap'

import classes from './ResultContainer.scss'
import strings from './ResultContainer.strings.js'

class ResultContainer extends React.Component {

  /**
   * Sets up the component.
   *
   * @param props
   */
  constructor(props) {
    super(props)

    this.state = {
      filteredDeals: props.deals.deals || [],
      searching: false
    }
    this._onDealClick = ::this._onDealClick
    this._onFilterChange = ::this._onFilterChange
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
   * Updates the deals array when new deals are received.
   *
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    const { deals } = nextProps
    if (this.props.deals.deals === null && deals.deals) {
      this.setState({
        filteredDeals: deals.deals
      })
    }
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
   * Updates the deal filter.
   *
   * @param e
   * @private
   */
  _onFilterChange(e) {
    const filter = e.target.value
    const deals = this.props.deals.deals.filter(deal =>
      Object.keys(deal).some(key =>
        typeof deal[key] === 'string' && (new RegExp(filter, 'i').test(deal[key]))
      )
    )
    this.setState({
      filteredDeals: deals
    })
  }

  /**
   * Renders the Navigation Drawer.
   *
   * @returns {*}
   */
  render() {
    const { deals } = this.props
    const { filteredDeals } = this.state

    if (deals.loading || !deals.deals) {
      return null
    }

    const defaultValue = ''

    return (
      <div>
        <SearchMap/>
        <div className={classes.searchOptions}>
          <select defaultValue={defaultValue}>
            <option value="">Search radius</option>
            <option value="1">&lt;1km</option>
            <option value="2">&lt;2km</option>
            <option value="5">&lt;5km</option>
            <option value="10">&lt;10km</option>
            <option value="20">&lt;20km</option>
          </select>
          <select defaultValue={defaultValue}>
            <option value="">Sort by</option>
            <option value="locality">Locality</option>
            <option value="expiry">Date expiring</option>
            <option value="added">Date added</option>
            <option value="relevancy">Relevancy</option>
          </select>
          <div className={classes.clear}></div>
        </div>
        <Deals
          {...this.props}
          deals={filteredDeals}
          onDealClick={this._onDealClick}
        />
      </div>
    )
  }
}
ResultContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)
