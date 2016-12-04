export default (store) => ({
  path: 'advertiser',

  getComponent(nextState, next) {
    require.ensure([], (require) => {
      const AdvertiserContainer = require('./containers/AdvertiserContainer').default

      next(null, AdvertiserContainer)
    }, 'advertiser')
  }
})
