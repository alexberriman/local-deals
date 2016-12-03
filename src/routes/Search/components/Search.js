import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import CenterLayout from 'layouts/CenterLayout'
import Spinner from 'components/Spinner'
import {connectForm, redirectOnSuccess} from 'components/Form/Form'

import classes from './Search.scss'
import strings from './Search.strings'

export default (submitAction, redirectTo) => {
  @redirectOnSuccess(redirectTo)
  class Search extends React.Component {

    /**
     * Sets up the component.
     *
     * @param props
     */
    constructor(props) {
      super(props)

      this.state = {
        form: {
          query: ''
        },
        formErrors: {}
      }
      this._onFieldChange = ::this._onFieldChange
      this._onSubmit = ::this._onSubmit
    }

    /**
     * Updates the state with the new field value.
     *
     * @param e
     * @private
     */
    _onFieldChange(e) {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      })
    }

    /**
     * Validates the form.
     *
     * @private
     */
    _validate() {
      const {props} = this
      const {query} = this.state.form
      let formErrors = {}

      if (!query.length) {
        formErrors.query = props.errorEmail
      }


      return formErrors
    }

    /**
     * Submits the form.
     *
     * @private
     */
    _onSubmit(e) {
      e.preventDefault()
      const formErrors = this._validate()

      this.setState({formErrors}, () => {
        if (!Object.keys(formErrors).length) {
          const {query} = this.state.form
          this.props.onSubmit(query)
        }
      })
    }

    /**
     * Renders the search form.
     *
     * @returns {XML}
     */
    render() {
      const {props} = this
      const {form, formErrors} = this.state

      const style = {
        height: 50,
        width: '100%'
      }

      return (
        <CenterLayout className={classes.searchContainer}>
          <form
            className={classes.container}
            onChange={this._onFieldChange}
            onSubmit={this._onSubmit}
          >
            <TextField
              className={classes.input}
              errorText={formErrors.query}
              floatingLabelText={props.labelQuery}
              hintText={props.hintQuery}
              name='query'
              value={form.query}
            />
            <br />
            <br />
            <div className={classes.formActions}>
              <RaisedButton
                style={style}
                primary={true}
                label={!props.submitting && props.labelSubmit}
                icon={props.submitting && <Spinner size='small'/>}
                type='submit'
              />
            </div>
          </form>
        </CenterLayout>
      )
    }
  }
  Search.propTypes = {
    errorQuery: React.PropTypes.string,
    hintQuery: React.PropTypes.string,
    labelQuery: React.PropTypes.string,
    labelSubmit: React.PropTypes.string,
    onSubmit: React.PropTypes.func
  }
  Search.defaultProps = {
    errorQuery: strings.errorQuery,
    labelQuery: strings.labelQuery,
    hintQuery: strings.hintQuery,
    labelSubmit: strings.labelSubmit
  }

  return connectForm(Search, submitAction)
}
