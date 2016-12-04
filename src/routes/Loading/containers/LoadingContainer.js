import React from 'react'
import {connect} from 'react-redux'

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
          <h2>Local deals and promotions</h2>
        </div>
        <div className={classes.loading}>
          <img src="/img/loading.svg"/>
        </div>
      </div>
    )
  }
}

export default connect()(LoadingContainer)
