import {
  REQUEST_DEAL,
  RECEIVE_DEAL
} from './actions'

const initialDealState = {
  deal: null,
  error: null,
  loading: false
}

export function dealReducer(state = initialDealState, action) {
  switch (action.type) {
    case REQUEST_DEAL:
      return {
        ...state,
        ...initialDealState,
        loading: true
      }
    case RECEIVE_DEAL:
      return {
        ...state,
        deal: action.payload,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}
