import React from 'react'

import {Card, CardTitle, CardText} from 'material-ui/Card'
import {IconPlace} from 'components/Icons'

import classes from './DealResultCard.scss'

export default class DealResultCard extends React.Component {

  /**
   * Sets up the component.
   *
   * @param props
   */
  constructor(props) {
    super(props)
    this._onClick = ::this._onClick
  }

  /**
   * Handles a click on the deal.
   *
   * @private
   */
  _onClick() {
    const {deal, onClick} = this.props
    onClick(deal)
  }

  /**
   * Renders the deal card.
   *
   * @returns {XML}
   */
  render() {
    const {deal} = this.props
    const titleStyle = {
      fontSize: 17,
      lineHeight: '22px'
    }

    return (
      <div
        className={classes.card}
        onClick={this._onClick}
      >
        <Card>
          <div className={classes.left}>
            <img src={deal.image_url} className={classes.img}/>
          </div>
          <div className={classes.right}>
            <CardTitle
              subtitle={<span className={classes.subtitle}><IconPlace />{deal.location}</span>}
              title={deal.title}
              titleStyle={titleStyle}
              className={classes.title}
            />
            <div className={classes.company}><span>{deal.company}</span></div>
          </div>
          <div className={classes.clear}></div>
        </Card>
      </div>
    )
  }
}
DealResultCard.propTypes = {
  deal: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
}
