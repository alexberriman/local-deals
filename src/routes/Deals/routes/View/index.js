import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'deal/:id',

  getComponent(nextState, next) {
    require.ensure([], (require) => {
      const DealContainer = require('./containers/DealContainer').default
      const dealReducer = require('./modules/reducers').dealReducer
      injectReducer(store, { key: 'dealView', reducer: dealReducer })

      next(null, DealContainer)
    }, 'deal')
  }
})
