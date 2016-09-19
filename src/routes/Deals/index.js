export default (store) => ({
  path: 'deals',

  getComponent(nextState, next) {
    require.ensure([], (require) => {
      const DealsContainer = require('./containers/DealsContainer').default

      next(null, DealsContainer)
    }, 'deals')
  }
})
