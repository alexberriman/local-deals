import { push } from 'react-router-redux'

/**
 * Performs a search
 *
 * @param query
 * @param callback
 * @returns {function(*, *, *)}
 */
export function search(query, callback) {
  return (dispatch, getState, api) => {
    console.log('search query')
    console.log(callback)
    setTimeout(() => {
      dispatch(push('/search/result'))
    }, 1000)
  }
}
