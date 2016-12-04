export default (store) => ({
  path: 'search/result',

  getComponent(nextState, next) {
    require.ensure([], (require) => {
      const ResultContainer = require('./containers/ResultContainer').default

      next(null, ResultContainer)
    }, 'results')
  }
})
