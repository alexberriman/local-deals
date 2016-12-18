export default (store) => ({
  path: 'search',

  getComponent(nextState, next) {
    require.ensure([], (require) => {
      const SearchContainer = require('./containers/SearchContainer').default

      next(null, SearchContainer)
    }, 'search')
  }
})
