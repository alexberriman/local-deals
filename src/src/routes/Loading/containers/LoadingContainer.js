import React from 'react'
import {connect} from 'react-redux'

import classes from './LoadingContainer.scss'

class LoadingContainer extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      window.location = '/deals'
    }, 4000)
  }

  /**
   * Renders the loading component.
   *
   * @returns {XML}
   */
  render() {
    return (
      <div className={classes.loadingContainer}>
        <div className={classes.title}>
          <img src="/img/logo.png"/>
          <h1><span>Shop</span> Eye</h1>
        </div>
      </div>
    )
  }
}

export default connect()(LoadingContainer)
