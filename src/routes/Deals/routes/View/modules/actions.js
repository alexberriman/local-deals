import deals from 'store/deals/deals.json'

export const REQUEST_DEAL = 'REQUEST_DEAL'
export const RECEIVE_DEAL = 'RECEIVE_DEAL'

export function requestDeal() {
  return {
    type: REQUEST_DEAL
  }
}

export function receiveDeal(err, deal) {
  return {
    type: RECEIVE_DEAL,
    error: err,
    payload: deal
  }
}

/**
 * Retrieves information about a deal.
 *
 * @param dealId
 * @param callback
 * @returns {function(*, *, *)}
 */
export function fetchDeal(dealId, callback) {
  return (dispatch, getState, api) => {
    dealId = parseInt(dealId)
    const deal = deals.find(d => d.id === dealId)

    dispatch(requestDeal())

    setTimeout(() => {
      dispatch(receiveDeal(null, deal))
    }, 100)
  }
}
