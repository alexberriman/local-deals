import React from 'react'
import { connect } from 'react-redux'

import classes from './LoadingContainer.scss'

class LoadingContainer extends React.Component {

  /**
   * Renders the loading component.
   *
   * @returns {XML}
   */
  render() {
    return (
      <div className={classes.loadingContainer}>
        <div className={classes.title}>
          <h1>ShopEye</h1>
        </div>
      </div>
    )
  }
}

export default connect()(LoadingContainer)
