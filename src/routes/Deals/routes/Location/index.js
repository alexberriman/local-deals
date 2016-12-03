import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'deal/:id/location',

  getComponent(nextState, next) {
    require.ensure([], (require) => {
      const LocationContainer = require('./containers/LocationContainer').default
      const dealReducer = require('../View/modules/reducers').dealReducer
      injectReducer(store, { key: 'dealView', reducer: dealReducer })

      next(null, DealContainer)
    }, 'deal')
  }
})
