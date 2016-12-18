import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import {IconPlace} from 'components/Icons'

import classes from './Deal.scss'

export default class Deal extends React.Component {

  /**
   * Renders the Deals component.
   */
  render() {
    const {deal} = this.props

    let images = null;
    if (deal.images.length > 0) {
      images = deal.images.map(function (img) {
        return (
          <li>
            <img src={img.src}/>
          </li>
        )
      })
    }

    return (
      <div className={classes.container}>
        <img src={deal.image_url}/>

        {deal.images.length > 0 &&
          <ul className={classes.images}>
            {images}
          </ul>
        }
        <div class={classes.clearFix}></div>

        <h2 className={classes.title}>{deal.title}</h2>
        <span className={classes.location}>
          <IconPlace /> {deal.location}
        </span>
        <div className={classes.description}>
          {deal.description}
        </div>

        <RaisedButton
          href={"/deal/" + deal.id + "/location"}
          label="View location on maps"
          type='submit'
          fullWidth={true}
          primary={true}
        />
      </div>
    )
  }
}
Deal.propTypes = {
  deal: React.PropTypes.object.isRequired
}
