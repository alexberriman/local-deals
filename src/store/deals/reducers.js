import {
  REQUEST_DEALS,
  RECEIVE_DEALS
} from './actions'

const initialState = {
  deals: null,
  error: null,
  loading: false
}

export default function dealsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DEALS:
      return {
        ...state,
        ...initialState,
        loading: true
      }
    case RECEIVE_DEALS:
      return {
        ...state,
        deals: action.payload,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}
