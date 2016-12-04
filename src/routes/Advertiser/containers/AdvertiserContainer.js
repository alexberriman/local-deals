import React from 'react'
import { connect } from 'react-redux'

import classes from './AdvertiserContainer.scss'

class AdvertiserContainer extends React.Component {


  render() {

    return (
      <div className={classes.alert}>
        <strong>Error: </strong>Missing key 'id' on 'advertiser' collection.
      </div>
    )
  }
}

export default connect()(AdvertiserContainer)
