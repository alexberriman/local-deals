export default (store) => ({
  path: 'search/result',

  getComponent(nextState, next) {
    require.ensure([], (require) => {
      console.log('fetch component')
      const ResultContainer = require('./containers/ResultContainer').default
      console.log(ResultContainer)

      next(null, ResultContainer)
    }, 'results')
  }
})
