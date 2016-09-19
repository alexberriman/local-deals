import dummyDeals from './deals.json'

export const REQUEST_DEALS = 'REQUEST_DEALS'
export const RECEIVE_DEALS = 'RECEIVE_DEALS'

export function requestDeals() {
  return {
    type: REQUEST_DEALS
  }
}

export function receiveDeals(err, deals) {
  return {
    type: RECEIVE_DEALS,
    error: err,
    payload: deals
  }
}

export function fetchDeals() {
  return (dispatch, getState, api) => {
    dispatch(requestDeals())
    dispatch(receiveDeals(null, dummyDeals))
  }
}
