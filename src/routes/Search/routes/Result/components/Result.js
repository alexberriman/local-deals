import React from 'react'

import DealCard from 'components/DealCard'

import classes from './Result.scss'

export default class Result extends React.Component {

  /**
   * Renders the Result component.
   */
  render() {
    const { results, onResultClick } = this.props

    return (
      <div className={classes.container}>
        {results.map(result =>
          <DealCard
            deal={result}
            key={result.id}
            onClick={onResultClick}
          />
        )}
      </div>
    )
  }
}
Result.propTypes = {
  results: React.PropTypes.array.isRequired,
  onResultClick: React.PropTypes.func
}
Result.defaultProps = {
  onResultClick: () => {}
}
