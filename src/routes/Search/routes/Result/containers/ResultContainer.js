import React from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Result from '../components/Result'
import { IconClose, IconSearch } from 'components/Icons'
import { fetchResults } from 'store/deals/actions'

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
      filteredResults: props.results.results || [],
      searching: false
    }
    this._onResultClick = ::this._onResultClick
    this._onFilterChange = ::this._onFilterChange
    this._toggleSearch = ::this._toggleSearch
  }

  /**
   * Fetches the user's profile.
   */
  componentDidMount() {
    const { results, fetchResults, layout } = this.props
    if (!results.loading && !results.results) {
      fetchResults()
    }
  }

  /**
   * Updates the results array when new results are received.
   *
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    const { results } = nextProps
    if (this.props.results.results === null && results.results) {
      this.setState({
        filteredResults: results.results
      })
    }
  }

  /**
   * Navigates to the selected result.
   *
   * @param result
   * @private
   */
  _onResultClick(result) {
    this.props.push(`/deal/${result.id}`)
  }

  /**
   * Toggles the search bar.
   *
   * @private
   */
  _toggleSearch() {
    this.setState({
      searching: !this.state.searching
    }, () => {
      let search =
        <IconSearch
          onClick={this._toggleSearch}
        />

      if (this.state.searching) {
        search =
          <div>
            <div className={classes.search}>
              <TextField
                name='search'
                onChange={this._onFilterChange}
                ref={c => c !== null && c.focus()}
              />
              <IconClose
                onClick={this._toggleSearch}
              />
            </div>
          </div>
      }

      this.props.layout.updateHeader({
        contextualOptions: [search]
      })
    })
  }

  /**
   * Updates the result filter.
   *
   * @param e
   * @private
   */
  _onFilterChange(e) {
    const filter = e.target.value
    const results = this.props.results.results.filter(result =>
      Object.keys(result).some(key =>
        typeof result[key] === 'string' && (new RegExp(filter, 'i').test(result[key]))
      )
    )
    this.setState({
      filteredResults: results
    })
  }

  /**
   * Renders the Navigation Drawer.
   *
   * @returns {*}
   */
  render() {
    const { results } = this.props
    const { filteredResults } = this.state

    if (results.loading || !results.results) {
      return null
    }

    return (
      <div>
        <Deals
          {...this.props}
          deals={filteredResults}
          onDealClick={this._onResultClick}
        />
      </div>
    )
  }
}
ResultContainer.propTypes = {
  results: React.PropTypes.object.isRequired,
  fetchResults: React.PropTypes.func.isRequired,
  layout: React.PropTypes.object.isRequired,
  push: React.PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  results: state.results
})

const mapDispatchToProps = {
  fetchResults,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)
