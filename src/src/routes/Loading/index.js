export default (store) => ({
  path: 'loading',

  getComponent(nextState, next) {
    require.ensure([], (require) => {
      const LoadingContainer = require('./containers/LoadingContainer').default

      next(null, LoadingContainer)
    }, 'loading')
  }
})
