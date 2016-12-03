import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'search/result',

  getComponent(nextState, next) {
    require.ensure([], (require) => {
      const ResultContainer = require('./containers/ResultContainer').default
      const dealReducer = require('./modules/reducers').dealReducer
      injectReducer(store, { key: 'dealView', reducer: dealReducer })

      next(null, DealContainer)
    }, 'deal')
  }
})
