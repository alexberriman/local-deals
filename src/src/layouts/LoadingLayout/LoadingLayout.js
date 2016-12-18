import React from 'react'

import classes from './LoadingLayout.scss'

const LoadingLayout = props => (
  <div className={classes.container}>
    {props.children}
  </div>
)
LoadingLayout.propTypes = {
  children: React.PropTypes.any
}

export default LoadingLayout
