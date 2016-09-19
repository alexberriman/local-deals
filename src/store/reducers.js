import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import dealsReducer from './deals/reducers'
import profileReducer from './profile/reducers'
import userReducer from './user/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router,
    ...asyncReducers,
    deals: dealsReducer,
    profile: profileReducer,
    user: userReducer
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
