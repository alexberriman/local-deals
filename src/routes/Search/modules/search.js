/**
 * Performs a search
 *
 * @param query
 * @param callback
 * @returns {function(*, *, *)}
 */
export function search(query, callback) {
  return (dispatch, getState, api) => {
    setTimeout(() => {
      callback(null)
    }, 1000)
  }
}
