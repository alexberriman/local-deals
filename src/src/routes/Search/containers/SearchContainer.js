import React from 'react'
import { connect } from 'react-redux'

import { search } from '../modules/search'

import SearchForm from '../components/Search'

class SearchContainer extends React.Component {

  /**
   * Sets up the component.
   *
   * @param props
   */
  constructor(props) {
    super(props)
    this.SearchForm = SearchForm(search, '/search')
  }

  /**
   * Renders the search component.
   *
   * @returns {XML}
   */
  render() {
    return (
      <this.SearchForm
        {...this.props}
      />
    )
  }
}
SearchForm.propTypes = {
  location: React.PropTypes.object.isRequired
}

export default connect()(SearchContainer)
